// Paleta cruda del proyecto. Un color solo se define acá.
// Los componentes NUNCA importan esto: consumen los tokens semánticos de themes.js.

export const palette = {
  // Marca
  yellow: '#f2c300',
  yellowBright: '#ffeb3b',
  yellowDeep: '#c9a600',
  goldDark: '#8a6a00',
  blue: '#0d73c5',
  blueLight: '#3aa0f2',

  // Neutros oscuros
  navy900: '#0b0c1a',
  navy800: '#12142b',
  navy700: '#1b1e38',

  // Neutros claros
  white: '#ffffff',
  grey50: '#f7f8fa',
  grey100: '#eef0f4',
  grey200: '#e3e6ec',
  grey400: '#9aa1b1',
  grey500: '#6b7280',
  grey600: '#5a6172',
  grey900: '#14161f',

  // Utilitarios
  whatsapp: '#25d366',
  whatsappHover: '#1ebc57',
  whatsappDark: '#0a6b52',
  whatsappDarkHover: '#0d8566',
  // Estado: un tono por tema, porque el mismo rojo no llega a 4.5:1 en los dos.
  dangerOnDark: '#ff8f8f',
  dangerOnLight: '#b3261e',
  successOnDark: '#4ade80',
  successOnLight: '#15703f',
};

// Escalas compartidas por ambos temas.
export const radii = {
  sm: '4px',
  md: '8px',
  lg: '15px',
  pill: '30px',
};

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

// Helpers de media query: `${media.md} { ... }`
export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  maxSm: `@media (max-width: ${breakpoints.sm})`,
  maxMd: `@media (max-width: ${breakpoints.md})`,
  // Tablets en vertical: el layout necesita padding propio.
  tablet: '@media ((1024px <= height <= 1366px) and (768px <= width <= 1280px))',
};
