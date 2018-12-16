import * as React from "react";
import App, { Container } from "next/app";
import { Navigation } from "../components/navigation";
import * as styled from "styled-components";
import { symbols } from "../components/theme";

const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: inherit;
    text-decoration: none;
  }
  html,
  body {
    font-weight: ${symbols.fontWeight._300};
    font-size: ${symbols.font._16.size};
    line-height: ${symbols.font._16.lineHeight};
    margin: 0;
    padding: 0;
    font-family: "Inter UI", sans-serif;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
      </Container>
    );
  }
}
