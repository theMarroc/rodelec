import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200..700&display=swap');

  body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
`;

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.body};
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  justify-content: center;
  gap: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const Span = styled.span`
  display: flex;
  align-items: center; 
  color: ${({ theme }) => theme.text};
  gap: 0.3rem;

  img {
    filter: drop-shadow(0 0 3px grey)
            drop-shadow(0 0 6px grey);
    height: 45px;
    width: auto;
    vertical-align: middle;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <GlobalStyle />
      <Logo>
        {/* <Text>Derechos reservados:</Text> */}
        <Span>
          R<img src="/logo-rodelec.png" alt="logo" />O D E L E C
        </Span>
      </Logo>
    </FooterWrapper>
  );
};

export default Footer;
