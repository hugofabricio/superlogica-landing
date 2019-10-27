import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../styles";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
