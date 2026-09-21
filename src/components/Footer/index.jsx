import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <Logo role="img" aria-label="Rodelec">
      <span aria-hidden="true">R</span>
      <img src="/logo-rodelec.webp" alt="" width="45" height="45" loading="lazy" />
      <span aria-hidden="true">O D E L E C</span>
    </Logo>
    <Copy>
      &copy; {new Date().getFullYear()} Rodelec. Todos los derechos reservados.
    </Copy>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme.body};
  border-top: 1px solid ${({ theme }) => theme.divider};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};

  img {
    height: 45px;
    width: auto;
    vertical-align: middle;
    filter: ${({ theme }) => theme.logoGlow};
  }
`;

const Copy = styled.p`
  margin: 0;
  font-size: 0.85rem;
  text-align: center;
  color: ${({ theme }) => theme.textMuted};
`;
