import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer } from "../../layout";
import rust from "./icons/rust_logo.png";
import actix from "./icons/actix_logo.png";
import wasm from "./icons/black_wasm.png";
import react from "./icons/react.png";
import node from "./icons/node.png";
import kube from "./icons/kube.png";
import docker from "./icons/docker.png";
import js from "./icons/js.png";
import ellipsis from "./icons/ellipsis.png";

// import { Fade } from "react-awesome-reveal";

const AboutWrapper = styled.div`
  background: ${(p) => p.theme.colors.color_2};
  /* background: color_1; */
  padding: 30px 0;
`;

const Text = styled.div`
  font-size: 20px;
  /* grid-column: span 12; */
  grid-column-start: 2;
  grid-column-end: 11;
`;

const SecondSection = styled.div`
  grid-column-start: 2;
  font-size: 60px;
`;

const IconCircleContainer = styled.div`
  grid-column: span 6;
  position: relative;
`;

const Circle = styled.div`
  width: 24px;
  height: 300px;
  margin-left: 200px;
  /* position: absolute; */
  /* left: 50%; */
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
`;

const IconCircle = ({ scrollPosition }) => {
  return (
    <IconCircleContainer>
      <Circle scrollPosition={scrollPosition}>
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
                        <InnerImg src={actix} alt="" />
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
      </Circle>
    </IconCircleContainer>
  );
};

const SkillsList = styled.div`
  padding-top: 30px;
  grid-column-start: 3;
  grid-column-end: 7;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const SkillGroup = styled.div`
  width: 100%;
  color: black;
`;

const Skill = styled.div`
  font-size: 20px;
  padding-left: 10px;
`;

const SkillSection = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const SkillCircleContainer = styled(MarginedContainer)`
  padding: 50px 0;
`;

const About = ({ scrollPosition }) => {
  return (
    <AboutWrapper>
      <MarginedContainer>
        <SecondSection>About</SecondSection>
        <Text>
          Hi, I'm Aaron. I'm a passionate full-stack developer, infrastructure
          engineer and creative code enthusiast.
        </Text>
        <Text>
          Inspired and multifaceted, I enjoy digging into the full scope of the
          development process. I have a deep interest in scalable, concurrent
          solutions.
        </Text>
      </MarginedContainer>
      <SkillCircleContainer>
        <SkillsList>
          <SkillGroup>
            <SkillSection>Javascript</SkillSection>
            <Skill>React</Skill>
            <Skill>Node</Skill>
          </SkillGroup>
          <SkillGroup>
            <SkillSection>Rust</SkillSection>
            <Skill>Actix-Web</Skill>
            <Skill>WASM</Skill>
          </SkillGroup>
          <SkillGroup>
            <SkillSection>Infrastructure</SkillSection>
            <Skill>Kubernetes</Skill>
            <Skill>Docker</Skill>
          </SkillGroup>
        </SkillsList>
        <IconCircle {...{ scrollPosition }} />
      </SkillCircleContainer>
    </AboutWrapper>
  );
};

export default About;
