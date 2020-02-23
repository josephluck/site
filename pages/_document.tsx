import * as React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript } from "next/document";
import { GA_CODE } from "../env";

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
          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content="A software engineer with a profound interest in design, user experience and functional programming in languages such as JavaScript and TypeScript."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link
            type="text/css"
            rel="stylesheet"
            href="https://rsms.me/inter/inter-ui.css"
          /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700"
            rel="stylesheet"
          />
          {this.props.styles}
        </Head>

        <body>
          <Main />
          <NextScript />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_CODE}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${GA_CODE});
              `
            }}
          />
        </body>
      </html>
    );
  }
}
