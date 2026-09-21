import { createGlobalStyle } from 'styled-components';

// Única hoja global del proyecto.
// La fuente se carga con <link rel="preload"> desde index.html: un @import acá
// obliga al navegador a descargar el CSS, parsearlo y recién ahí pedir la fuente.
const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    /* Evita el salto horizontal del overlay rotatorio del fondo. */
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Oswald', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accentText};
    }
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
  }

  /* Anillo de foco visible solo para navegación por teclado. */
  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.accentText};
    outline-offset: 2px;
    border-radius: 2px;
  }

  /* Respeta a quien pidió menos animación en su sistema operativo. */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
