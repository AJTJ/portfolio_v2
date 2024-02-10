import React from "react";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { MarginedContainer } from "../layout";
import { mq } from "../theme";
import headshot from "../assets/linked_img.jpeg";
// import { isCompositeComponentWithType } from "react-dom/test-utils";

const circleSize: number = 700;
const boxShadowParams: string = "55px -20px 100px 70px";

const animation = (color1: string, color2: string) => keyframes`
  0% {
    background-color: ${color1};
    box-shadow: ${boxShadowParams} ${color1};
  }
  50% {
    background-color: ${color2};
    box-shadow: ${boxShadowParams} ${color2};
  }
  100%  {
    background-color: ${color1};
    box-shadow: ${boxShadowParams} ${color1};
  }
`;

interface HeroProps {
  circleSize?: number;
  scrollPosition?: number;
}

const BackgroundCircle = styled.div<HeroProps>`
  position: absolute;

  left: ${(p) =>
    `calc( 50% - ${circleSize / 2}px - 50px + calc(-${
      p?.scrollPosition
    }px * 5) )`};
  top: ${(p) =>
    `calc( 50% - ${circleSize / 2}px - calc(${p?.scrollPosition}px * 5) )`};

  width: ${(p) =>
    p?.scrollPosition
      ? `calc(${circleSize}px + calc(${p.scrollPosition}px * 10))`
      : `${circleSize}px`};
  height: ${(p) =>
    p?.scrollPosition
      ? `calc(${circleSize}px + calc(${p.scrollPosition}px * 10))`
      : `${circleSize}px`};
  box-shadow: ${boxShadowParams} ${(p) => p.theme.colors.color_1};
  background: ${(p) => p.theme.colors.color_1};
  border-radius: 50%;
  /* z-index: 50; */
  animation: ${(p) =>
      p?.scrollPosition
        ? animation(p.theme.colors.color_1, p.theme.colors.color_1_lighter)
        : "none"}
    14s ease
    ${(p) =>
      p?.scrollPosition ? (p.scrollPosition < 900 ? "infinite" : "2s") : "2s"};
`;

const HeroContainer = styled.div`
  padding-top: 50px;
  min-height: 1000px;
  overflow: hidden;
  position: relative;
  background-color: black;
`;

const CircleContainer = styled.div``;

const NameContainer = styled(MarginedContainer)`
  align-items: center;
  padding-top: 200px;
`;

const Name = styled.div`
  font-size: 45px;
  grid-column-start: 3;
  grid-column-end: 7;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  color: ${(p) => p.theme.colors.color_3};
  z-index: 100;
  white-space: nowrap;
  ${mq[2]} {
    font-size: 35px;
  }
  ${mq[1]} {
    grid-column: span 12;
    /* display: flex;
    justify-content: center; */
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  grid-column: span 3;
  max-width: 200px;
  z-index: 100;
  display: flex;
  ${mq[1]} {
    grid-column: span 12;
    display: flex;
    max-width: unset;
    justify-content: center;
  }
`;

const FaceImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  max-width: 250px;
  box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.45);
`;

const Title = styled.div`
  z-index: 100;
  grid-column-start: 3;
  grid-column-end: 11;
  font-size: 25px;
  padding-top: 20px;
`;

const Hero = ({ scrollPosition }: { scrollPosition: number }) => {
  // const canvasRef = useRef();

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
          Systems Developer with a passion for scalable and performant
          architecture.
        </Title>
        {/* <Title>Programming Polyglot Proliferating Poignant Prose</Title> */}
      </MarginedContainer>
      {/* <MarginedContainer>
        <canvas ref={canvasRef} width="1000" height="800" />
      </MarginedContainer> */}
      <CircleContainer>
        <BackgroundCircle
          scrollPosition={scrollPosition > 0 ? scrollPosition : 0}
        />
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
// FRACTAL TREE PROJECT
// useEffect(() => {
//   const canvasObj = canvasRef.current;
//   const ctx = canvasObj.getContext("2d");

//   const draw = ({ startX, startY, len, angle, branchWidth }) => {
//     ctx.lineWidth = branchWidth;

//     ctx.shadowBlur = 15;
//     ctx.shadowColor = "rgba(0,0,0,0.8)";
//     ctx.strokeStyle = "green";
//     ctx.fillStyle = "green";

//     ctx.beginPath();
//     ctx.save();

//     ctx.translate(startX, startY);
//     ctx.rotate((angle * Math.PI) / 180);
//     ctx.moveTo(0, 0);
//     ctx.lineTo(0, -len);
//     ctx.stroke();

//     if (len < 10) {
//       ctx.restore();
//       return;
//     }

//     draw({
//       startX: 0,
//       startY: -len,
//       len: len * 0.8,
//       angle: angle - 15,
//       branchWidth: branchWidth * 0.8,
//     });
//     draw({
//       startX: 0,
//       startY: -len,
//       len: len * 0.8,
//       angle: angle + 15,
//       branchWidth: branchWidth * 0.8,
//     });

//     ctx.restore();
//   };

//   draw({
//     startX: 400,
//     startY: 600,
//     len: 120,
//     angle: 0,
//     branchWidth: 10,
//   });
// }, []);
