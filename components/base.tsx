import styled from "styled-components";
import { symbols } from "./theme";

export const HeadingOne = styled.h1`
  font-size: ${symbols.font._28.size};
  line-height: ${symbols.font._28.lineHeight};
  font-weight: ${symbols.fontWeight._600};
`;
export const HeadingTwo = styled.h2`
  font-size: ${symbols.font._22.size};
  line-height: ${symbols.font._22.lineHeight};
  font-weight: ${symbols.fontWeight._500};
`;
export const HeadingThree = styled.h3`
  font-size: ${symbols.font._18.size};
  line-height: ${symbols.font._18.lineHeight};
  font-weight: ${symbols.fontWeight._500};
`;
export const HeadingFour = styled.h4`
  font-size: ${symbols.font._16.size};
  line-height: ${symbols.font._16.lineHeight};
  font-weight: ${symbols.fontWeight._500};
`;
export const Paragraph = styled.p`
  font-size: ${symbols.font.paragraph.size};
  line-height: ${symbols.font.paragraph.lineHeight};
`;
export const Strong = styled.strong`
  font-weight: ${symbols.fontWeight._600};
`;

export const ContentHeadingOne = styled(HeadingOne)`
  margin: ${symbols.spacing._32} 0;
`;
export const ContentHeadingTwo = styled(HeadingTwo)`
  margin: ${symbols.spacing._32} 0 ${symbols.spacing._16} 0;
`;
export const ContentHeadingThree = styled(HeadingThree)`
  margin: ${symbols.spacing._32} 0 ${symbols.spacing._16} 0;
`;
export const ContentHeadingFour = styled(HeadingFour)`
  margin: ${symbols.spacing._32} 0 ${symbols.spacing._16} 0;
`;
export const ContentParagraph = styled(Paragraph)`
  margin: ${symbols.spacing._16} 0;
`;

// NB: only applies to formatted code blocks i.e. ```[code]```
export const Code = styled.code`
  font-family: "Overpass Mono", monospace;
`;

export const Hr = styled.hr`
  margin: ${symbols.spacing._32} 0;
  border: 0;
  border-bottom: solid 1px ${props => props.theme.border};
`;

export const BlockQuote = styled.blockquote`
  border-left: solid 4px ${props => props.theme.blockQuoteBorder};
  margin: ${symbols.spacing._16} 0;
  padding-left: ${symbols.spacing._8};
  font-size: ${symbols.font._12.size};
  line-height: ${symbols.font._14.lineHeight};
  font-weight: ${symbols.fontWeight._500};
  color: ${props => props.theme.blockQuoteText};
  font-style: normal;
  * {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
  }
`;

export const ListItem = styled.li`
  margin-bottom: ${symbols.spacing._4};
`;
