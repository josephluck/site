import * as React from "react";
import {
  HeadingOne,
  HeadingFour,
  HeadingTwo,
  Paragraph,
} from "../components/base";
import styled from "styled-components";
import { symbols } from "../components/theme";

const Email = styled(HeadingFour)`
  color: ${(props) => props.theme.linkTertiary}
  font-weight: normal;
`;

export default function () {
  return (
    <>
      <HeadingOne style={{ marginBottom: symbols.spacing._16 }}>
        Joseph Luck
      </HeadingOne>
      <Email style={{ marginBottom: symbols.spacing._32 }}>
        josephreubenluck@gmail.com
      </Email>
      <HeadingTwo style={{ marginBottom: symbols.spacing._32 }}>
        👋 I'm a product engineer based in London.
      </HeadingTwo>
      <Paragraph style={{ marginBottom: symbols.spacing._16 }}>
        Building a bank at{" "}
        <a href="https://www.mettle.co.uk/" target="_blank" rel="noopener">
          Mettle
        </a>
        . Previously lead front-end engineer at{" "}
        <a href="https://fantastec-swap.io/" target="_blank" rel="noopener">
          Fantastec
        </a>
        .
      </Paragraph>
      <Paragraph style={{ marginBottom: symbols.spacing._16 }}>
        Passionate about design, user experience and functional programming.
        Expert at React, React Native and TypeScript.
      </Paragraph>
      <Paragraph>
        Maker of{" "}
        <a
          href="https://github.com/josephluck/internote"
          target="_blank"
          rel="noopener"
        >
          Internote
        </a>
        ,{" "}
        <a
          href="https://josephluck.gitbooks.io/helix/"
          target="_blank"
          rel="noopener"
        >
          Helix
        </a>
        ,{" "}
        <a
          href="https://github.com/josephluck/sparkdown"
          target="_blank"
          rel="noopener"
        >
          Sparkdown
        </a>
        , <a href="https://github.com/josephluck/keepies">Keepies</a>,{" "}
        <a
          href="https://github.com/josephluck/wtf"
          target="_blank"
          rel="noopener"
        >
          wtf.js
        </a>{" "}
        and{" "}
        <a href="https://github.com/josephluck" target="_blank" rel="noopener">
          many more
        </a>
        .
      </Paragraph>
    </>
  );
}
