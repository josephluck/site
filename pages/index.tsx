import * as React from "react";
import {
  HeadingOne,
  HeadingFour,
  HeadingTwo,
  Paragraph
} from "../components/base";
import styled from "styled-components";
import { theme } from "../components/theme";

const Email = styled(HeadingFour)`
  color: ${theme.color.linkTertiary}
  font-weight: normal;
`;

export default function() {
  return (
    <>
      <HeadingOne style={{ marginBottom: theme.spacing._16 }}>
        Joseph Luck
      </HeadingOne>
      <Email style={{ marginBottom: theme.spacing._32 }}>
        josephreubenluck@gmail.com
      </Email>
      <HeadingTwo style={{ marginBottom: theme.spacing._32 }}>
        👋 I'm a product engineer based in London.
      </HeadingTwo>
      <Paragraph style={{ marginBottom: theme.spacing._16 }}>
        Lead front-end engineer at{" "}
        <a href="https://www.fantastec.game/" target="_blank">
          Fantastec
        </a>
        . Previously senior front-end engineer at{" "}
        <a href="https://www.goodlord.co/" target="_blank">
          Goodlord
        </a>
        .
      </Paragraph>
      <Paragraph style={{ marginBottom: theme.spacing._16 }}>
        Passionate about design, user experience and functional programming.
        Expert at React and Typescript.
      </Paragraph>
      <Paragraph>
        Maker of{" "}
        <a href="https://josephluck.gitbooks.io/helix/" target="_blank">
          Helix
        </a>
        ,{" "}
        <a href="https://github.com/josephluck/sparkdown" target="_blank">
          Sparkdown
        </a>
        , <a href="https://github.com/josephluck/keepies">Keepies</a>,{" "}
        <a href="https://github.com/josephluck/wtf" target="_blank">
          wtf.js
        </a>
        ,{" "}
        <a href="https://github.com/josephluck/internote" target="_blank">
          Internote
        </a>{" "}
        and{" "}
        <a href="https://github.com/josephluck" target="_blank">
          many more
        </a>
        .
      </Paragraph>
    </>
  );
}
