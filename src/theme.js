import React from "react";

import { Global as EmoGlobal, css } from "@emotion/react";

export const theme = {
  colors: {
    // the yellow highlight
    color_1: "#FFE98D",
    //old color_1: "#F7CB15",
    // the grey
    color_2: "#EAEAEA",
    //old color_2: "#9D8DF1",
    // the dark purple
    color_3: "#381D2A",
    orange: "#F6511D",
  },
};

export const Global = () => (
  <EmoGlobal
    styles={(p) => css`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        // default text color
        color: #514d4f;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    `}
  />
);
