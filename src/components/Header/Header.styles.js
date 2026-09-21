import styled, { css, keyframes } from 'styled-components';
import { media } from '../../styles/tokens';

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;

/* Sobre la foto del carrusel el texto va blanco; apoyado en el fondo de la
   página va con el color del tema. Sin esto, en modo claro el logo blanco
   quedaba invisible sobre fondo claro. */
const colorSegunFondo = css`
  color: ${({ theme, $transparente }) => ($transparente ? theme.heroText : theme.text)};
`;

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 2rem;
  background: ${({ theme, $transparente }) => ($transparente ? 'transparent' : theme.headerBg)};
  border-bottom: 1px solid
    ${({ theme, $transparente }) => ($transparente ? 'transparent' : theme.divider)};
  ${colorSegunFondo}
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  ${media.md} {
    font-size: 28px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
  letter-spacing: 0.15em;
  /* Sin esto el nombre se parte letra por letra cuando el nav aprieta. */
  white-space: nowrap;
  text-shadow: ${({ theme }) => theme.textShadow};
  ${colorSegunFondo}

  ${media.maxMd} {
    letter-spacing: 0.22em;
  }

  img {
    height: 40px;
    width: auto;
    filter: ${({ theme, $transparente }) => ($transparente ? theme.logoGlow : 'none')};

    ${media.md} {
      height: 58px;
      padding-right: 6px;
    }
  }
`;

export const SubHeader = styled.p`
  margin: 0;
  font-size: 0.77em;
  font-weight: bold;
  color: ${({ theme }) => theme.accentText};

  ${media.md} {
    font-size: 0.69em;
    letter-spacing: 0.0007em;
  }
`;

export const Acciones = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100;

  ${media.maxMd} {
    display: flex;
  }

  span {
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 2px;
    background: currentColor;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Las tres barras se transforman en una X cuando el menú está abierto. */
  ${({ $abierto }) =>
    $abierto &&
    css`
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    `}
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    text-shadow: ${({ theme }) => theme.textShadow};

    ${media.maxMd} {
      display: ${({ $abierto }) => ($abierto ? 'flex' : 'none')};
      flex-wrap: wrap;
      gap: 0;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 1rem 2rem;
      background: ${({ theme }) => theme.headerBg};
      border-top: 1px solid ${({ theme }) => theme.divider};
      animation: ${slideDown} 0.3s ease forwards;
    }
  }

  li {
    ${media.maxMd} {
      width: 50%;
      padding: 0.5rem 0;
    }
  }

  a {
    display: block;
    padding: 0.5rem 1rem;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
    /* Desplegado en móvil el menú es opaco, así que ahí manda el color del tema. */
    color: ${({ theme, $transparente }) => ($transparente ? theme.heroText : theme.text)};

    &:hover {
      color: ${({ theme, $transparente }) =>
        $transparente ? theme.accent : theme.accentText};
    }

    ${media.maxMd} {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const WhatsappText = styled.span`
  color: ${({ theme }) => theme.whatsappText};
`;
