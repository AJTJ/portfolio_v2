import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, SectionTitle } from "../layout";
import github from "../assets/github.png";
import globe from "../assets/globe.png";

interface ReversedProps {
  reversed: boolean;
}
interface ProjectStyledProps extends ReversedProps {
  image: string | boolean;
}

const ProjectWrapper = styled.div<ProjectStyledProps>`
  background: linear-gradient(
      rgba(255, 233, 141, 0.3),
      rgba(255, 233, 141, 0.3)
    ),
    ${(p) =>
      p.image
        ? `url(${p.image})`
        : p?.reversed
        ? p.theme.colors.color_4
        : p.theme.colors.color_1};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 90px 0;
  color: black;
`;

const ProjectContainer = styled(MarginedContainer)`
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

const ProjectCopyWrapper = styled.div<ReversedProps>`
  grid-column-start: 1;
  grid-column-end: 13;
  order: ${(p) => (p.reversed ? -1 : 2)};
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const ProjectCopyLinks = styled.div<ReversedProps>`
  width: 100%;
  right: ${(p) => (p.reversed ? "-100px" : "100px")};
  background: ${(p) =>
    p.reversed ? p.theme.colors.color_4 : p.theme.colors.color_1};
  padding: 50px 30px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
`;

const Link = styled.a`
  /* display: inline-block; */
  display: flex;
  align-items: center;
  /* width: 25px; */
  height: 25px;
  margin: 0 5px;

  span {
    font-size: 15px;
    padding-right: 5px;
    color: black;
  }

  img {
    width: 100%;
    width: 25px;
    height: 25px;
  }
`;

const ProjTitleContainer = styled.p`
  font-weight: bold;
  font-size: 24px;
  padding-bottom: 20px;
`;

interface GhObject {
  title?: string;
  link: string;
}

interface ProjectProps {
  ghLinks: GhObject[];
  projImg: string;
  projCopy: string;
  liveLink?: string;
  projTitle: string;
  reversed?: boolean;
  imgCircle?: string;
}

const Project = ({
  ghLinks,
  liveLink,
  projImg,
  projCopy,
  projTitle,
  reversed,
  imgCircle,
}: ProjectProps) => {
  const ghObs = ghLinks?.map(({ title, link }) => (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {title && <span>{title}</span>}
      <img src={github} alt="" />
    </Link>
  ));

  return (
    <ProjectWrapper image={!imgCircle && projImg} {...{ reversed: !!reversed }}>
      <ProjectContainer>
        {imgCircle && projImg && (
          <ProjectImgContainer>
            <img src={projImg} alt="" />
          </ProjectImgContainer>
        )}
        <ProjectCopyWrapper {...{ reversed: !!reversed }}>
          <ProjectCopyLinks {...{ reversed: !!reversed }}>
            <ProjTitleContainer>
              {projTitle || "Project Title"}
            </ProjTitleContainer>
            <p>{projCopy || "A bunch of copy about the project"}</p>
            <ProjectLinks>
              {/* {ghLink && (
                <Link href={ghLink} target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="" />
                </Link>
              )} */}
              {ghObs}
              {liveLink && (
                <Link href={liveLink} target="_blank" rel="noopener noreferrer">
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
  /* grid-column-start: 6;
  grid-column-end: 12; */
  color: ${(p) => p.theme.colors.color_3};
  text-align: center;
  grid-column: span 12;
`;

const Caution = styled.div`
  text-align: center;
  grid-column: span 12;
`;

const CautionSpan = styled.span`
  display: inline-block;
  padding: 10px 5px;
`;

export const ProjectsTitle = () => {
  return (
    <ProjectsTitleWrapper>
      <MarginedContainer>
        <ProjectsTitleStyled>Some Projects</ProjectsTitleStyled>
        <Caution>
          <CautionSpan>
            <strong>
              I'm more active on my{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AJTJ"
              >
                Github
              </a>
            </strong>
          </CautionSpan>
        </Caution>
        <Caution>
          <CautionSpan>
            <strong>
              These projects are not necessarily production-level code.
            </strong>
          </CautionSpan>
        </Caution>
        <Caution>
          <CautionSpan>
            <strong>
              Rather, this is a collection of prototypes and experiments.
            </strong>
          </CautionSpan>
        </Caution>
      </MarginedContainer>
    </ProjectsTitleWrapper>
  );
};

export default Project;
