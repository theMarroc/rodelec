import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200..700&display=swap');

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Oswald', sans-serif;
    transition: background-color 0.3s, color 0.3s;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.hover};
    }
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
