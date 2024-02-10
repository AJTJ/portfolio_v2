/** @jsx jsx */
import { jsx } from "@emotion/react";
// import React from "react";
import facepaint from "facepaint";
import { Global as EmoGlobal, css, Theme } from "@emotion/react";
import "@emotion/react";

const bps = ["400", "600", "800", "1060"];

export const mq = bps.map((bp) => `@media (max-width: ${bp}px)`);
export const mqMin = bps.map((bp) => `@media (min-width: ${bp}px)`);

export const mqO = facepaint([
  `@media(max-width: ${bps[3]}px)`,
  `@media(max-width: ${bps[2]}px)`,
  `@media(max-width: ${bps[1]}px)`,
  `@media(max-width: ${bps[0]}px)`,
]);

export const mqNew = (bp: string) => `@media (max-width: ${bp}px)`;

export const theme = {
  colors: {
    // the main colour
    color_1: "#ffe26f",
    // color_1: "#7098ff",
    // color_1: "#FFE98D",

    // the "fade-into" colour
    color_1_lighter: "#ffeda4",

    // the general background
    color_2: "#080505",
    // color_2: "#EAEAEA",
    //old color_2: "#9D8DF1",

    // the dark purple
    color_3: "#061843",

    // a lighter grey
    color_4: "#f0f0f0",
    orange: "#F6511D",
  },
};

declare module "@emotion/react" {
  export interface Theme {
    colors: Record<string, string>;
  }
}

const globalStyles = css`
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
  }
  a {
    text-decoration: none;
  }
`;

export const Global = () => {
  return <EmoGlobal styles={(p) => globalStyles} />;
};

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
