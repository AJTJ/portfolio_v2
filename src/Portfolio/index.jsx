import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Project from "./Project";

const PortfolioContainer = styled.div`
  /* min-height: 5000px; */
  overflow: hidden;
`;

const Portfolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <PortfolioContainer>
      <Nav />
      <Hero {...{ scrollPosition }} />
      <About {...{ scrollPosition }} />
      <Project />
      <div>Live Chat</div>
      <div>Contact</div>
    </PortfolioContainer>
  );
};

export default Portfolio;
