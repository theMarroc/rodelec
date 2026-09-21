import styled from 'styled-components';
import { media } from '../../styles/tokens';

export const Padder = styled.div`
  background: ${({ theme }) => theme.body};

  ${media.tablet} {
    padding: 0 5rem;
  }
  ${media.xl} {
    padding: 0 10rem;
  }
`;

export const CarouselWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 60vh;
  /* El header es sticky y transparente arriba del todo: el carrusel se mete
     debajo para que la foto arranque en el borde superior de la pantalla. */
  margin-top: -80px;
  padding-top: 80px;
  color: ${({ theme }) => theme.heroText};
  background: ${({ theme }) => theme.body};
  overflow: hidden;
  z-index: 0;

  ${media.md} {
    height: 75vh;
    font-size: 22px;
    margin-top: -90px;
    padding-top: 90px;
  }
  ${media.lg} {
    height: 90vh;
    font-size: 24px;
  }
  @media (max-height: 700px) {
    height: 75vh;
  }
  @media (max-height: 600px) and (min-width: 1024px) {
    height: 85vh;
  }
`;

/* La foto va como <img> y no como background-image: así el navegador la
   descubre en el HTML, le puede dar fetchpriority alta y solo la descarga en
   las rutas donde el carrusel existe. */
export const SlideImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.heroOverlayTop};
  pointer-events: none;
  z-index: 2;
`;

export const MidOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.heroOverlayMid};
  pointer-events: none;
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 600px;
  padding: 0 2rem;

  ${media.md} {
    padding: 4rem 0 0 9.3rem;
  }
  ${media.tablet} {
    padding: 1rem 0 0 1rem;
  }
  @media (max-height: 600px) and (min-width: 1024px) {
    padding: 0 0 0 9.3rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 0.001em;

  em {
    color: ${({ theme }) => theme.accent};
    font-style: normal;
  }
`;

export const Text = styled.p`
  margin-bottom: 2rem;
  font-size: 1em;
  color: ${({ theme }) => theme.heroTextMuted};

  em {
    color: ${({ theme }) => theme.accent};
    font-style: normal;
  }
`;

export const CtaLink = styled.a`
  position: absolute;
  top: 75%;
  left: 2rem;
  z-index: 4;

  ${media.md} {
    left: 1rem;
  }
  @media (min-width: 912px) {
    left: 9.3rem;
  }
`;

export const CtaButton = styled.button`
  padding: 0.9rem 1.5rem;
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.heroText};
  background-color: ${({ theme }) => theme.accentSoft};
  border: solid 4px ${({ theme }) => theme.accent};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.onAccent};
  }
`;

export const NavContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  gap: 4px;
  width: 100%;
`;

export const SlideButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: ${({ $activo }) => ($activo ? 4 : 1)};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme, $activo }) => ($activo ? theme.accent : theme.heroText)};
  transition: flex-grow 0.3s ease, color 0.3s ease;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    margin-bottom: 4px;
    background-color: ${({ theme, $activo }) => ($activo ? theme.accent : theme.heroText)};
    transition: background-color 0.3s ease;
  }

  &:hover,
  &:hover::before {
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.accent};
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

export const PrevButton = styled(NavButton)`
  left: 0;
`;

export const NextButton = styled(NavButton)`
  right: 0;
`;
