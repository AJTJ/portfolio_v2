import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, zNav, Button as NavButtonImport } from "../layout";
import { mq } from "../theme";
import linked from "../assets/linked.png";
import github from "../assets/github.png";

interface NavProps {
  scrollPosition: number;
}

const NavWrapper = styled.div<NavProps>`
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: ${zNav};
  transition: all 1s;
  background: ${(p) =>
    p.scrollPosition > 250 ? p.theme.colors.color_1 : "transparent"};
  border-bottom: ${(p) =>
    p.scrollPosition > 250
      ? "1px solid " + p.theme.colors.color_1
      : "1px solid transparent"};
`;

const NavContainer = styled(MarginedContainer)`
  padding: 5px 0;
  height: 60px;
`;

const NavButton = styled(NavButtonImport.withComponent("a"))`
  text-decoration: none;
`;

const First = styled(NavButton)`
  grid-column-start: 8;
  ${mq[1]} {
    grid-column-start: 5;
  }
`;

const LinkImg = styled.img`
  width: 32px;
  height: 32px;
  ${mq[2]} {
    height: 24px;
    width: 24px;
  }
`;

const LinkImgFirst = styled(LinkImg)`
  margin-right: 5px;
`;

const LinkImgWrapper = styled.div`
  grid-column-start: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq[1]} {
    grid-column-start: 8;
  }
`;

const LinkImgContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.a`
  font-family: "Sacramento", cursive;
  font-weight: bolder;
  max-height: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 4;
  cursor: pointer;
`;

const Nav = ({ scrollPosition }: { scrollPosition: number }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavWrapper {...{ scrollPosition }}>
      <NavContainer>
        <Name onClick={scrollToTop}>AJ</Name>
        <First href="#about">About</First>
        <NavButton href="#projects">Projects</NavButton>
        <NavButton href="#contact">Contact</NavButton>
        <LinkImgWrapper>
          <LinkImgContainer
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aaron-janke"
          >
            <LinkImgFirst src={linked} alt="" />
          </LinkImgContainer>
          <LinkImgContainer
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AJTJ"
          >
            <LinkImg src={github} alt="" />
          </LinkImgContainer>
        </LinkImgWrapper>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
