import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200..700&display=swap');

  body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
`;

const FooterWrapper = styled.header`
  background-color: #0b0c1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  gap: 15px;

  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const Span = styled.span`
    color: #4420c5;

`;

const Footer = () => {
  return (
    
    <FooterWrapper>
      <GlobalStyle />
        <Logo><Text>Todos los derechos reservados por:    </Text>
        <img src="/logo-rodelec.png" alt="logo" /><Span>RODELEC</Span>
      </Logo>
    </FooterWrapper>
  );
};

export default Footer;