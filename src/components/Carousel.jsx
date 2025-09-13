import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200..700&display=swap');

  body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
`;

//Carousel

const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  background: url(${props => props.bg}) center/cover no-repeat;
  display: flex;
  color: #fff;
  transition: background 0.5s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0.8) 50%, transparent 100%);
  pointer-events: none; /* para no bloquear clics */
  z-index: 1;
`;
const Overlay2 = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, #0b0c1a 10%, transparent 150%);
  pointer-events: none; /* para no bloquear clics */
  z-index: 1;
`;


const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 0rem 2rem 0rem 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    color: #f2c300;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 2rem;
  background-color: #f2c2001c;
  border: solid 4px #f2c300;
  color: #fff;
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  z-index: 4;

  &:hover {
    background-color: #f2c300;
    color: #000;
  }
`;

// Sliders del Carousel
const NavContainer = styled.div`
  position: absolute;
  justify-content: center;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  gap: 4px; 
  z-index: 3;
`;

const SlideButton = styled.button`
  flex-grow: ${props => (props.active ? 4 : 1)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.active ? "#f2c300" : "#fff")};
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &::before {
    content: "";
    display: block;
    width: 100%; 
    height: 4px;
    background-color: ${props => (props.active ? "#f2c300" : "#fff")};
    margin-bottom: 4px;
    transition: all 0.3s ease;
  }

  &:hover::before {
    background-color: #f2c300;
  }

  &:hover {
    color: #f2c300;
  }
`;

//Touchpad del Carousel

const NavButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background: transparent;
  border: none;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.005);
  }
`;

const PrevButton = styled(NavButton)`
  left: 0;
`;

const NextButton = styled(NavButton)`
  right: 0;
`;


const Carousel = () => {
  const slides = [
    {
      image: "/carousel-tablero1.jpg",
      title: "Diseño y análisis de <span>sistemas</span> eléctricos",
      text: "Dimensionamiento de conductores, selección de protecciones, cálculos de cortocircuito.",
      anchor: "",
    },
    {
      image: "/carousel-tablero2.jpg",
      title: "Estudios de <span>potencia</span> y coordinación",
      text: "Coordinación de protecciones y estudios de potencia para garantizar eficiencia y seguridad.",
      anchor: "",
    },
    {
      image: "/carousel-tablero3.jpg",
      title: "Protecciones y <span>seguridad</span>",
      text: "Implementación de protecciones eléctricas según normas nacionales e internacionales.",
      anchor: "",
    },
    {
      image: "/carousel-tablero4.jpg",
      title: "Automatización de <span>procesos</span>",
      text: "Diseño de sistemas automatizados y control de instalaciones eléctricas.",
      anchor: "",
    },
    {
      image: "/carousel-tablero5.jpg",
      title: "Monitoreo y <span>diagnóstico</span>",
      text: "Supervisión de sistemas eléctricos y análisis de posibles fallas.",
      anchor: "",
    },
    {
      image: "/carousel-tablero6.jpg",
      title: "Asesoramiento <span>personalizado</span>",
      text: "Soluciones adaptadas a cada cliente, desde proyectos residenciales hasta industriales.",
      anchor: "",
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <CarouselWrapper bg={slides[current].image}>
      <Overlay2 />

      <Content>
        <Title dangerouslySetInnerHTML={{ __html: slides[current].title }} />
        <Text>{slides[current].text}</Text>
      </Content>

      <a href="https://wa.me/2291512866?text=%20Estoy%20interesado%20en%20un%20presupuesto%20electrico" target="_blank" rel="noopener noreferrer">
        <Button>Solicitá tu presupuesto</Button>
      </a>

      <PrevButton onClick={prevSlide} aria-label="Anterior"></PrevButton>
      <NextButton onClick={nextSlide} aria-label="Siguiente"></NextButton>

      <NavContainer>
        {slides.map((_, index) => (
          <SlideButton
            key={index}
            active={index === current}
            onClick={() => setCurrent(index)}
          >
            {(index + 1).toString().padStart(2, "0")}
          </SlideButton>
        ))}
      </NavContainer>
      
    </CarouselWrapper>
  );
};

export default Carousel;
