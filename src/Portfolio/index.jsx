import React from "react";
import styled from "@emotion/styled";
import Hero from "./Hero";
import Nav from "./Nav";

const PortfolioContainer = styled.div`
  min-height: 5000px;
  overflow: hidden;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Nav />
      <Hero />
      <div>Skills</div>
      <div>Live Chat</div>
      <div>Projects</div>
      <div>Contact</div>
    </PortfolioContainer>
  );
};

export default Portfolio;
