import styled from "styled-components";
import { symbols } from "./theme";

export const HeadingOne = styled.h1`
  font-size: ${symbols.font._24.size};
  line-height: ${symbols.font._24.lineHeight};
  font-weight: ${symbols.fontWeight._600};
`;

export const HeadingTwo = styled.h2`
  font-size: ${symbols.font._18.size};
  line-height: ${symbols.font._18.lineHeight};
  font-weight: ${symbols.fontWeight._500};
`;

export const HeadingThree = styled.h3`
  font-size: ${symbols.font._16.size};
  line-height: ${symbols.font._16.lineHeight};
  font-weight: ${symbols.fontWeight._500};
`;
