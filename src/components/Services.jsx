// Services.jsx
import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200..700&display=swap');

  body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
`;

const servicesData = [
  {
    id: 1,
    category: "MANTENIMIENTO ELÉCTRICO",
    title: "Medición de sistemas de puesta a tierra",
    description: `
    Realizamos mediciones precisas de la resistencia de puesta a tierra y verificamos el estado de las jabalinas, conexiones y conductores. 
    Entregamos un informe técnico con las recomendaciones necesarias para garantizar la seguridad y el cumplimiento normativo.`,
    image: "/services1.jpg",
    link: `https://wa.me/2235111081?text=%20Necesito%20sus%20servicios%20de%20medición%20de%20puesta%20a%20tierra`,
  },
  {
    id: 2,
    category: "SEGURIDAD LABORAL ELÉCTRICA",
    title: "Medición según Resolución 900/15 SRT",
    description: `
    Efectuamos mediciones eléctricas conforme a la Resolución SRT 900/15, abarcando tensión de contacto, continuidad de puesta a tierra y tiempos de disparo de protecciones. 
    Entregamos informes firmados por profesional matriculado para habilitaciones y auditorías.`,
    image: "/services1.jpg",
    link: `https://wa.me/2235111081?text=%20Me%20interesa%20una%20medición%20según%20la%20Resolución%20900/15`,
  },
  {
    id: 3,
    category: "HABILITACIONES COMERCIALES",
    title: "Informes técnicos para habilitación de comercios",
    description: `
    Elaboramos informes eléctricos requeridos por municipios, entes reguladores y distribuidoras para habilitaciones comerciales. 
    Verificamos tableros, protecciones, cableado y puesta a tierra, garantizando la seguridad y el cumplimiento de normas AEA.`,
    image: "/services1.jpg",
    link: `https://wa.me/2235111081?text=%20Necesito%20un%20informe%20eléctrico%20para%20habilitar%20mi%20comercio`,
  },
  {
    id: 4,
    category: "SERVICIO TÉCNICO INDUSTRIAL",
    title: "Mantenimiento integral de sistemas eléctricos",
    description: `
    Ofrecemos mantenimiento preventivo y correctivo de instalaciones eléctricas industriales, tableros de comando, motores y líneas de potencia. 
    Minimiza paradas no programadas con revisiones periódicas y diagnóstico avanzado.`,
    image: "/services1.jpg",
    link: `https://wa.me/2235111081?text=%20Estoy%20interesado%20en%20su%20servicio%20de%20mantenimiento%20eléctrico%20integral`,
  },
  {
    id: 5,
    category: "INSTALACIONES DE POTENCIA",
    title: "Especialización en acometidas de líneas de potencia",
    description: `
    Diseñamos y ejecutamos acometidas trifásicas aéreas o subterráneas, dimensionadas según potencia contratada y reglamentos de distribuidora. 
    Garantizamos instalaciones seguras, eficientes y certificadas.`,
    image: "/services1.jpg",
    link: `https://wa.me/2235111081?text=%20Quiero%20asesoramiento%20sobre%20acometidas%20de%20potencia`,
  },
  {
    id: 6,
    category: "PROYECTOS ELÉCTRICOS",
    title: "Confección de planos y proyectos eléctricos",
    description: `
    Desarrollamos planos unifilares, de detalle y memoria técnica para presentaciones ante entes reguladores, obras nuevas o reformas. 
    Trabajamos bajo normas AEA e IRAM, garantizando precisión y cumplimiento.`,
    image: "/services1.jpg",
    link: `https://wa.me/2235111081?text=%20Necesito%20un%20proyecto%20eléctrico%20para%20mi%20obra`,
  },
];


const Services = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? servicesData.length - 1 : prev - 1
    );
  };

  return (
    <Wrapper>
      <Header>
        <h3>Nuestros servicios</h3>
        <Nav>
          <Arrow onClick={prevSlide}>{"<"}</Arrow>
          <Arrow onClick={nextSlide}>{">"}</Arrow>
        </Nav>
      </Header>

      <Progress>
        {servicesData.map((_, index) => (
          <Step
            key={index}
            active={index === current}
            onClick={() => setCurrent(index)}
          >
            {String(index + 1).padStart(2, "0")}
          </Step>
        ))}
      </Progress>


      <Content>
        <TextWrapper>
          <Category>{servicesData[current].category}</Category>
          <Title>{servicesData[current].title}</Title>
          <Desc>{servicesData[current].description}</Desc>
          <Anchor
            href={servicesData[current].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Contactar</Button>
          </Anchor>
        </TextWrapper>

        <Image src={servicesData[current].image} alt={servicesData[current].title} />
      </Content>

    </Wrapper>
  );
};

export default Services;

/* -------------------- Styled Components -------------------- */
const Wrapper = styled.section`
  background: #0b0c1a;
  color: #fff;
  padding: 0rem 2rem 2rem 2rem;
  margin: auto;

    @media (min-width: 768px) {
    padding: 5rem 10rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 10px;
`;

const Arrow = styled.button`
  background: none;
  border: 1px solid #f2c300;
  color: #f2c300;
  font-weight: bold;
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;

  &:active {
    background: #f2c300;
    color: #000;
  }

  &:hover {
    color: #f2c300;
  }
`;

const Progress = styled.div`
  display: flex;
  gap: 1rem;
`;

const Step = styled.div`
  flex: ${(props) => (props.active ? 3 : 1)};
  text-align: center;
  font-size: 0.9rem;
  position: relative;
  color: ${(props) => (props.active ? "#f2c300" : "#aaa")};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: flex 0.3s ease; 

  &::after {
    content: "";
    display: block;
    width: 100%; 
    height: 4px;
    background: ${(props) => (props.active ? "#f2c300" : "#555")};
    margin-top: 5px;
    transition: background 0.3s ease;
  }
`;



const Content = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column; /* por defecto columna para móvil */
  gap: 20px;

  @media (min-width: 768px) { /* tablets y desktop */
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`;
const TextWrapper = styled.div`
  flex: 1; /* ocupa el espacio disponible para el texto */
`;

const Category = styled.p`
  color: #aaa;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 0.8rem;
`;

const Desc = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

const Anchor = styled.a`

`;

const Button = styled.button`
  background: transparent;
  border: 2px solid #f2c300;
  color: #fff;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::after {
    content: "➜";
    margin-left: 0.5rem;
    color: #f2c300;
  }

  &:hover:after {
    color: #000;
    font-weight: bold;
  }
   &:hover {
    background: #f2c300;
    color: #000;
    font-weight: bold;
  }


  &:active {
    background: #c9a600;
    color: #000;
  }
`;


const Image = styled.img`
  width: 100%;
  max-width: 400px; /* limita el tamaño de la imagen en desktop */
  border-radius: 8px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 50%; /* ocupa la mitad del contenedor */
  }
`;
