import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, zNav, Button as NavButton } from "../layout";
import linked from "../assets/linked.png";
import github from "../assets/github.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

// test

const NavWrapper = styled.div`
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

const First = styled(NavButton)`
  /* grid-column-start: 8; */
  grid-column-start: 9;
`;

const LinkImg = styled.img`
  width: 32px;
  height: 32px;
`;

const LinkImgFirst = styled(LinkImg)`
  margin-right: 5px;
`;

const LinkImgWrapper = styled.div`
  /* height: 55px; */
  grid-column-start: 11;
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* padding-left: 10px; */
`;

const Nav = ({ scrollPosition }) => {
  return (
    <NavWrapper {...{ scrollPosition }}>
      <NavContainer>
        <Name onClick={scroll.scrollToTop}>AJ</Name>
        <First as={Link} offset={-50} smooth={true} to="about">
          About
        </First>
        {/* <NavButton as={Link} offset={-50} smooth={true} to="projects">
          Projects
        </NavButton> */}
        <NavButton as={Link} smooth={true} to="contact">
          Contact
        </NavButton>
        <LinkImgWrapper>
          <LinkImgContainer
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aaron-janke-7827a947/"
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
