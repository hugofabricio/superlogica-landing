import React from "react";
import App from "next/app";
import { GlobalStyles } from "../styles";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
