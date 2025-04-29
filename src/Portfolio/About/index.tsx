import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, SectionTitle, Text } from "../layout";
import { mq } from "../theme";

//icons
import rust from "./icons/rust_logo.png";
import tokio from "./icons/tokio.png";
import actix from "./icons/actix_logo.png";
import wasm from "./icons/black_wasm.png";
import react from "./icons/react.png";
import node from "./icons/node.png";
import kube from "./icons/kube.png";
import docker from "./icons/docker.png";
import js from "./icons/js.png";
import ellipsis from "./icons/ellipsis.png";
import three from "./icons/three.png";
import sql from "./icons/sql-server.png";
import gql from "./icons/gql.png";
import python from "./icons/python.png";

const toolArray = [
  rust,
  tokio,
  actix,
  wasm,
  react,
  node,
  // kube,
  docker,
  three,
  js,
  ellipsis,
  sql,
  gql,
  python,
];

let iconSizer = 1100;
const approxCircleSize = "490px";

const AboutWrapper = styled.div`
  background: ${(p) => p.theme.colors.color_2};
  /* background: color_1; */
  padding: 50px 0 30px;
`;

const CIRCLE_SIZE = 340; // smaller circle for tighter icons
const ICON_SIZE = 50; // larger icons
const ICON_COUNT = toolArray.length;

const IconCircleContainer = styled.div`
  position: relative;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  margin: 0 auto;
`;

const IconCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    width: ${CIRCLE_SIZE / 2}px;
    /* overflow: hidden; */
    margin-left: 0;
    margin-right: auto;
  }
`;

const RotatingCircle = styled.div<{ scrollPosition: number }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100px;
  transform: rotate(${(p) => p.scrollPosition / 10}deg);
`;

const Icon = styled.img<{ x: number; y: number; rotation: number }>`
  position: absolute;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  left: ${(p) => p.x}px;
  top: ${(p) => p.y}px;
  pointer-events: none;
  transform: rotate(${(p) => p.rotation}deg);
`;

interface AboutProps {
  scrollPosition: number;
}

const IconCircleGuide = styled.div<AboutProps>`
  width: 24px;
  height: 300px;
  position: relative;
  left: 70%;
  -webkit-transform: rotate(${(p) => p.scrollPosition / 10}deg);
  -ms-transform: rotate(${(p) => p.scrollPosition / 10}deg);
  transform: rotate(${(p) => p.scrollPosition / 10}deg);
  ${mq[2]} {
    left: 200px; // was 350%
  }
`;

const itemRotation = 360 / toolArray.length + "deg";

const InnerDiv = styled.div`
  width: 24px;
  height: ${approxCircleSize};
  ${mq[2]} {
    height: 390px;
  }
  position: absolute;
  left: 50%;
  top: 50px;
  top: 0;
  left: 0;
  -webkit-transform: rotate(${itemRotation});
  -ms-transform: rotate(${itemRotation});
  transform: rotate(${itemRotation});
  &:before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }
`;

const InnerImg = styled.img`
  height: ${iconSizer / toolArray.length + "px"};
  ${mq[2]} {
    height: ${800 / toolArray.length + "px"};
  }
`;

const CircleComponent = ({ givenArray }: { givenArray: string[] }) => {
  let child: null | JSX.Element = null;
  givenArray
    .slice()
    .reverse()
    .forEach((currentImg: string) => {
      const element = (
        <InnerDiv>
          <InnerImg src={currentImg} alt="" />
          {child}
        </InnerDiv>
      );
      child = element;
    });
  return child;
};

const IconCircle = ({ scrollPosition }: { scrollPosition: number }) => {
  const radius = (CIRCLE_SIZE - ICON_SIZE) / 2;
  const circleRotation = scrollPosition / 10;
  return (
    <IconCircleWrapper>
      <IconCircleContainer>
        <RotatingCircle scrollPosition={scrollPosition}>
          {toolArray.map((icon, i) => {
            const angle = (2 * Math.PI * i) / ICON_COUNT;
            const x = radius + radius * Math.cos(angle) - ICON_SIZE / 2;
            const y = radius + radius * Math.sin(angle) - ICON_SIZE / 2;
            // Only counter-rotate the icon so it is always upright relative to the page
            const rotation = -circleRotation;
            return (
              <Icon key={i} src={icon} x={x} y={y} rotation={rotation} alt="" />
            );
          })}
        </RotatingCircle>
      </IconCircleContainer>
    </IconCircleWrapper>
  );
};

const SkillsList = styled.div`
  padding-top: 10px;
  grid-column-start: 2;
  grid-column-end: 8;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  ${mq[2]} {
    grid-column-start: 1;
    grid-column-end: 10;
  }
`;

const SkillGroup = styled.div`
  width: 100%;
  padding: 10px 0;
`;

// const SkillGroupOne = styled(SkillGroup)`
//   padding-left: 50px;
//   ${mq[1]} {
//     padding-left: 15px;
//   }
// `;

// const MiddleSkills = styled.div`
//   display: flex;
//   ${mq[1]} {
//     flex-direction: column;
//   }
// `;

// const SkillGroupTwo = styled(SkillGroup)`
//   min-width: 50%;
//   padding-left: 25px;
//   ${mq[1]} {
//     padding-left: 15px;
//   }
// `;

// const SkillGroupThree = styled(SkillGroup)`
//   padding-left: 50px;
//   ${mq[1]} {
//     padding-left: 15px;
//   }
// `;

// const SkillGroupFour = styled(SkillGroup)`
//   min-width: 50%;
//   padding-left: 100px;
//   ${mq[1]} {
//     padding-left: 15px;
//   }
// `;

const Skill = styled.div`
  font-size: 12px;
  padding-left: 10px;
`;

const SkillSection = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.color_3};
`;

const SkillsWrapper = styled.div`
  background: ${(p) => p.theme.colors.color_2};
`;

const SkillCircleContainer = styled(MarginedContainer)`
  padding: 0px 0 100px;
`;

const GitLink = styled.a`
  color: ${(p) => p.theme.colors.orange};
`;

const About = ({ scrollPosition }: { scrollPosition: number }) => {
  return (
    <>
      <AboutWrapper>
        <MarginedContainer>
          <SectionTitle>About Me</SectionTitle>
          <Text>
            Hi, I'm Aaron. I'm a full stack systems engineer and creative code
            enthusiast.
          </Text>
          <Text>I have a passion for scalable, performant architecture.</Text>
          <Text>I dig into all sorts of languages and tools.</Text>
          <Text>
            Check out my{" "}
            <GitLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AJTJ"
            >
              github
            </GitLink>{" "}
            or my{" "}
            <GitLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aaron-janke/"
            >
              linkedin
            </GitLink>
            .
          </Text>
        </MarginedContainer>
      </AboutWrapper>
      <SkillsWrapper>
        <SkillCircleContainer>
          <SkillsList>
            <SkillGroup>
              <SkillSection>Rust Ecosystem</SkillSection>
              <Skill>Actix-Web - Rocket - Axum</Skill>
              <Skill>Diesel - async-graphql</Skill>
              <Skill>wasm-pack - wasm-bindgen</Skill>
              <Skill>Tokio Stack</Skill>
              <Skill>Anchor/Solana</Skill>
            </SkillGroup>
            {/* <MiddleSkills> */}
            <SkillGroup>
              <SkillSection>JS/TS Full-Stack</SkillSection>
              <Skill>Node - Express - NestJS - TypeORM</Skill>
              <Skill>React - Redux</Skill>
              <Skill>React-Native</Skill>
              <Skill>CSS - CSS-in-JS</Skill>
            </SkillGroup>
            {/* </MiddleSkills> */}
            <SkillGroup>
              <SkillSection>Architectural and System</SkillSection>
              <Skill>AWS - NGINX</Skill>
              <Skill>SQL - PostgreSQL - SQLite - MongoDB</Skill>
              <Skill>GraphQL - REST - gRPC</Skill>
              <Skill>Docker</Skill>
            </SkillGroup>
            <SkillGroup>
              <SkillSection>Python backend - AI & ML</SkillSection>
              <Skill>RAG systems - multi-agent</Skill>
              <Skill>OpenAI API - HuggingFace</Skill>
              <Skill>FastAPI - Flask - SQLAlchemy</Skill>
              <Skill>Langchain - LangGraph - Llamachain</Skill>
            </SkillGroup>
          </SkillsList>
          <IconCircle {...{ scrollPosition }} />
        </SkillCircleContainer>
      </SkillsWrapper>
    </>
  );
};

export default About;

/* <SkillGroupThree>
  <SkillSection>More!</SkillSection>
  <Skill>CSS</Skill>
  <Skill>Docker</Skill>
  <Skill>SQLite</Skill>
</SkillGroupThree> */
/* </TwoSkillGroups> */
