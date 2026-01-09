// src/App.jsx
import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/theme";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import FooterForm from "./components/FooterForm";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Staff from "./components/Staff";

const backgroundAnimation = keyframes`
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(360deg) scale(1.05); }
`;
const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.1;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23FFFFFF" d="M100 0L0 100V0z" opacity="0.1"/></svg>');
  background-size: 200px 200px;
  background-repeat: repeat;
  animation: ${backgroundAnimation} 60s linear infinite;
  z-index: 0;
  overflow: hidden;
`;

function App() {
  const [isDark, setIsDark] = useState(() => {

    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = () => setIsDark((prev) => !prev);


  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BackgroundOverlay />
      <BrowserRouter>
        {/* 🔘 pasamos el estado y la función al Header */}
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                {/* <Slider /> */}
                <Services />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
