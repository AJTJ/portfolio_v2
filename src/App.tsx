import React from "react";
import Portfolio from "./Portfolio";
import { ThemeProvider } from "@emotion/react";
import { theme, Global } from "./Portfolio/theme";

//little update with new images

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
