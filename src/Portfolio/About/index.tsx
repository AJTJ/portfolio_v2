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
  left: 50%;
  -webkit-transform: rotate(${(p) => p.scrollPosition / 10}deg);
  -ms-transform: rotate(${(p) => p.scrollPosition / 10}deg);
  transform: rotate(${(p) => p.scrollPosition / 10}deg);
  ${mq[2]} {
    left: 350%;
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
    /* border: 2px solid black; */
    border-radius: 100%;
  }
`;

const InnerImg = styled.img`
  height: ${iconSizer / toolArray.length + "px"};
  ${mq[2]} {
    height: ${800 / toolArray.length + "px"};
  }
`;

const circleComponent = (givenArray: string[]) => {
  // const newArray = [...givenArray];

  const CreateInnerDivs = ({ givenArray }: { givenArray: string[] }) => {
    let currentImg = givenArray[0];
    givenArray.splice(0, 1);
    return (
      <InnerDiv>
        <InnerImg src={currentImg} alt="" />
        {!!givenArray.length && CreateInnerDivs({ givenArray })}
      </InnerDiv>
    );
  };

  return CreateInnerDivs({ givenArray });
};

const IconCircle = ({ scrollPosition }: { scrollPosition: number }) => {
  return (
    <IconCircleContainer>
      <IconCircleGuide scrollPosition={scrollPosition}>
        {circleComponent(toolArray)}
      </IconCircleGuide>
    </IconCircleContainer>
  );
};

const SkillsList = styled.div`
  padding-top: 10px;
  grid-column-start: 2;
  grid-column-end: 6;
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

const SkillGroupOne = styled(SkillGroup)`
  padding-left: 50px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;

const MiddleSkills = styled.div`
  display: flex;
  ${mq[1]} {
    flex-direction: column;
  }
`;

const SkillGroupTwo = styled(SkillGroup)`
  min-width: 50%;
  padding-left: 25px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;
const SkillGroupThree = styled(SkillGroup)`
  min-width: 50%;
  padding-left: 25px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;

const SkillGroupFour = styled(SkillGroup)`
  padding-left: 50px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;

// const SkillGroupFour = styled(SkillGroup)`
//   padding-left: 125px;
//   ${mq[1]} {
//     padding-left: 15px;
//   }
// `;

// const TwoSkillGroups = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

const Skill = styled.div`
  font-size: 20px;
  padding-left: 10px;
`;

const SkillSection = styled.div`
  font-size: 20px;
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
        <MarginedContainer>
          {/* <SecondSection>Skills</SecondSection> */}
        </MarginedContainer>
        <SkillCircleContainer>
          <SkillsList>
            {/* <SkillGroupOneWrapper> */}
            <SkillGroupOne>
              <SkillSection>Javascript/TypeScript</SkillSection>
              <Skill>Node</Skill>
              <Skill>Express</Skill>
              <Skill>NestJS</Skill>
              <Skill>React</Skill>
              <Skill>ThreeJS</Skill>
              <Skill>CSS-in-JS</Skill>
            </SkillGroupOne>
            {/* </SkillGroupOneWrapper> */}
            {/* <TwoSkillGroups> */}
            <MiddleSkills>
              <SkillGroupTwo>
                <SkillSection>Rust</SkillSection>
                <Skill>Actix-Web</Skill>
                <Skill>Tokio</Skill>
                <Skill>Anchor/Solana</Skill>
                <Skill>Rocket</Skill>
                <Skill>Diesel</Skill>
                <Skill>Nannou</Skill>
              </SkillGroupTwo>
              <SkillGroupThree>
                <SkillSection>Other</SkillSection>
                <Skill>GraphQL</Skill>
                <Skill>WASM</Skill>
              </SkillGroupThree>
            </MiddleSkills>
            <SkillGroupFour>
              <SkillSection>Infrastructure/DB</SkillSection>
              <Skill>Docker</Skill>
              <Skill>SQLite</Skill>
              <Skill>PostgreSQL</Skill>
              <Skill>NGINX</Skill>
              <Skill>MongoDB</Skill>
              <Skill>Kubernetes</Skill>
            </SkillGroupFour>
            {/* <SkillGroupFour>
              <SkillSection>More!</SkillSection>
              <Skill>CSS</Skill>
              <Skill>Docker</Skill>
              <Skill>SQLite</Skill>
            </SkillGroupFour> */}
            {/* </TwoSkillGroups> */}
          </SkillsList>
          <IconCircle {...{ scrollPosition }} />
        </SkillCircleContainer>
      </SkillsWrapper>
    </>
  );
};

export default About;
