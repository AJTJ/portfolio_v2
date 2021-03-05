import React from "react";

import { Global as EmoGlobal, css } from "@emotion/react";

export const theme = {
  colors: {
    orange: "#F6511D",
    lavender: "#9D8DF1",
    yellow: "#F7CB15",
    dark_purple: "#381D2A",
  },
};

export const Global = () => (
  <EmoGlobal
    styles={(p) => css`
      * {
        box-sizing: border-box;
      }
      html {
        @font-face {
          font-family: Noto Sans;
          src: url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap");
        }
        @font-face {
          font-family: Poppins;
          src: url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");
        }
      }
      body {
        margin: 0;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    `}
  />
);
