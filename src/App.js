import React from "react";
import Portfolio from "./Portfolio";
import { ThemeProvider } from "@emotion/react";
import { theme, Global } from "./Portfolio/theme";

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
