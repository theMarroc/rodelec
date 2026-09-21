import styled, { css } from 'styled-components';
import { media } from '../../styles/tokens';

export const Seccion = styled.footer`
  position: relative;
  padding: 3rem 0 20px;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.divider};
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
  ${media.maxSm} {
    padding: 0 15px;
  }
`;

export const ContactSection = styled.div`
  flex: 3;
  min-width: 0;
`;

export const SalesSection = styled.div`
  flex: 2;
  min-width: 0;
  padding-left: 40px;
  border-left: 1px solid ${({ theme }) => theme.divider};

  @media (max-width: 992px) {
    padding-left: 0;
    padding-top: 30px;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.divider};
  }
`;

export const Title = styled.h2`
  margin-bottom: 5px;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.borderSubtle};

  ${media.maxSm} {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 25px;
  font-size: 1rem;
  color: ${({ theme }) => theme.textMuted};

  ${media.maxSm} {
    font-size: 0.9rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  ${media.maxSm} {
    gap: 15px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;

  ${media.maxSm} {
    flex-direction: column;
    gap: 10px;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-width: 0;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.label};

  ${media.maxSm} {
    font-size: 0.85rem;
  }
`;

// Base común de input / select / textarea. El borde rojo ahora depende del
// estado de React, antes se escribía a mano sobre el nodo del DOM.
const campoBase = css`
  display: block;
  width: 100%;
  padding: 12px 15px;
  font-family: inherit;
  font-size: 1rem;
  color: ${({ theme }) => theme.inputText};
  background-color: ${({ theme }) => theme.inputBg};
  border: 1px solid
    ${({ theme, $invalido }) => ($invalido ? theme.danger : theme.inputBorder)};
  border-radius: ${({ theme }) => theme.radii.sm};

  &::placeholder {
    color: ${({ theme }) => theme.inputPlaceholder};
  }

  ${media.maxSm} {
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;

export const Input = styled.input`
  ${campoBase}
`;

export const Select = styled.select`
  ${campoBase}
  max-height: 12rem;
`;

export const Textarea = styled.textarea`
  ${campoBase}
  resize: vertical;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 10px;
  margin-top: 10px;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.onAccent};
  background-color: ${({ theme }) => theme.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.accentHover};
  }

  &:disabled {
    opacity: 0.65;
    cursor: progress;
  }

  ${media.maxSm} {
    padding: 12px 20px;
    font-size: 1rem;
  }
`;

export const StatusMessage = styled.p`
  margin-top: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme, $tipo }) =>
    $tipo === 'error' ? theme.danger : theme.success};
`;

export const ContactInfoTitle = styled.h3`
  margin: 25px 0 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.labelMuted};
`;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.accentText};
  }

  a,
  span {
    margin: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderSubtle};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.onAccent};
    background-color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;
