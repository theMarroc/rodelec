import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

/**
 * Botón de cambio de tema.
 * `aria-pressed` le dice al lector de pantalla si el modo claro está activo,
 * y el label cambia para anunciar la acción, no el estado.
 */
const ThemeToggle = ({ isDark, onToggle, className }) => (
  <Boton
    type="button"
    className={className}
    onClick={onToggle}
    aria-pressed={!isDark}
    aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
    title={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
  >
    {isDark ? <FaRegLightbulb size={20} /> : <FaLightbulb size={20} />}
  </Boton>
);

export default ThemeToggle;

const Boton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.accentSoft};
    border-color: ${({ theme }) => theme.accentText};
    transform: scale(1.05);
  }
`;
