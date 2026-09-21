import { palette, radii } from './tokens.js';

// Tokens que no cambian entre temas.
// El amarillo de marca y el verde de WhatsApp son identidad, no decoración.
const shared = {
  accent: palette.yellow,
  accentHover: palette.yellowBright,
  accentActive: palette.yellowDeep,
  accentSoft: 'rgba(242, 195, 0, 0.11)',
  // Texto que va ENCIMA del amarillo: siempre oscuro (contraste 11.7:1).
  onAccent: '#000000',
  secondary: palette.blue,
  // Relleno del botón de WhatsApp. El verde brillante de la marca con texto
  // blanco encima da 2:1, así que el botón usa el verde oscuro.
  whatsapp: palette.whatsappDark,
  whatsappHover: palette.whatsappDarkHover,
  radii,

  // El carrusel muestra texto sobre fotos. El degradado oscuro se mantiene en
  // ambos temas justamente para que este blanco siga siendo legible.
  heroText: '#ffffff',
  heroTextMuted: 'rgba(255, 255, 255, 0.82)',
  heroOverlayTop: 'linear-gradient(to bottom, rgba(6, 7, 16, 0.85), transparent)',
  heroOverlayMid: 'linear-gradient(360deg, rgba(6, 7, 16, 0.92) 8%, rgba(6, 7, 16, 0.15) 70%, transparent 100%)',
};

export const darkTheme = {
  ...shared,
  name: 'dark',
  isDark: true,

  // El amarillo como primer plano (texto, íconos, bordes finos). Sobre el
  // navy da 11:1, así que acá es el mismo amarillo de marca.
  accentText: palette.yellow,
  // El verde de marca sobre navy da 7:1, sirve tal cual.
  whatsappText: palette.whatsapp,

  body: palette.navy900,
  surface: palette.navy800,
  surfaceAlt: palette.navy700,
  surfaceTranslucent: 'rgba(255, 255, 255, 0.05)',
  headerBg: palette.navy900,

  text: '#ffffff',
  textStrong: '#ffffff',
  textMuted: '#aab0c0',
  textFaint: '#767d90',

  border: 'rgba(242, 195, 0, 0.55)',
  borderSubtle: 'rgba(255, 255, 255, 0.12)',
  divider: 'rgba(255, 255, 255, 0.08)',

  // Inputs: en oscuro se mantienen claros para que se note dónde escribir.
  inputBg: '#eff0f3',
  inputText: palette.grey900,
  inputBorder: 'transparent',
  inputPlaceholder: palette.grey500,
  label: '#ffffff',
  labelMuted: '#b3b3b3',

  danger: palette.dangerOnDark,
  success: palette.successOnDark,

  textShadow: 'none',
  cardShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
  logoGlow: 'drop-shadow(0 0 3px rgba(255,255,255,0.35)) drop-shadow(0 0 6px rgba(255,255,255,0.2))',
};

export const lightTheme = {
  ...shared,
  name: 'light',
  isDark: false,

  // Sobre fondo claro el amarillo de marca da 1.7:1 y es ilegible. Este oro
  // oscuro conserva la identidad y llega a 4.8:1 sobre #f7f8fa.
  accentText: palette.goldDark,
  // Sobre blanco el verde de WhatsApp da 1.9:1; este es el verde oscuro de la marca.
  whatsappText: palette.whatsappDark,

  body: palette.grey50,
  surface: palette.white,
  surfaceAlt: palette.grey100,
  surfaceTranslucent: 'rgba(11, 12, 26, 0.04)',
  headerBg: palette.white,

  text: palette.grey900,
  textStrong: palette.grey900,
  textMuted: palette.grey600,
  textFaint: palette.grey400,

  border: palette.grey200,
  borderSubtle: palette.grey200,
  divider: palette.grey100,

  inputBg: palette.white,
  inputText: palette.grey900,
  inputBorder: palette.grey200,
  inputPlaceholder: palette.grey500,
  label: palette.grey900,
  labelMuted: palette.grey600,

  danger: palette.dangerOnLight,
  success: palette.successOnLight,

  textShadow: 'none',
  cardShadow: '0 10px 20px rgba(11, 12, 26, 0.08)',
  logoGlow: 'none',
};

export const themes = { dark: darkTheme, light: lightTheme };
