import * as React from "react";

import styled from "styled-components";
import { symbols } from "./theme";

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: ${symbols.spacing._4};
`;

export function Image({ src }: { src: string }) {
  return <Img src={src} />;
}
