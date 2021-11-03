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
import tensor_proj from "./assets/tensor_proj.png";
import freedive_img from "./assets/freedive.png";

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
        projTitle={"rusty_chat"}
        ghLink={"https://github.com/AJTJ/rusty_chat"}
        liveLink={"https://ajtj.github.io/chat_frontend/"}
        projImg={rusty_chat_img}
        projCopy={
          "A high performance websockets chat service built with Rust and Actix/Actix-Web with an SQLite database and custom session management. Digging deeper into the actor model. Containerized with docker and served on digital ocean with an nginx reverse proxy."
        }
      />
      <Project
        projTitle={"The YLC CMS"}
        ghLink={"https://github.com/Yukon-Literacy-Coalition/ylc_website_v2"}
        liveLink={"http://yukonliteracy.com/"}
        projImg={cms_background}
        projCopy={
          "A custom CMS built using react-static, NetlifyCMS and distributed over Netlify for a neat, git-based system."
        }
        // reversed={true}
      />
      <Project
        projTitle={"free_source"}
        ghLink={"https://github.com/AJTJ/free_source"}
        projImg={freedive_img}
        projCopy={
          "A RESTful server that records freediving training and performance information.  Built with NestJS, GraphQL, PostgreSQL, TypeORM, PassportJS, and Redis. Currently building out a React Native app as well as web front-end."
        }
        // reversed={true}
      />
      <Project
        projTitle={"tensor_compare"}
        ghLink={"https://github.com/AJTJ/tensor_compare"}
        projImg={tensor_proj}
        projCopy={
          "A node implementation of TensorFlow's Universal Sentence Encoder that compares the similarity of a sentence and a response based on dimensional embeddings. A monorepo with react as a front-end."
        }
        // reversed={true}
      />

      <Element name="contact">
        <Contact />
      </Element>
    </PortfolioContainer>
  );
};

export default Portfolio;
