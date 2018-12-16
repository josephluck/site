import * as React from "react";
import App, { Container } from "next/app";
import { Navigation } from "../components/navigation";
import * as styled from "styled-components";
import { symbols } from "../components/theme";

const GlobalStyle = styled.createGlobalStyle``;

const MdxStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: inherit;
    text-decoration: none;
  }
  html,
  body {
    font-weight: ${symbols.fontWeight._300};
    font-size: 20px;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    font-family: "Inter UI", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
  h1,
  h2,
  h3 {
    margin: ${symbols.spacing._32} 0 ${symbols.spacing._16} 0;
  }
  p,
  code,
  h4,
  hr {
    margin-bottom: ${symbols.spacing._16};
  }
  h1 {
    font-size: ${symbols.font._24.size};
    font-weight: ${symbols.fontWeight._600};
  }
  h2 {
    font-size: ${symbols.font._18.size};
    font-weight: ${symbols.fontWeight._500};
  }
  h3 {
    font-size: ${symbols.font._16.size};
    font-weight: ${symbols.fontWeight._500};
  }
  p {
    font-size: ${symbols.font._16.size};
  }
  a {
    color: ${symbols.color.link};
    transition: ${symbols.transition.standard};
    text-decoration: none;
    font-weight: ${symbols.fontWeight._500};
    &:hover {
      color: ${symbols.color.linkHover};
    }
  }
`;

const Layout = styled.default.div`
  position: relative;
`;

const Content = styled.default.div`
  margin-left: 250px;
  padding: ${symbols.spacing._32};
`;

const Nav = styled.default(Navigation)`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  overflow: auto;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <MdxStyles />
        <Layout>
          <Nav />
          <Content>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Container>
    );
  }
}
