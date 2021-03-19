import React from "react";
import styled from "@emotion/styled";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";

const PortfolioContainer = styled.div`
  min-height: 5000px;
  overflow: hidden;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Nav />
      <Hero />
      <About />
      <div>Live Chat</div>
      <div>Projects</div>
      <div>Contact</div>
    </PortfolioContainer>
  );
};

export default Portfolio;
