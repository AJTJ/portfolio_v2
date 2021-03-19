import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer } from "../../layout";
import rust from "./icons/rust_logo.png";

const AboutWrapper = styled.div`
  background: ${(p) => p.theme.colors.color_2};
  /* background: color_1; */
  padding: 30px 0;
`;

const Text = styled.div`
  font-size: 20px;
  grid-column-start: 2;
  grid-column-end: 11;
`;

const SecondSection = styled.div`
  grid-column-start: 2;
  font-size: 60px;
`;

const SkillsList = styled.div`
  grid-column: span 6;
`;
const IconCircle = styled.div`
  grid-column: span 6;
`;

const About = () => {
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
        <SkillsList>Some Skills here</SkillsList>
        <IconCircle>Circle of Icons Here</IconCircle>
      </MarginedContainer>
    </AboutWrapper>
  );
};

export default About;
