import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, SectionTitle, Text } from "../layout";
import linkedImg from "../assets/linked_img.jpeg";
import github from "../assets/github.png";
import globe from "../assets/globe.png";

const ProjectWrapper = styled.div`
  background: ${(p) =>
    p.reversed ? p.theme.colors.color_4 : p.theme.colors.color_1};
  padding: 20px 0;
`;

const ProjectContainer = styled(MarginedContainer)`
  /* height: 800px; */
  /* display: flex; */
  /* align-items: center; */
  padding: 30px 0;
`;

const ProjectImgContainer = styled.div`
  grid-column: span 4;
  order: 1;
  img {
    width: 100%;
    border-radius: 100%;
  }
`;

const ProjectCopyWrapper = styled.div`
  grid-column: span 8;
  order: ${(p) => (p.reversed ? -1 : 2)};
  display: flex;
  align-items: center;
`;

const ProjectCopyLinks = styled.div`
  /* border: ${(p) =>
    p.reversed ? p.theme.colors.color_1 : "white"} 2px solid; */
  border: white 10px solid;
  border-radius: 3px;
  width: 100%;
  position: relative;
  top: 20px;
  right: ${(p) => (p.reversed ? "-100px" : "100px")};
  background: ${(p) =>
    p.reversed ? p.theme.colors.color_4 : p.theme.colors.color_1};
  padding: 50px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.a`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 0 5px;

  img {
    width: 100%;
  }
`;

const ProjTitleContainer = styled.p`
  font-weight: bold;
`;

const Project = ({
  reversed,
  ghLink,
  liveLink,
  projImg,
  projCopy,
  projTitle,
}) => {
  return (
    <ProjectWrapper {...{ reversed }}>
      <ProjectContainer>
        <ProjectImgContainer>
          <img src={projImg || linkedImg} alt="" />
        </ProjectImgContainer>
        <ProjectCopyWrapper {...{ reversed }}>
          <ProjectCopyLinks {...{ reversed }}>
            <ProjTitleContainer>
              {projTitle || "Project Title"}
            </ProjTitleContainer>
            <p>{projCopy || "A bunch of copy about the project"}</p>
            <ProjectLinks>
              {ghLink && (
                <Link href={ghLink}>
                  <img src={github} alt="" />
                </Link>
              )}
              {liveLink && (
                <Link href={liveLink}>
                  <img src={globe} alt="" />
                </Link>
              )}
            </ProjectLinks>
          </ProjectCopyLinks>
        </ProjectCopyWrapper>
      </ProjectContainer>
    </ProjectWrapper>
  );
};

const ProjectsTitleWrapper = styled.div`
  background: ${(p) => p.theme.colors.color_1};
  padding-bottom: 30px;
`;

const ProjectsTitleStyled = styled(SectionTitle)`
  grid-column-start: 6;
  grid-column-end: 12;
`;

export const ProjectsTitle = () => {
  return (
    <ProjectsTitleWrapper>
      <MarginedContainer>
        <ProjectsTitleStyled>Projects</ProjectsTitleStyled>
        {/* <Text>Projects coming soon.</Text> */}
      </MarginedContainer>
    </ProjectsTitleWrapper>
  );
};

export default Project;
