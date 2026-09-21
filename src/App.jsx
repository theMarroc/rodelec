import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider, keyframes } from 'styled-components';

import Carousel from './components/Carousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Staff from './components/Staff';
import useColorScheme from './hooks/useColorScheme';
import NotFound from './pages/NotFound';
import GlobalStyles from './styles/GlobalStyles';
import { themes } from './styles/themes';

const App = () => {
  const { mode, toggleMode, isDark } = useColorScheme();

  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyles />
      <BackgroundOverlay aria-hidden="true" />

      <BrowserRouter>
        <Header isDark={isDark} toggleTheme={toggleMode} />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Carousel />
                  <Services />
                </>
              }
            />
            <Route path="/servicios" element={<Services />} />
            {/* La ruta vieja en inglés seguía enlazada desde afuera. */}
            <Route path="/services" element={<Navigate to="/servicios" replace />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* El formulario vivía adentro de Services, así que no aparecía en /staff. */}
        <ContactForm />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

const rotarFondo = keyframes`
  from { transform: rotate(0deg) scale(1); }
  to   { transform: rotate(360deg) scale(1.05); }
`;

// Textura diagonal sutil detrás de todo el sitio.
const BackgroundOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: ${({ theme }) => (theme.isDark ? 0.1 : 0.04)};
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23FFFFFF" d="M100 0L0 100V0z" opacity="0.1"/></svg>');
  background-size: 200px 200px;
  background-repeat: repeat;
  animation: ${rotarFondo} 60s linear infinite;
`;
