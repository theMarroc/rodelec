import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ThemeToggle from '../ThemeToggle';
import { contacto } from '../../data/contact';
import useMediaQuery from '../../hooks/useMediaQuery';
import { linkWhatsapp } from '../../lib/whatsapp';
import {
  Acciones,
  Hamburger,
  HeaderWrapper,
  Logo,
  LogoBlock,
  Nav,
  SubHeader,
  WhatsappText,
} from './Header.styles';

const ID_MENU = 'menu-principal';

// Anchos en los que el carrusel lleva padding lateral (ver Carousel.styles.js).
// Ahí la foto no llega a los bordes, así que el logo y el nav quedan sobre el
// fondo de la página y el header no puede ser transparente.
const CARRUSEL_CON_MARGENES =
  '(min-width: 1280px), ((1024px <= height <= 1366px) and (768px <= width <= 1280px))';

const Header = ({ isDark, toggleTheme }) => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolleado, setScrolleado] = useState(false);
  const { pathname } = useLocation();

  const carruselConMargenes = useMediaQuery(CARRUSEL_CON_MARGENES);

  // Solo el home tiene el carrusel detrás del header. En el resto de las rutas
  // el header arranca opaco, si no el logo desaparece sobre el fondo del tema.
  const sobreCarrusel = pathname === '/' && !carruselConMargenes;
  const transparente = sobreCarrusel && !scrolleado && !menuAbierto;

  useEffect(() => {
    const alScrollear = () => setScrolleado(window.scrollY > 50);
    alScrollear();
    window.addEventListener('scroll', alScrollear, { passive: true });
    return () => window.removeEventListener('scroll', alScrollear);
  }, []);

  // Cerrar con Escape es lo que espera cualquiera que navegue por teclado.
  useEffect(() => {
    if (!menuAbierto) return undefined;
    const alPresionar = (evento) => {
      if (evento.key === 'Escape') setMenuAbierto(false);
    };
    window.addEventListener('keydown', alPresionar);
    return () => window.removeEventListener('keydown', alPresionar);
  }, [menuAbierto]);

  // Si cambia la ruta el menú móvil queda abierto tapando la página.
  useEffect(() => setMenuAbierto(false), [pathname]);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <HeaderWrapper $transparente={transparente}>
      <LogoBlock>
        {/* La imagen hace de "O", así que el nombre accesible va en el contenedor. */}
        <Logo $transparente={transparente} role="img" aria-label="Rodelec">
          <span aria-hidden="true">R</span>
          <img src="/logo-rodelec.webp" alt="" width="58" height="58" />
          <span aria-hidden="true">D E L E C</span>
        </Logo>
        <SubHeader>{contacto.matricula}</SubHeader>
      </LogoBlock>

      <Acciones>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

        <Hamburger
          type="button"
          $abierto={menuAbierto}
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          aria-expanded={menuAbierto}
          aria-controls={ID_MENU}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span />
          <span />
          <span />
        </Hamburger>

        <Nav id={ID_MENU} $abierto={menuAbierto} $transparente={transparente}>
          <ul>
            <li>
              <Link to="/" onClick={cerrarMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/staff" onClick={cerrarMenu}>
                Staff
              </Link>
            </li>
            <li>
              <Link to="/servicios" onClick={cerrarMenu}>
                Servicios
              </Link>
            </li>
            <li>
              <a
                href={linkWhatsapp(
                  contacto.whatsapp,
                  'Estoy interesado en los servicios de RODELEC',
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={cerrarMenu}
              >
                <WhatsappText>Whatsapp</WhatsappText>
              </a>
            </li>
          </ul>
        </Nav>
      </Acciones>
    </HeaderWrapper>
  );
};

export default Header;
