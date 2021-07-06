import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, SectionTitle, Text } from "../layout";
import github from "../assets/github.png";
import globe from "../assets/globe.png";

const ProjectWrapper = styled.div`
  background: linear-gradient(
      rgba(255, 233, 141, 0.3),
      rgba(255, 233, 141, 0.3)
    ),
    ${(p) =>
      p.image
        ? `url(${p.image})`
        : p.reversed
        ? p.theme.colors.color_4
        : p.theme.colors.color_1};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 0;
  color: black;
`;

const ProjectContainer = styled(MarginedContainer)`
  /* height: 800px; */
  /* display: flex; */
  /* align-items: center; */
  padding: 30px 10px;
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
  grid-column-start: 2;
  grid-column-end: 12;
  order: ${(p) => (p.reversed ? -1 : 2)};
  display: flex;
  align-items: center;

  border-radius: 5px;
`;

const ProjectCopyLinks = styled.div`
  border: 1px solid ${(p) => p.theme.colors.color_3};
  border-radius: 10px;
  width: 100%;
  /* position: relative; */
  /* top: 20px; */
  right: ${(p) => (p.reversed ? "-100px" : "100px")};
  background: ${(p) =>
    p.reversed ? p.theme.colors.color_4 : p.theme.colors.color_1};
  padding: 15px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
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
  font-size: 24px;
  padding-bottom: 20px;
`;

const Project = ({
  ghLink,
  liveLink,
  projImg,
  projCopy,
  projTitle,
  reversed,
  imgCircle,
}) => {
  return (
    <ProjectWrapper image={!imgCircle && projImg} {...{ reversed }}>
      <ProjectContainer>
        {imgCircle && projImg && (
          <ProjectImgContainer>
            <img src={projImg} alt="" />
          </ProjectImgContainer>
        )}
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
  color: ${(p) => p.theme.colors.color_3};
`;

export const ProjectsTitle = () => {
  return (
    <ProjectsTitleWrapper>
      <MarginedContainer>
        <ProjectsTitleStyled>Projects</ProjectsTitleStyled>
      </MarginedContainer>
    </ProjectsTitleWrapper>
  );
};

export default Project;
