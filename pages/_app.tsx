import * as React from "react";
import App, { Container } from "next/app";
import { Navigation } from "../components/navigation";
import * as styled from "styled-components";
import { symbols, defaultTheme } from "../components/theme";
import { MDXProvider } from "@mdx-js/tag";
import * as Base from "../components/base";
import Link from "next/link";
import { GA_CODE } from "../env";
import Router from "next/router";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

// Map HTML tags to React components
const components = {
  h1: ({ children }) => (
    <Base.ContentHeadingOne>{children}</Base.ContentHeadingOne>
  ),
  h2: ({ children }) => (
    <Base.ContentHeadingTwo>{children}</Base.ContentHeadingTwo>
  ),
  h3: ({ children }) => (
    <Base.ContentHeadingThree>{children}</Base.ContentHeadingThree>
  ),
  h4: ({ children }) => (
    <Base.ContentHeadingFour>{children}</Base.ContentHeadingFour>
  ),
  p: ({ children }) => (
    <Base.ContentParagraph>{children}</Base.ContentParagraph>
  ),
  hr: ({ children }) => <Base.Hr>{children}</Base.Hr>,
  a: ({ children, href }) => {
    return href.indexOf("http") > -1 ? (
      <a href={href} target="_blank" rel="noopener">
        {children}
      </a>
    ) : (
      <Link href={href} passHref prefetch>
        <a>{children}</a>
      </Link>
    );
  },
  strong: ({ children }) => <Base.Strong>{children}</Base.Strong>,
  blockquote: ({ children }) => <Base.BlockQuote>{children}</Base.BlockQuote>,
  code: ({ children }) => <Base.Code>{children}</Base.Code>,
  li: ({ children }) => <Base.ListItem>{children}</Base.ListItem>,
};

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: inherit;
    text-decoration: none;
  }
  html,
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-weight: ${symbols.fontWeight._400};
    font-display: fallback;
    font-size: 18px;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    font-family: "Work Sans", sans-serif;
    @media (min-width: ${symbols.media.tablet}) {
      font-size: 20px;
    }
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
  p {
    font-size: ${symbols.font.paragraph.size};
    line-height: ${symbols.font.paragraph.lineHeight};
  }
  a {
    color: ${(props) => props.theme.link};
    transition: ${symbols.transition.standard};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.linkHover};
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${(props) => props.theme.syntaxPunctuation};
    background: ${(props) => props.theme.syntaxBackground};
    border: solid 1px ${(props) => props.theme.syntaxBorder};
    border-radius: 6px;
    padding: ${symbols.spacing._8};
    font-family: "Source Code Pro", monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: 0.9rem;
    line-height: 1.2em;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    background: ${(props) => props.theme.syntaxSelectionBg};
  }
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    background: ${(props) => props.theme.syntaxSelectionBg};
  }

  /* Code blocks */
  pre[class*="language-"] {
    overflow: auto;
  }

  :not(pre) > code[class*="language-"] {
    padding: ${symbols.spacing._4};
    border: 1px solid ${(props) => props.theme.border};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${(props) => props.theme.syntaxComment};
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string {
    color: ${(props) => props.theme.syntaxString};
  }

  .token.punctuation,
  .token.operator {
    color: ${(props) => props.theme.syntaxPunctuation};
    font-weight: normal;
  }

  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.inserted {
    color: ${(props) => props.theme.syntax4};
  }

  .token.atrule,
  .token.keyword,
  .token.attr-value,
  .language-autohotkey .token.selector,
  .language-json .token.boolean,
  .language-json .token.number,
  code[class*="language-css"] {
    color: ${(props) => props.theme.syntaxKeyword};
    font-weight: ${symbols.fontWeight._700};
  }

  .token.deleted,
  .language-autohotkey .token.tag {
    color: ${(props) => props.theme.syntaxDeleted};
  }

  .token.selector,
  .language-autohotkey .token.keyword {
    color: ${(props) => props.theme.syntaxKeyword};
  }

  .token.important,
  .token.bold {
    font-weight: ${symbols.fontWeight._700};
  }

  .token.italic {
    font-style: italic;
  }

  .token.comment {
    white-space: pre-wrap;
  }

  .token.class-name,
  .token.function,
  .language-json .token.property {
    color: ${(props) => props.theme.syntaxClassName};
    font-weight: ${symbols.fontWeight._700};
  }

  .token.tag,
  .token.selector {
    color: ${(props) => props.theme.syntaxTag};
  }

  .token.attr-name,
  .token.property,
  .token.regex,
  .token.entity {
    color: ${(props) => props.theme.syntaxAttributeName};
    font-weight: normal;
  }

  .token.directive.tag .tag {
    background: transparent;
    color: ${(props) => props.theme.syntaxPunctuation};
  }

  .line-numbers .line-numbers-rows {
    border-right-color: ${(props) => props.theme.syntaxLineNumberBorder};
  }

  .line-numbers-rows > span:before {
    color: ${(props) => props.theme.syntaxClassName};
  }

  .line-highlight {
    background: ${(props) => props.theme.syntaxHighlightLine};
  }

  p code,
  li code {
    font-family: "Source Code Pro", monospace;
    font-size: ${symbols.font._12.size};
    line-height: ${symbols.font._12.size};
    border: solid 1px ${(props) => props.theme.border};
    border-radius: 6px;
    padding: ${symbols.spacing._2};
  }
`;

const Layout = styled.default.div`
  position: relative;
`;

const Content = styled.default.div`
  padding: ${symbols.spacing._16};
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: ${symbols.media.tablet}) {
    padding: ${symbols.spacing._32};
  }
`;

export default class MyApp extends App {
  componentDidMount() {
    Router.events.on("routeChangeStart", this.trackPage);
  }

  trackPage = (url: string) => {
    if (window && (window as any).gtag) {
      (window as any).gtag("config", GA_CODE, {
        page_title: document.title,
        page_path: url,
      });
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <>
            <GlobalStyles />
            <MDXProvider components={components}>
              <Layout>
                <Head>
                  <title>Joseph Luck - Product Engineer</title>
                </Head>
                <Navigation />
                <Content>
                  <Component {...pageProps} />
                </Content>
              </Layout>
            </MDXProvider>
          </>
        </Container>
      </ThemeProvider>
    );
  }
}
