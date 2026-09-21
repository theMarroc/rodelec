import styled from 'styled-components';

export const StaffSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  background: ${({ theme }) => theme.body};
`;

export const Title = styled.h2`
  margin: 0 0 3rem;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  text-shadow: ${({ theme }) => theme.textShadow};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const UserCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.surfaceTranslucent};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.cardShadow};
    border-color: ${({ theme }) => theme.accentText};
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accentText};
  background: ${({ theme }) => theme.accentSoft};
  border: 2px solid ${({ theme }) => theme.accentText};
  border-radius: 50%;
`;

export const Name = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const Role = styled.p`
  margin: 0 0 0.25rem;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.accentText};
`;

export const RoleDetalle = styled.p`
  margin: 0 0 1rem;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.textMuted};
`;

export const InfoRow = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.textMuted};

  &:hover {
    color: ${({ theme }) => theme.accentText};
  }
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  color: #ffffff;
  background-color: ${({ theme }) => theme.whatsapp};
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.whatsappHover};
    color: #ffffff;
  }
`;
