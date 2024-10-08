import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, SectionTitle, Text } from "../layout";
import { mq } from "../theme";

//icons
import rust from "./icons/rust_logo.png";
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
  actix,
  wasm,
  react,
  node,
  kube,
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

const IconCircleContainer = styled.div`
  padding-top: 75px;
  grid-column: span 6;
  position: relative;
  ${mq[2]} {
    grid-column: span 1;
  }
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

// const CircleComponent = ({givenArray}) => {
//     return myArray.slice().reverse().reduce((child, currentImg) => {
//         return <InnerDiv>
//             <InnerImg src={currentImg} alt="" />
//             {child}
//         </InnerDiv>
//     }, null)
// }

const IconCircle = ({ scrollPosition }: { scrollPosition: number }) => {
  return (
    <IconCircleContainer>
      <IconCircleGuide scrollPosition={scrollPosition}>
        {/* {circleComponent(toolArray)} */}
        <CircleComponent givenArray={toolArray} />
      </IconCircleGuide>
    </IconCircleContainer>
  );
};

const SkillsList = styled.div`
  padding-top: 10px;
  grid-column-start: 2;
  grid-column-end: 7;
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
  font-size: 16px;
  padding-left: 10px;
`;

const SkillSection = styled.div`
  font-size: 15px;
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
            Hi, I'm Aaron. I'm a full stack engineer and creative code
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
              <Skill>Actix-Web, Rocket, Axum</Skill>
              <Skill>Diesel, async-graphql</Skill>
              <Skill>wasm-pack, wasm-bindgen</Skill>
              <Skill>Tokio Stack</Skill>
              <Skill>Anchor/Solana</Skill>
            </SkillGroup>
            {/* <MiddleSkills> */}
            <SkillGroup>
              <SkillSection>JS/TS Full-Stack</SkillSection>
              <Skill>Node, Express, NestJS, TypeORM</Skill>
              <Skill>React, Redux</Skill>
              <Skill>React-Native</Skill>
              <Skill>CSS, SCSS, CSS-in-JS etc...</Skill>
            </SkillGroup>
            {/* </MiddleSkills> */}
            <SkillGroup>
              <SkillSection>Python backend, AI & ML</SkillSection>
              <Skill>FastAPI, Flask, SQLAlchemy</Skill>
              <Skill>Langchain, LangGraph, Llamachain</Skill>
              <Skill>RAG systems, multi-agent</Skill>
              <Skill>OpenAI API, HuggingFace</Skill>
            </SkillGroup>
            <SkillGroup>
              <SkillSection>Architectural and System</SkillSection>
              <Skill>AWS, NGINX</Skill>
              <Skill>SQL, PostgreSQL, SQLite, MongoDB</Skill>
              <Skill>GraphQL, REST</Skill>
              <Skill>Docker, Kubernetes</Skill>
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
