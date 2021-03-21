import React from "react";

import styled from "@emotion/styled";
import { MarginedContainer } from "../layout";
import headshot from "../assets/linked_img.jpeg";

const circleSize = "850";

const BackgroundCircle = styled.div`
  position: absolute;
  left: ${(p) =>
    `calc( 50% - ${circleSize / 2}px - 50px + calc(-${p?.extra}px * 5) )`};
  top: ${(p) => `calc( 50% - ${circleSize / 2}px - calc(${p?.extra}px * 5) )`};

  width: ${(p) =>
    p?.extra
      ? `calc(${circleSize}px + calc(${p.extra}px * 10))`
      : `${circleSize}px`};
  height: ${(p) =>
    p?.extra
      ? `calc(${circleSize}px + calc(${p.extra}px * 10))`
      : `${circleSize}px`};
  background: ${(p) => p.theme.colors.color_1};
  border-radius: 50%;
  z-index: -50;
  box-shadow: 55px -20px 300px 55px ${(p) => p.theme.colors.color_1};
`;

const HeroContainer = styled.div`
  padding-top: 50px;
  min-height: 1000px;
  overflow: hidden;
  position: relative;
`;

const CircleContainer = styled.div``;

const NameContainer = styled(MarginedContainer)`
  align-items: center;
  padding-top: 200px;
`;

const Name = styled.div`
  font-size: 100px;
  grid-column-start: 2;
  grid-column-end: 9;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  color: ${(p) => p.theme.colors.color_3};
`;

const ImgContainer = styled.div`
  grid-column: span 3;
`;

const FaceImg = styled.img`
  /* height: 100%; */
  width: 100%;
  border-radius: 50%;
  max-width: 250px;
`;

const Title = styled.div`
  grid-column-start: 2;
  grid-column-end: 11;
  font-size: 25px;
`;

const Hero = ({ scrollPosition }) => {
  return (
    <HeroContainer>
      <NameContainer>
        <Name>Aaron Janke</Name>
        <ImgContainer>
          <FaceImg src={headshot} alt="" />
        </ImgContainer>
      </NameContainer>
      <MarginedContainer>
        <Title>
          Full-Stack Developer, Infrastructure Engineer and Creative Coder.
        </Title>
      </MarginedContainer>
      <CircleContainer>
        <BackgroundCircle extra={scrollPosition} />
      </CircleContainer>
    </HeroContainer>
  );
};

export default Hero;

// const isBrowser = typeof window !== `undefined`;

// const getScrollPosition = ({ element, useWindow }) => {
//   if (!isBrowser) return { x: 0, y: 0 };

//   const target = element ? element.current : document.body;

//   const position = target.getBoundingClientRect();

//   return useWindow
//     ? { x: window.scrollX, y: window.scrollY }
//     : { x: position.left, y: position.top };
// };
