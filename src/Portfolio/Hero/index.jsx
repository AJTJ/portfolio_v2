import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { MarginedContainer } from "../../layout";
import img from "./rust.svg";

const circleSize = "970";

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
  background: ${(p) => p.theme.colors.yellow};
  border-radius: 50%;
  z-index: -50;
`;

const HeroContainer = styled.div`
  padding-top: 50px;
  min-height: 1000px;
  overflow: hidden;
  position: relative;
`;

const CircleContainer = styled.div``;

const Name = styled.div`
  font-size: 100px;
  grid-column-start: 3;
  grid-column-end: 13;
  padding-top: 150px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
`;

const Title = styled.div`
  grid-column-start: 8;
  grid-column-end: 13;
`;

const ImgContainer = styled.div`
  height: 100px;
  width: 100px;
  /* background: red; */
`;

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  console.log(scrollPosition);
  return (
    <HeroContainer>
      <MarginedContainer>
        <Name>Aaron Janke</Name>
        <Title>Web Developer</Title>
        <ImgContainer>
          <img src={img} alt="" />
        </ImgContainer>
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
