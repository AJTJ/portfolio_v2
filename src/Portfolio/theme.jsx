import React from "react";
import facepaint from "facepaint";
import { Global as EmoGlobal, css, Theme } from "@emotion/react";

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
// ${mq[0]} {s
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
    color_1_lighter: "#ffeda4",
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

export const Global = () => {
  return (
    <EmoGlobal
      styles={(p) => css`
        * {
          box-sizing: "border-box";
        }
        p {
          margin: 0;
        }
        body {
          margin: 0;
          // default text color
          color: #514d4f;
          font-size: 20px;
          font-family: "Open Sans", sans-serif;
          button {
            font-family: "Open Sans", sans-serif;
          }
          a {
            text-decoration: none;
            color: ${(p) => p.theme.colors.color_1};
          }
        }
      `}
    />
  );
};
