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
