import styled from "styled-components";
import { theme } from "./theme";

export const HeadingOne = styled.h1`
  font-size: ${theme.font._28.size};
  line-height: ${theme.font._28.lineHeight};
  font-weight: ${theme.fontWeight._600};
`;
export const HeadingTwo = styled.h2`
  font-size: ${theme.font._22.size};
  line-height: ${theme.font._22.lineHeight};
  font-weight: ${theme.fontWeight._500};
`;
export const HeadingThree = styled.h3`
  font-size: ${theme.font._18.size};
  line-height: ${theme.font._18.lineHeight};
  font-weight: ${theme.fontWeight._500};
`;
export const HeadingFour = styled.h4`
  font-size: ${theme.font._16.size};
  line-height: ${theme.font._16.lineHeight};
  font-weight: ${theme.fontWeight._500};
`;
export const Paragraph = styled.p`
  font-size: ${theme.font.paragraph.size};
  line-height: ${theme.font.paragraph.lineHeight};
`;
export const Strong = styled.strong`
  font-weight: ${theme.fontWeight._600};
`;

export const ContentHeadingOne = styled(HeadingOne)`
  margin: ${theme.spacing._32} 0;
`;
export const ContentHeadingTwo = styled(HeadingTwo)`
  margin: ${theme.spacing._32} 0 ${theme.spacing._16} 0;
`;
export const ContentHeadingThree = styled(HeadingThree)`
  margin: ${theme.spacing._32} 0 ${theme.spacing._16} 0;
`;
export const ContentHeadingFour = styled(HeadingFour)`
  margin: ${theme.spacing._32} 0 ${theme.spacing._16} 0;
`;
export const ContentParagraph = styled(Paragraph)`
  margin: ${theme.spacing._16} 0;
`;

// NB: only applies to formatted code blocks i.e. ```[code]```
export const Code = styled.code`
  font-family: "Inconsolata", monospace;
`;

export const Hr = styled.hr`
  margin: ${theme.spacing._32} 0;
  border: 0;
  border-bottom: solid 1px ${theme.color.border};
`;

export const BlockQuote = styled.blockquote`
  border-left: solid 4px ${theme.color.blockQuoteBorder};
  margin: ${theme.spacing._16} 0;
  padding-left: ${theme.spacing._8};
  font-size: ${theme.font._12.size};
  line-height: ${theme.font._14.lineHeight};
  font-weight: ${theme.fontWeight._500};
  color: ${theme.color.blockQuoteText};
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
  margin-bottom: ${theme.spacing._4};
`;
