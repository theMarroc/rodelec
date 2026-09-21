import styled from 'styled-components';
import { media } from '../../styles/tokens';

export const Wrapper = styled.section`
  margin: auto;
  padding: 0 2rem 2rem;
  /* Compensa el header sticky transparente, igual que el carrusel. */
  margin-top: -90px;
  padding-top: 90px;
  font-size: 0.9em;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  ${media.md} {
    padding: 5rem 10rem;
    font-size: 24px;
  }
  ${media.tablet} {
    padding: 5rem;
  }
`;

export const Encabezado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.5em;
    font-weight: bolder;
  }
`;

export const Nav = styled.div`
  display: flex;
  gap: 10px;
`;

export const Arrow = styled.button`
  padding: 5px 10px;
  font-size: 1em;
  font-weight: bold;
  line-height: 1;
  color: ${({ theme }) => theme.accentText};
  background: none;
  border: 1px solid ${({ theme }) => theme.accentText};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.onAccent};
  }
`;

export const Progress = styled.div`
  display: flex;
  gap: 1rem;

  ${media.md} {
    padding-bottom: 3rem;
  }
`;

export const Step = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: ${({ $activo }) => ($activo ? 3 : 1)};
  padding: 0;
  font-size: 1em;
  font-family: inherit;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme, $activo }) => ($activo ? theme.accentText : theme.textMuted)};
  transition: flex 0.3s ease, color 0.3s ease;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    margin-top: 5px;
    background: ${({ theme, $activo }) => ($activo ? theme.accentText : theme.borderSubtle)};
    transition: background 0.3s ease;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 1rem;

  ${media.md} {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  flex: none;

  ${media.md} {
    width: 50%;
  }
`;

export const Imagen = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.md};
  object-fit: cover;

  ${media.md} {
    width: 50%;
  }
`;

export const Categoria = styled.p`
  margin-bottom: 0.5em;
  font-size: 0.8em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

export const Titulo = styled.h3`
  margin-bottom: 0.8em;
  font-size: 1.3em;
  color: ${({ theme }) => theme.textStrong};
`;

export const Desc = styled.p`
  margin-bottom: 1.5em;
  font-size: 0.9em;
  color: ${({ theme }) => theme.textMuted};
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 0.9em;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: 3px solid ${({ theme }) => theme.accentText};
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  span {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.accentText};
    transition: color 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.onAccent};
  }

  &:hover span {
    color: ${({ theme }) => theme.onAccent};
  }

  &:active {
    background: ${({ theme }) => theme.accentActive};
    color: ${({ theme }) => theme.onAccent};
  }
`;
