import { useCallback, useEffect, useState } from 'react';

import { contacto } from '../../data/contact';
import { mensajeWhatsappCarrusel, slides } from '../../data/slides';
import { linkWhatsapp } from '../../lib/whatsapp';
import {
  CarouselWrapper,
  Content,
  CtaButton,
  CtaLink,
  MidOverlay,
  NavContainer,
  NextButton,
  Padder,
  PrevButton,
  SlideButton,
  SlideImg,
  Text,
  Title,
  TopOverlay,
} from './Carousel.styles';

const INTERVALO_MS = 5000;

// Los segmentos { em } se resaltan en amarillo. Antes esto se hacía con
// dangerouslySetInnerHTML sobre strings con <span> embebidos.
const renderSegmentos = (segmentos) =>
  segmentos.map((segmento, indice) =>
    typeof segmento === 'string' ? (
      segmento
    ) : (
      <em key={indice}>{segmento.em}</em>
    ),
  );

const Carousel = () => {
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const irA = useCallback((indice) => setActual(indice), []);
  const anterior = useCallback(
    () => setActual((i) => (i === 0 ? slides.length - 1 : i - 1)),
    [],
  );
  const siguiente = useCallback(() => setActual((i) => (i + 1) % slides.length), []);

  // Precarga solo la siguiente foto. Bajar las 6 de entrada costaría ~510 KB
  // para evitar un parpadeo que solo aparece al pasar de slide.
  useEffect(() => {
    const proxima = slides[(actual + 1) % slides.length];
    const img = new Image();
    img.src = proxima.imagen;
  }, [actual]);

  useEffect(() => {
    if (pausado) return undefined;

    // Quien pidió menos animación en su sistema no debería tener autoplay.
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (sinMovimiento.matches) return undefined;

    const intervalo = setInterval(siguiente, INTERVALO_MS);
    return () => clearInterval(intervalo);
  }, [pausado, siguiente]);

  const slide = slides[actual];

  return (
    <Padder>
      <CarouselWrapper
        role="region"
        aria-roledescription="carrusel"
        aria-label="Servicios destacados"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocus={() => setPausado(true)}
        onBlur={() => setPausado(false)}
      >
        <SlideImg
          src={slide.imagen}
          alt=""
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <TopOverlay />
        <MidOverlay />

        <Content aria-live="polite" aria-atomic="true">
          <Title>{renderSegmentos(slide.titulo)}</Title>
          <Text>{renderSegmentos(slide.texto)}</Text>
        </Content>

        <CtaLink
          href={linkWhatsapp(contacto.whatsapp, mensajeWhatsappCarrusel)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CtaButton type="button">Solicitá atención</CtaButton>
        </CtaLink>

        <PrevButton type="button" onClick={anterior} aria-label="Slide anterior" />
        <NextButton type="button" onClick={siguiente} aria-label="Slide siguiente" />

        <NavContainer>
          {slides.map((item, indice) => (
            <SlideButton
              key={item.id}
              type="button"
              $activo={indice === actual}
              aria-current={indice === actual}
              aria-label={`Ir al slide ${indice + 1}`}
              onClick={() => irA(indice)}
            >
              {String(indice + 1).padStart(2, '0')}
            </SlideButton>
          ))}
        </NavContainer>
      </CarouselWrapper>
    </Padder>
  );
};

export default Carousel;
