import { theme } from "../components/theme";
import * as React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // NB: collect server-side style sheets as per
    //     https://github.com/zeit/next.js/pull/5631/files
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...(initialProps.styles as any), ...sheet.getStyleElement()]
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="theme-color" content={theme.color.border} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.styles}

          <link
            type="text/css"
            rel="stylesheet"
            href="https://rsms.me/inter/inter-ui.css"
          />
          <link type="text/css" rel="stylesheet" href="/static/prism.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
