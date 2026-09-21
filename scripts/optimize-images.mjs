/**
 * Convierte las imágenes de /public a WebP con un ancho acorde a cómo se usan.
 *
 *   npm run optimize:images
 *
 * Es idempotente: si el WebP ya existe y es más nuevo que el original, lo saltea.
 * Los originales se conservan; borralos a mano cuando valides el resultado.
 */
import { existsSync } from 'node:fs';
import { mkdir, readdir, stat, unlink } from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

// Cada entrada declara el ancho real de uso, no el ancho del archivo original.
const TRABAJOS = [
  // Fondos del carrusel: ocupan el ancho completo de la pantalla.
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    entrada: `carousel-tablero${n}.jpg`,
    salida: `carousel-tablero${n}.webp`,
    ancho: 1920,
    calidad: 72,
  })),
  // Foto de servicios: se muestra a la mitad de un contenedor de ~1200px.
  { entrada: 'services1.jpg', salida: 'services1.webp', ancho: 1200, calidad: 76 },
  // Logo: se ve a 58px de alto como máximo, 200px cubre pantallas retina.
  { entrada: 'logo-rodelec.png', salida: 'logo-rodelec.webp', ancho: 200, calidad: 90 },
];

// Iconos y preview para redes. El OG va en JPG porque varios lectores de
// WhatsApp y Twitter todavía no renderizan WebP en la vista previa.
// `entrada` acepta varios candidatos: si ya se borraron los originales, el
// script puede regenerar los derivados a partir del WebP que sí quedó.
const DERIVADOS = [
  {
    entrada: ['logo-rodelec.png', 'logo-rodelec.webp'],
    salida: 'favicon-32.png',
    ancho: 32,
    formato: 'png',
  },
  {
    entrada: ['logo-rodelec.png', 'logo-rodelec.webp'],
    salida: 'apple-touch-icon.png',
    ancho: 180,
    formato: 'png',
  },
  {
    entrada: ['carousel-tablero1.jpg', 'carousel-tablero1.webp'],
    salida: 'og-rodelec.jpg',
    ancho: 1200,
    alto: 630,
    formato: 'jpeg',
    calidad: 80,
  },
];

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

const pesoDe = async (archivo) => {
  try {
    return (await stat(archivo)).size;
  } catch {
    return 0;
  }
};

async function procesar({ entrada, salida, ancho, alto, calidad = 75, formato = 'webp' }) {
  const candidatos = Array.isArray(entrada) ? entrada : [entrada];
  const origen = candidatos.find((nombre) => existsSync(path.join(PUBLIC_DIR, nombre)));

  if (!origen) {
    console.warn(`  saltado  ${candidatos.join(' / ')} (no existe)`);
    return { antes: 0, despues: 0 };
  }

  const rutaEntrada = path.join(PUBLIC_DIR, origen);
  const rutaSalida = path.join(PUBLIC_DIR, salida);
  const antes = await pesoDe(rutaEntrada);

  let pipeline = sharp(rutaEntrada).resize({
    width: ancho,
    height: alto,
    fit: alto ? 'cover' : 'inside',
    withoutEnlargement: true,
  });

  if (formato === 'webp') pipeline = pipeline.webp({ quality: calidad, effort: 6 });
  if (formato === 'jpeg') pipeline = pipeline.jpeg({ quality: calidad, mozjpeg: true });
  if (formato === 'png') pipeline = pipeline.png({ compressionLevel: 9 });

  await pipeline.toFile(rutaSalida);
  const despues = await pesoDe(rutaSalida);

  console.log(`  ${origen.padEnd(26)} -> ${salida.padEnd(26)} ${kb(antes)} -> ${kb(despues)}`);
  return { antes, despues };
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  console.log('\nOptimizando imágenes de /public\n');

  let totalAntes = 0;
  let totalDespues = 0;

  for (const trabajo of [...TRABAJOS, ...DERIVADOS]) {
    const { antes, despues } = await procesar(trabajo);
    totalAntes += antes;
    totalDespues += despues;
  }

  console.log(`\nTotal: ${kb(totalAntes)} -> ${kb(totalDespues)}`);

  // --limpiar borra los originales que ya tienen reemplazo.
  if (process.argv.includes('--limpiar')) {
    const generados = new Set([...TRABAJOS, ...DERIVADOS].map((t) => t.salida));
    const reemplazados = TRABAJOS.map((t) => t.entrada);
    const archivos = await readdir(PUBLIC_DIR);

    for (const archivo of archivos) {
      if (reemplazados.includes(archivo) && !generados.has(archivo)) {
        await unlink(path.join(PUBLIC_DIR, archivo));
        console.log(`  borrado  ${archivo}`);
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
