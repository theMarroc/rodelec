import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background: #0b0c1a;
  padding: 1rem 0;
  position: relative;
`;

const LogosWrapper = styled.div`
  display: inline-flex;
  animation: ${scroll} 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 80px;
  margin: 0 20px;
  background-color: #222;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  user-select: none;
`;

const Slider = () => {
  const logos = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4", "Sponsor 5", "Sponsor 6", "Sponsor 7", "Sponsor 8", "Sponsor 9", "Sponsor 10"];

  return (
    <CarouselContainer>
      <LogosWrapper>
        {/* Duplicamos los logos para que el scroll sea infinito */}
        {[...logos, ...logos].map((logo, i) => (
          <Logo key={i}>{logo}</Logo>
        ))}
      </LogosWrapper>
    </CarouselContainer>
  );
};

export default Slider;
