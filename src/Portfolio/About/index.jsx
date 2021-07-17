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
];

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

const IconCircleGuide = styled.div`
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
  height: 390px;
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
    width: 20px;
    height: 20px;
    /* border: 2px solid black; */
    border-radius: 100%;
  }
`;

const InnerImg = styled.img`
  height: ${660 / toolArray.length + "px"};
`;

const circleComponent = (givenArray) => {
  const newArray = [...givenArray];
  const CreateInnerDivs = ({ myArray }) => {
    console.log(myArray);
    let currentImg = myArray[0];
    myArray.splice(0, 1);
    console.log(currentImg);
    return (
      <InnerDiv>
        <InnerImg src={currentImg} alt="" />
        {!!myArray.length && CreateInnerDivs({ myArray })}
      </InnerDiv>
    );
  };

  return CreateInnerDivs({ myArray: newArray });
};

const IconCircle = ({ scrollPosition }) => {
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
  padding-left: 100px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;

const SkillGroupTwo = styled(SkillGroup)`
  padding-left: 75px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;

const SkillGroupThree = styled(SkillGroup)`
  padding-left: 100px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;

const SkillGroupFour = styled(SkillGroup)`
  padding-left: 125px;
  ${mq[1]} {
    padding-left: 15px;
  }
`;

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

const About = ({ scrollPosition }) => {
  return (
    <>
      <AboutWrapper>
        <MarginedContainer>
          <SectionTitle>About Me</SectionTitle>
          <Text>
            Hi, I'm Aaron. I'm a full-stack engineer and creative code
            enthusiast.
          </Text>
          <Text>
            I have a passion for project architecture and for scalable,
            performant solutions. This has led me to dig into all sorts of
            languages and tools.
          </Text>
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
          <Text>Here's some tools I've worked with:</Text>
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
            <SkillGroupTwo>
              <SkillSection>Rust</SkillSection>
              <Skill>Actix-Web</Skill>
              <Skill>Tokio</Skill>
              <Skill>WASM</Skill>
              <Skill>Nannou</Skill>
            </SkillGroupTwo>
            <SkillGroupThree>
              <SkillSection>Infrastructure/DB</SkillSection>
              <Skill>Docker</Skill>
              <Skill>SQLite</Skill>
              <Skill>PostgreSQL</Skill>
              <Skill>MongoDB</Skill>
              <Skill>Kubernetes</Skill>
            </SkillGroupThree>
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
