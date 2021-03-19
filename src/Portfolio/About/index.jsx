import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer } from "../../layout";
import rust from "./icons/rust_logo.png";

const AboutWrapper = styled.div`
  background: ${(p) => p.theme.colors.color_2};
  /* background: color_1; */
`;

const Text = styled.div`
  font-size: 20px;
`;

const SkillsTitle = styled.div``;

const About = () => {
  return (
    <AboutWrapper>
      <MarginedContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <Text>
          Hi, I'm Aaron. I'm a passionate full-stack developer, infrastructure
          engineer and creative code enthusiast. Here are some of my development
          projects and explorations.
        </Text>
      </MarginedContainer>
    </AboutWrapper>
  );
};

export default About;
