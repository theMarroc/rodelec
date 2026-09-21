/**
 * Verifica el contraste de los pares color/fondo que usa el sitio, en los dos
 * temas, contra el mínimo de WCAG 2.1 AA.
 *
 *   npm run check:contrast
 *
 * Sale con código 1 si algún par no llega, así se puede enganchar a un CI.
 */
import { darkTheme, lightTheme } from '../src/styles/themes.js';

const AA_TEXTO = 4.5; // texto normal
const AA_TEXTO_GRANDE = 3; // >= 24px o >= 19px en negrita
const AA_UI = 3; // bordes, íconos y controles

const aRgb = (hex) => {
  const limpio = hex.replace('#', '');
  const completo =
    limpio.length === 3
      ? limpio
          .split('')
          .map((c) => c + c)
          .join('')
      : limpio;
  return [0, 2, 4].map((i) => parseInt(completo.slice(i, i + 2), 16));
};

const luminancia = (hex) => {
  const [r, g, b] = aRgb(hex).map((canal) => {
    const s = canal / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contraste = (frente, fondo) => {
  const a = luminancia(frente);
  const b = luminancia(fondo);
  const [claro, oscuro] = a > b ? [a, b] : [b, a];
  return (claro + 0.05) / (oscuro + 0.05);
};

// Cada par describe un uso real del sitio.
const pares = (t) => [
  ['texto sobre fondo', t.text, t.body, AA_TEXTO],
  ['texto atenuado sobre fondo', t.textMuted, t.body, AA_TEXTO],
  ['texto sobre superficie', t.text, t.surface, AA_TEXTO],
  ['texto atenuado sobre superficie', t.textMuted, t.surface, AA_TEXTO],
  ['acento como texto sobre fondo', t.accentText, t.body, AA_TEXTO],
  ['acento como texto sobre superficie', t.accentText, t.surface, AA_TEXTO],
  ['acento como texto sobre header', t.accentText, t.headerBg, AA_TEXTO],
  ['whatsapp sobre header', t.whatsappText, t.headerBg, AA_TEXTO],
  ['whatsapp sobre fondo', t.whatsappText, t.body, AA_TEXTO],
  ['texto sobre botón amarillo', t.onAccent, t.accent, AA_TEXTO],
  ['texto blanco sobre botón whatsapp', '#ffffff', t.whatsapp, AA_TEXTO],
  ['texto blanco sobre botón whatsapp (hover)', '#ffffff', t.whatsappHover, AA_TEXTO],
  ['texto de input', t.inputText, t.inputBg, AA_TEXTO],
  ['placeholder de input', t.inputPlaceholder, t.inputBg, AA_TEXTO_GRANDE],
  ['error sobre superficie', t.danger, t.surface, AA_TEXTO],
  ['éxito sobre superficie', t.success, t.surface, AA_TEXTO],
  ['borde de acento sobre fondo', t.accentText, t.body, AA_UI],
  ['texto del hero sobre foto oscurecida', t.heroText, '#131722', AA_TEXTO],
];

let fallos = 0;

for (const [nombre, tema] of [
  ['oscuro', darkTheme],
  ['claro', lightTheme],
]) {
  console.log(`\nTema ${nombre}`);
  for (const [uso, frente, fondo, minimo] of pares(tema)) {
    // Los tokens con rgba() o gradientes no se pueden evaluar así.
    if (!frente?.startsWith('#') || !fondo?.startsWith('#')) {
      console.log(`  --     ${uso} (no es un hex plano, se omite)`);
      continue;
    }
    const ratio = contraste(frente, fondo);
    const pasa = ratio >= minimo;
    if (!pasa) fallos += 1;
    console.log(
      `  ${pasa ? 'OK  ' : 'FALLA'} ${ratio.toFixed(2).padStart(6)}:1  (min ${minimo})  ${uso}`,
    );
  }
}

console.log(
  fallos === 0
    ? '\nTodos los pares cumplen WCAG AA.\n'
    : `\n${fallos} par(es) por debajo del mínimo.\n`,
);

process.exit(fallos === 0 ? 0 : 1);
