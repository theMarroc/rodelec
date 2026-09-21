import { useCallback, useEffect, useState } from 'react';

export const STORAGE_KEY = 'rodelec-theme';

const esModoValido = (valor) => valor === 'dark' || valor === 'light';

// Lee la preferencia en este orden: elección guardada > preferencia del sistema > oscuro.
// Debe coincidir con el script inline de index.html que evita el flash inicial.
export const leerModoInicial = () => {
  if (typeof window === 'undefined') return 'dark';

  try {
    const guardado = window.localStorage.getItem(STORAGE_KEY);
    if (esModoValido(guardado)) return guardado;
  } catch {
    // localStorage bloqueado (modo privado, cookies deshabilitadas): seguimos.
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

/**
 * Maneja el tema de color: lo persiste, sigue al sistema mientras el usuario
 * no haya elegido explícitamente, y sincroniza <html> para el CSS y el navegador.
 */
export default function useColorScheme() {
  const [mode, setMode] = useState(leerModoInicial);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    // Le avisa al navegador para que pinte scrollbars y controles nativos acorde.
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  // Si nunca eligió manualmente, el sitio acompaña los cambios del sistema.
  useEffect(() => {
    const consulta = window.matchMedia('(prefers-color-scheme: light)');

    const alCambiar = (evento) => {
      try {
        if (esModoValido(window.localStorage.getItem(STORAGE_KEY))) return;
      } catch {
        // Sin localStorage no hay elección guardada: seguimos al sistema.
      }
      setMode(evento.matches ? 'light' : 'dark');
    };

    consulta.addEventListener('change', alCambiar);
    return () => consulta.removeEventListener('change', alCambiar);
  }, []);

  const toggleMode = useCallback(() => {
    setMode((anterior) => {
      const siguiente = anterior === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(STORAGE_KEY, siguiente);
      } catch {
        // Si no se puede guardar, el cambio igual aplica en esta sesión.
      }
      return siguiente;
    });
  }, []);

  return { mode, toggleMode, isDark: mode === 'dark' };
}
