import * as React from "react";
import styled from "styled-components";
import { theme } from "./theme";
import Link from "next/link";
import { withRouter } from "next/router";

const NavLink = styled.span<{ active: boolean }>`
  font-size: ${theme.font._12.size};
  line-height: ${theme.font._12.size};
  font-weight: ${theme.fontWeight._500};
  color: ${props =>
    props.active ? theme.color.linkHover : theme.color.linkTertiary};
  a {
    color: inherit;
  }
  margin-right: ${theme.spacing._8};
  @media (min-width: ${theme.media.tablet}) {
    margin-right: ${theme.spacing._16};
  }
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background: ${theme.color.navigationBackground};
  border-bottom: solid 1px ${theme.color.border};
  padding: ${theme.spacing._8} ${theme.spacing._16};
  display: flex;
  align-items: center;

  @media (min-width: ${theme.media.tablet}) {
    padding: ${theme.spacing._8} ${theme.spacing._32};
    display: block;
  }
`;

const Logo = styled.span`
  font-size: ${theme.font._12.size};
  line-height: ${theme.font._12.size};
  text-transform: uppercase;
  font-weight: ${theme.fontWeight._700};
  letter-spacing: 2px;
  color: ${theme.color.text};
  margin-right: ${theme.spacing._16};
  @media (min-width: ${theme.media.tablet}) {
    margin-right: ${theme.spacing._32};
  }
`;

const LogoWrap = styled.div`
  flex: 1;

  @media (min-width: ${theme.media.tablet}) {
    display: inline-block;
  }
`;

const blogPosts = [
  {
    name: "Typesafe react components",
    path: "typesafe-react-components"
  },
  {
    name: "Productivity",
    path: "productivity"
  }
];
const blogPostsPaths = blogPosts.map(post => `/blog/${post.path}`);

export const Navigation = withRouter<{ className?: string }>(props => {
  const { asPath } = props.router;
  const { className = "" } = props;
  return (
    <Wrapper className={className}>
      <LogoWrap>
        <Link href="/" passHref>
          <a>
            <Logo>JL</Logo>{" "}
          </a>
        </Link>
      </LogoWrap>
      <NavLink
        active={asPath === "/blog" || blogPostsPaths.indexOf(asPath) > -1}
      >
        <Link href={blogPostsPaths[0]} passHref>
          <a>Blog</a>
        </Link>
      </NavLink>
      <NavLink active={asPath === "/resume"}>
        <Link href="/resume" passHref>
          <a>Resume</a>
        </Link>
      </NavLink>
      <NavLink active={asPath === "/references"}>
        <Link href="/references" passHref>
          <a>References</a>
        </Link>
      </NavLink>
    </Wrapper>
  );
});
