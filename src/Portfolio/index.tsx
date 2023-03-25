import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Project, { ProjectsTitle } from "./Project";
import Contact from "./Contact";
import { Element } from "react-scroll";

//PROJECT IMAGES
import rusty_chat_img from "./assets/rusty_chat_code.png";
import cms_background from "./assets/cms_background.png";
import tensor_proj from "./assets/tensor_proj.png";
import freedive_img from "./assets/freedive.png";
import gravity_img from "./assets/gravity_ball.png";
import auction_img from "./assets/auction.jpeg";
import roll from "./assets/roll.jpeg";

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
        projTitle={"Rusty Chat"}
        ghLinks={[{ link: "https://github.com/AJTJ/rusty_chat" }]}
        liveLink={"https://ajtj.github.io/chat_frontend/"}
        projImg={rusty_chat_img}
        projCopy={
          "An experiment in creating a high performance, websockets chat service built with Rust and Actix/Actix-Web with an SQLite database and custom session management. Digging deeper into the actor model. Currently containerized with docker and served on digital ocean with an nginx reverse proxy."
        }
      />

      <Project
        projTitle={"Rabin Karp - WASM-pack"}
        ghLinks={[
          { title: "Rust", link: "https://github.com/AJTJ/rabin_karp_wasm" },
          {
            title: "TS",
            link: "https://github.com/AJTJ/ts-js_algos/blob/master/rabin_compare.ts",
          },
        ]}
        liveLink={"https://www.npmjs.com/package/rabin-karp-wasm/"}
        projImg={roll}
        projCopy={
          "This is a rust implementation of the Rabin-Karp string searching algorithm wrapped into a neat npm package for use in node environments. Given a substring pattern and a larger string sample, it will find all indexes where a valid substring match exists. The efficiency of the algorithm is that it uses a rolling hash to be able to function in linear time.  By my rudimentary benchmarks, it runs about 4 to 7 times faster than a pure JS algorithm."
        }
      />
      <Project
        projTitle={"The YLC CMS"}
        ghLinks={[
          {
            link: "https://github.com/Yukon-Literacy-Coalition/ylc_website_v2",
          },
        ]}
        liveLink={"http://yukonliteracy.com/"}
        projImg={cms_background}
        projCopy={
          "A custom CMS built using react-static, NetlifyCMS and distributed over Netlify for a neat, git-based system."
        }
        // reversed={true}
      />
      <Project
        projTitle={"Free Source"}
        ghLinks={[{ link: "https://github.com/AJTJ/free_source" }]}
        projImg={freedive_img}
        projCopy={
          "A RESTful server that records freediving training and performance information.  Built with NestJS, GraphQL, PostgreSQL, TypeORM, PassportJS, and Redis. Currently building out a React Native app as well as web front-end."
        }
        // reversed={true}
      />
      <Project
        projTitle={"Solana Dutch Auction"}
        ghLinks={[{ link: "https://github.com/AJTJ/dutch_auction" }]}
        projImg={auction_img}
        projCopy={
          "A dutch auction program built with Anchor for the Solana blockchain. Programs on the blockchain are stateless, small, and secure."
        }
        // reversed={true}
      />
      <Project
        projTitle={"Tensor Sentence Compare"}
        ghLinks={[{ link: "https://github.com/AJTJ/tensor_compare" }]}
        projImg={tensor_proj}
        projCopy={
          "A node implementation of TensorFlow's Universal Sentence Encoder that compares the similarity of a sentence and a response based on dimensional embeddings. A monorepo with react as a front-end."
        }
        // reversed={true}
      />
      <Project
        projTitle={"Gravity Ball V2"}
        ghLinks={[{ link: "https://github.com/AJTJ/gravity_ball_v2" }]}
        projImg={gravity_img}
        projCopy={
          "A physics-based game made with BabylonJS. Don't fall off the platform!"
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
