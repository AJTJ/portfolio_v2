import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, zNav } from "../layout";
import linked from "../assets/linked.png";
import github from "../assets/github.png";

const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  z-index: ${zNav};
`;

const NavContainer = styled(MarginedContainer)`
  padding: 10px 0;
`;

const NavButton = styled.button`
  height: 30px;
  width: 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 17px;
  border: solid 1px ${(p) => p.theme.colors.color_3};
  &:hover {
    color: white;
    background: ${(p) => p.theme.colors.color_3};
  }
`;

const First = styled(NavButton)`
  grid-column-start: 7;
`;

const LinkImg = styled.img`
  width: 32px;
`;

const LinkImgFirst = styled(LinkImg)`
  margin-right: 5px;
`;

const LinkImgContainer = styled.a`
  grid-column-start: 11;
  display: flex;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <First>About</First>
        <NavButton>Skills</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>Contact</NavButton>
        <LinkImgContainer href="">
          <LinkImgFirst src={linked} alt="" />
          <LinkImg src={github} alt="" />
        </LinkImgContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
