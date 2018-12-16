import * as React from "react";
import App, { Container } from "next/app";
import { Navigation } from "../components/navigation";
import * as styled from "styled-components";
import { theme } from "../components/theme";
import { MDXProvider } from "@mdx-js/tag";
import * as Base from "../components/base";
import Link from "next/link";

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
  p: ({ children }) => (
    <Base.ContentParagraph>{children}</Base.ContentParagraph>
  ),
  hr: ({ children }) => <Base.Hr>{children}</Base.Hr>,
  a: ({ children, href }) => {
    return href.indexOf("http") > -1 ? (
      <a href={href} target="_blank">
        {children}
      </a>
    ) : (
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    );
  },
  strong: ({ children }) => <Base.Strong>{children}</Base.Strong>,
  blockquote: ({ children }) => <Base.BlockQuote>{children}</Base.BlockQuote>
};

const GlobalStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: inherit;
    text-decoration: none;
  }
  html,
  body {
    font-weight: ${theme.fontWeight._300};
    font-size: 20px;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    font-family: "Inter UI", sans-serif;
    width: 100vw;
    min-width: 100vw;
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
  p,
  code,
  h4 {
    margin: ${theme.spacing._16} 0;
  }
  strong {
    font-weight: ${theme.fontWeight._600};
  }
  p {
    font-size: ${theme.font.paragraph.size};
    line-height: ${theme.font.paragraph.lineHeight};
  }
  a {
    color: ${theme.color.link};
    transition: ${theme.transition.standard};
    text-decoration: none;
    &:hover {
      color: ${theme.color.linkHover};
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${theme.color.syntaxPunctuation};
    font-family: "Inconsolata", monospace;
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
    background: ${theme.color.syntaxSelectionBg};
  }
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    background: ${theme.color.syntaxSelectionBg};
  }

  /* Code blocks */
  pre[class*="language-"] {
    overflow: auto;
  }

  :not(pre) > code[class*="language-"] {
    padding: ${theme.spacing._4};
    border: 1px solid ${theme.color.border};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${theme.color.syntaxComment};
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string {
    color: ${theme.color.syntaxString};
  }

  .token.punctuation,
  .token.operator {
    color: ${theme.color.syntaxPunctuation};
    font-weight: normal;
  }

  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.inserted {
    color: ${theme.color.syntax4};
  }

  .token.atrule,
  .token.keyword,
  .token.attr-value,
  .language-autohotkey .token.selector,
  .language-json .token.boolean,
  .language-json .token.number,
  code[class*="language-css"] {
    color: ${theme.color.syntaxKeyword};
    font-weight: ${theme.fontWeight._700};
  }

  .token.deleted,
  .language-autohotkey .token.tag {
    color: ${theme.color.syntaxDeleted};
  }

  .token.selector,
  .language-autohotkey .token.keyword {
    color: ${theme.color.syntaxKeyword};
  }

  .token.important,
  .token.bold {
    font-weight: ${theme.fontWeight._700};
  }

  .token.italic {
    font-style: italic;
  }

  .token.class-name,
  .token.function,
  .language-json .token.property {
    color: ${theme.color.syntaxClassName};
  }

  .token.tag,
  .token.selector {
    color: ${theme.color.syntaxTag};
  }

  .token.attr-name,
  .token.property,
  .token.regex,
  .token.entity {
    color: ${theme.color.syntaxAttributeName};
    font-weight: normal;
  }

  .token.directive.tag .tag {
    background: transparent;
    color: ${theme.color.syntaxPunctuation};
  }

  .line-numbers .line-numbers-rows {
    border-right-color: ${theme.color.syntaxLineNumberBorder};
  }

  .line-numbers-rows > span:before {
    color: ${theme.color.syntaxClassName};
  }

  .line-highlight {
    background: ${theme.color.syntaxHighlightLine};
  }
`;

const Layout = styled.default.div`
  position: relative;
`;

const Content = styled.default.div`
  padding: ${theme.spacing._16};
  max-width: 650px;

  @media (min-width: ${theme.media.tablet}) {
    padding: ${theme.spacing._32};
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles />
        <MDXProvider components={components}>
          <Layout>
            <Navigation />
            <Content>
              <Component {...pageProps} />
            </Content>
          </Layout>
        </MDXProvider>
      </Container>
    );
  }
}
