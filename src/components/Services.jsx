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
        category: "MANTENIMIENTO",
        title: "SERVICIOS DE URGENCIAS 24HS",
        description: `
      Nos desplazamos hasta tu localidad y realizamos un análisis del inconveniente. 
      Determinamos la mejor solución. Y con la aprobación del presupuesto, procedemos con la reparación. Finalizamos con un ajuste y limpieza del equipo para garantizar un funcionamiento óptimo`,
        image: "/services1.jpg",
    },
    {
        id: 2,
        category: "CASAS EDIFICIOS CONSORCIOS COUNTRIES",
        title: "TRABAJOS COMUNES",
        description: "Trifásicas, armado de tableros, reemplazo cableado, fallas/cortocircuitos, colocación de pilares de obra, falta de Potencia y fallas eléctricas.",
        image: "/services1.jpg",
    },

    {
        id: 3,
        category: "Lorem Ipsum",
        title: "Lorem Ipsum",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "/services1.jpg",
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
                <Category>{servicesData[current].category}</Category>
                <Title>{servicesData[current].title}</Title>
                <Desc>{servicesData[current].description}</Desc>
                <Button>Conozca más</Button>
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
  padding: 0rem 2rem 0rem 2rem;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
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
`;

const Progress = styled.div`
  display: flex;
  gap: 1rem;
`;

const Step = styled.div`
  flex: ${(props) => (props.active ? 3 : 1)}; /* el activo ocupa el doble */
  text-align: center;
  font-size: 0.9rem;
  position: relative;
  color: ${(props) => (props.active ? "#f2c300" : "#aaa")};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: flex 0.3s ease; /* animación suave */

  &::after {
    content: "";
    display: block;
    width: 100%; /* se ajusta al flex */
    height: 4px;
    background: ${(props) => (props.active ? "#f2c300" : "#555")};
    margin-top: 5px;
    transition: background 0.3s ease;
  }
`;



const Content = styled.div`
  margin-top: 1rem;
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

  &::after {
    content: "➜";
    margin-left: 0.5rem;
    color: #f2c300;
  }

  &:active {
    background: #f2c300;
    color: #000;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  object-fit: cover;
`;
