import React from "react";
import facepaint from "facepaint";
import { Global as EmoGlobal, css } from "@emotion/react";

// MQ EXAMPLES
// ${mq[1]} {
//   display: none;
// }
// import { mq } from "../../theme";

// ${mq[3]} {
//   font-size: 65px;
// }
// ${mq[2]} {
//   font-size: 50px;
// }
// ${mq[1]} {
//   font-size: 30px;
// }
// ${mq[0]} {
//   font-size: 20px;
// }

const bps = ["400", "600", "800", "1060"];

export const mq = bps.map((bp) => `@media (max-width: ${bp}px)`);
export const mqMin = bps.map((bp) => `@media (min-width: ${bp}px)`);

export const mqO = facepaint([
  `@media(max-width: ${bps[3]}px)`,
  `@media(max-width: ${bps[2]}px)`,
  `@media(max-width: ${bps[1]}px)`,
  `@media(max-width: ${bps[0]}px)`,
]);

export const mqNew = (bp) => `@media (max-width: ${bp}px)`;

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
    // a lighter grey
    color_4: "#f0f0f0",
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
