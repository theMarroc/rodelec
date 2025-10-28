import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Link } from "react-router-dom";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manejar scroll para cambiar color de fondo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderWrapper scrolled={scrolled} menuOpen={menuOpen}>

      <GlobalStyle />
      <Logo>
        R<img src="/logo-rodelec-alt.png" alt="logo" />D E L E C
      </Logo>

      <SubHeader>Luis Rodriguez Mat. T-44676 - CTPBA</SubHeader>

      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        <span style={{ transform: menuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none" }}></span>
      </Hamburger>

      <Nav open={menuOpen}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/Services " onClick={() => setMenuOpen(false)}>Servicios</Link>
          </li>
          <li>
            <a
              href="https://wa.me/2235111081?text=%20Estoy%20interesado%20en%20los%20servicios%20de%20RODELEC"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Whatsapp
            </a>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200..700&display=swap');

  body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
`;

// Animación de apertura del menú
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ scrolled, menuOpen }) => (scrolled || menuOpen ? "#0b0c1a" : "transparent")};
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {

    font-size: 28px;

  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4em;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.17em;

  img {
    height: 40px;
     @media (min-width: 768px) {
      height: 58px;
      padding-right: 6px;
  }

  }
`;
const SubHeader = styled.p`
  position: absolute;
  top: 52%;
  left: 2rem;
  font-size: 0.77em;
  color: #f2c300;
  @media (min-width: 768px) {

    font-size: 0.69em;

  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: #0b0c1a;
      padding: 1rem 2rem;
      display: ${({ open }) => (open ? "flex" : "none")};
      animation: ${slideDown} 0.3s ease forwards;
      gap: 0;
    }
  }

  li {
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      transition: 0.3s;
      padding: 0.5rem 1rem;
      display: block;

      &:hover {
        color: #f2c300;
      }
    }

    @media (max-width: 768px) {
      width: 50%;
      padding: 0.5rem 0;
    }
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1100;

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin-bottom: 5px;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

