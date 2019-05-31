import * as React from "react";

import styled from "styled-components";
import { theme } from "./theme";

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: ${theme.spacing._4};
`;

export function Gif({ src }: { src: string }) {
  return <Image src={src} />;
}
