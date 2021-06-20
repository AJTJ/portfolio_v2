import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, SectionTitle } from "../layout";

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

// import { Fade } from "react-awesome-reveal";

const AboutWrapper = styled.div`
  background: ${(p) => p.theme.colors.color_2};
  /* background: color_1; */
  padding: 0 0 30px;
`;

const Text = styled.div`
  font-size: 20px;
  /* grid-column: span 12; */
  grid-column-start: 2;
  grid-column-end: 12;
`;

const IconCircleContainer = styled.div`
  grid-column: span 6;
  position: relative;
`;

const IconCircleGuide = styled.div`
  width: 24px;
  height: 300px;
  /* margin-left: 200px; */
  position: relative;
  left: 50%;
  /* top: 50px; */
  -webkit-transform: rotate(${(p) => p.scrollPosition / 10}deg);
  -ms-transform: rotate(${(p) => p.scrollPosition / 10}deg);
  transform: rotate(${(p) => p.scrollPosition / 10}deg);
  /* &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 100%;
  } */
`;

const itemRotation = `36deg`;
//
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
  height: 70px;
  /* padding: 10px; */
  /* background: red; */
  /* border-radius: 100%; */
`;

// const YellowCircle = styled.div`
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   left: 35%;
//   background: yellow;
//   border-radius: 100%;
// `;

const IconCircle = ({ scrollPosition }) => {
  return (
    <IconCircleContainer>
      {/* <YellowCircle /> */}
      <IconCircleGuide scrollPosition={scrollPosition}>
        <InnerDiv>
          <InnerImg src={rust} alt="" />
          <InnerDiv>
            <InnerImg src={actix} alt="" />
            <InnerDiv>
              <InnerImg src={wasm} alt="" />
              <InnerDiv>
                <InnerImg src={react} alt="" />
                <InnerDiv>
                  <InnerImg src={node} alt="" />
                  <InnerDiv>
                    <InnerImg src={kube} alt="" />
                    <InnerDiv>
                      <InnerImg src={docker} alt="" />
                      <InnerDiv>
                        <InnerImg src={three} alt="" />
                        <InnerDiv>
                          <InnerImg src={js} alt="" />
                          <InnerDiv>
                            <InnerImg src={ellipsis} alt="" />
                          </InnerDiv>
                        </InnerDiv>
                      </InnerDiv>
                    </InnerDiv>
                  </InnerDiv>
                </InnerDiv>
              </InnerDiv>
            </InnerDiv>
          </InnerDiv>
        </InnerDiv>
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
`;

const SkillGroup = styled.div`
  width: 100%;
  /* color: black; */
`;

// const SkillGroupOneWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
//   padding-bottom: 40px;
// `;

const SkillGroupOne = styled(SkillGroup)`
  padding-left: 100px;
`;

const SkillGroupTwo = styled(SkillGroup)`
  padding-left: 75px;
`;
const SkillGroupThree = styled(SkillGroup)`
  padding-left: 100px;
`;

const TwoSkillGroups = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

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
  padding: 50px 0 200px;
`;

const About = ({ scrollPosition }) => {
  return (
    <>
      <AboutWrapper>
        <MarginedContainer>
          <SectionTitle>About Me</SectionTitle>
          <Text>
            Hi, I'm Aaron. I'm a passionate full-stack developer, infrastructure
            engineer and creative code enthusiast.
          </Text>
          <Text>
            I have a passion for project architecture and for scalable,
            concurrent solutions.
          </Text>
          {/* <Text>These are some tools I enjoy working with.</Text> */}
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
              <SkillSection>Javascript</SkillSection>
              <Skill>React</Skill>
              <Skill>Node</Skill>
            </SkillGroupOne>
            {/* </SkillGroupOneWrapper> */}
            {/* <TwoSkillGroups> */}
            <SkillGroupTwo>
              <SkillSection>Rust</SkillSection>
              <Skill>Actix-Web</Skill>
              <Skill>WASM</Skill>
            </SkillGroupTwo>
            <SkillGroupThree>
              <SkillSection>Infrastructure</SkillSection>
              <Skill>Kubernetes</Skill>
              <Skill>Docker</Skill>
            </SkillGroupThree>
            {/* </TwoSkillGroups> */}
          </SkillsList>
          <IconCircle {...{ scrollPosition }} />
        </SkillCircleContainer>
      </SkillsWrapper>
    </>
  );
};

export default About;
