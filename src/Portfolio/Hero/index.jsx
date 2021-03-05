import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";
import { MarginedContainer } from "../../layout";

const circleSize = "700";

const BackgroundCircle = styled.div`
  position: absolute;
  left: ${(p) =>
    `calc( 50% - ${circleSize / 2}px - 50px + calc(-${p?.extra}px * 5) )`};
  top: ${(p) =>
    `calc( 50% - ${circleSize / 1.7}px - calc(${p?.extra}px * 5) )`};

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
`;

const HeroContainer = styled.div`
  min-height: 900px;
  overflow: hidden;
  position: relative;
`;

const CircleContainer = styled.div`
  /* position: relative; */
`;

// const isBrowser = typeof window !== `undefined`;

// const getScrollPosition = ({ element, useWindow }) => {
//   if (!isBrowser) return { x: 0, y: 0 };

//   const target = element ? element.current : document.body;

//   const position = target.getBoundingClientRect();

//   return useWindow
//     ? { x: window.scrollX, y: window.scrollY }
//     : { x: position.left, y: position.top };
// };

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
      <CircleContainer>
        <BackgroundCircle extra={scrollPosition} />
      </CircleContainer>
      <MarginedContainer>
        <div>Aaron Janke</div>
      </MarginedContainer>
    </HeroContainer>
  );
};

export default Hero;
