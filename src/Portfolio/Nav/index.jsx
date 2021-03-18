import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, zNav } from "../../layout";

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
`;

const First = styled(NavButton)`
  grid-column-start: 8;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <First>About</First>
        <NavButton>Skills</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>Contact</NavButton>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
