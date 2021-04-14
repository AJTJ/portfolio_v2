import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, zNav } from "../layout";
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
  height: 50px;
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
  padding: 10px 0;
`;

const NavButton = styled(Link)`
  height: 30px;
  width: 65px;
  background: rgba(255, 255, 255, 1);
  border-radius: 17px;
  border: solid 1px ${(p) => p.theme.colors.color_3};
  transition: all 0.2s;
  cursor: pointer;
  align-self: center;
  &:hover {
    color: white;
    background: ${(p) => p.theme.colors.color_3};
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const First = styled(NavButton)`
  grid-column-start: 8;
`;

const LinkImg = styled.img`
  width: 32px;
  height: 32px;
`;

const LinkImgFirst = styled(LinkImg)`
  margin-right: 5px;
`;

const LinkImgContainer = styled.a`
  grid-column-start: 11;
  display: flex;
`;

const Nav = ({ scrollPosition }) => {
  return (
    <NavWrapper {...{ scrollPosition }}>
      <NavContainer>
        <First offset={-50} smooth={true} to="about">
          About
        </First>
        <NavButton offset={-50} smooth={true} to="projects">
          Projects
        </NavButton>
        <NavButton smooth={true} to="contact">
          Contact
        </NavButton>
        <LinkImgContainer href="">
          <LinkImgFirst src={linked} alt="" />
          <LinkImg src={github} alt="" />
        </LinkImgContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
