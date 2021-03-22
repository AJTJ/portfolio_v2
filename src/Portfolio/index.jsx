import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Project, { ProjectsTitle } from "./Project";
import Contact from "./Contact";
import LiveChat from "./LiveChat";

const PortfolioContainer = styled.div`
  /* min-height: 5000px; */
  overflow: hidden;
  -moz-transform: rotate(0.02deg);
`;
//
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
      <Nav {...{ scrollPosition }} />
      <Hero {...{ scrollPosition }} />
      <About {...{ scrollPosition }} />
      <ProjectsTitle />
      <Project liveLink={"www.google.com"} ghLink={"www.google.com"} />
      <Project reversed />
      <Project />
      <Project reversed />
      <LiveChat />
      <Contact />
    </PortfolioContainer>
  );
};

export default Portfolio;
