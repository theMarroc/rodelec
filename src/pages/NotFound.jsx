import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => (
  <Wrapper>
    <Codigo>404</Codigo>
    <h1>No encontramos esta página</h1>
    <p>Puede que el enlace esté desactualizado o mal escrito.</p>
    <Volver to="/">Volver al inicio</Volver>
  </Wrapper>
);

export default NotFound;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 60vh;
  padding: 4rem 1.5rem;
  text-align: center;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  p {
    color: ${({ theme }) => theme.textMuted};
  }
`;

const Codigo = styled.p`
  margin: 0;
  font-size: 5rem;
  font-weight: bold;
  line-height: 1;
  color: ${({ theme }) => theme.accentText};
`;

const Volver = styled(Link)`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.onAccent};
  background: ${({ theme }) => theme.accent};
  border-radius: ${({ theme }) => theme.radii.pill};

  &:hover {
    color: ${({ theme }) => theme.onAccent};
    background: ${({ theme }) => theme.accentHover};
  }
`;
