import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Project, { ProjectsTitle } from "./Project";
import Contact from "./Contact";
import LiveChat from "./LiveChat";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

//PROJECT IMAGES
import rusty_chat_img from "./assets/rusty_chat_code.png";
import cms_background from "./assets/cms_background.png";

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
  //

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <PortfolioContainer>
      <Nav {...{ scrollPosition }} />
      <Hero {...{ scrollPosition }} />
      <Element name="about">
        <About {...{ scrollPosition }} />
      </Element>
      <Element name="projects">
        <ProjectsTitle />
      </Element>
      <Project
        ghLink={"https://github.com/AJTJ/rusty_chat"}
        projImg={rusty_chat_img}
        projCopy={
          "A high performance websockets chat service built with Rust and Actix/Actix-Web with an SQLite database. Digging deeper into the actor framework."
        }
        projTitle={"rusty_chat"}
      />
      <Project
        ghLink={"https://github.com/Yukon-Literacy-Coalition/ylc_website_v2"}
        liveLink={"http://yukonliteracy.com/"}
        projImg={cms_background}
        projCopy={
          "A custom CMS built using react-static, NetlifyCMS and distributed over Netlify."
        }
        projTitle={"The YLC CMS"}
        // reversed={true}
      />
      <Element name="contact">
        <Contact />
      </Element>
    </PortfolioContainer>
  );
};

export default Portfolio;
