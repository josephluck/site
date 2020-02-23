import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { symbols, defaultTheme } from "./theme";
import Link from "next/link";
import { withRouter } from "next/router";

const NavLink = styled.span<{ active: boolean }>`
  font-size: ${symbols.font._12.size};
  line-height: ${symbols.font._12.size};
  font-weight: ${symbols.fontWeight._500};
  color: ${props =>
    props.active ? props.theme.linkHover : props.theme.linkTertiary};
  a {
    color: inherit;
  }
  margin-left: ${symbols.spacing._8};
  @media (min-width: ${symbols.media.tablet}) {
    margin-left: ${symbols.spacing._16};
  }
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  position: sticky;
  top: 0;
  border-bottom: solid 1px ${props => props.theme.border};
  display: flex;
  align-items: center;
  overflow: auto;
  width: 100%;

  @media (min-width: ${symbols.media.tablet}) {
    display: block;
  }
`;

const Inner = styled.div`
  max-width: 768px;
  padding: ${symbols.spacing._8} ${symbols.spacing._16};
  display: flex;
  align-items: center;
  flex: 1;

  @media (min-width: ${symbols.media.tablet}) {
    padding: ${symbols.spacing._8} ${symbols.spacing._32};
    margin: 0 auto;
  }
`;

const Logo = styled.span`
  font-size: ${symbols.font._12.size};
  line-height: ${symbols.font._12.size};
  text-transform: uppercase;
  font-weight: ${symbols.fontWeight._700};
  letter-spacing: 2px;
  color: ${props => props.theme.text};
  margin-right: ${symbols.spacing._8};
  font-family: "Source Code Pro", sans-serif;
  @media (min-width: ${symbols.media.tablet}) {
    margin-right: ${symbols.spacing._16};
  }
`;

const LogoWrap = styled.div`
  flex: 1;
`;

const Links = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

export const NavigationLink = withRouter<{
  href: string;
  children: React.ReactNode;
  includes?: string;
}>(({ href, children, includes, router }) => {
  const { asPath } = router;

  return (
    <NavLink active={asPath.includes(includes || href)}>
      <Link href={href} passHref prefetch>
        <a>{children}</a>
      </Link>
    </NavLink>
  );
});

export const Navigation = ({ className }: { className?: string }) => (
  <Wrapper className={className}>
    <Inner>
      <LogoWrap>
        <Link href="/" passHref prefetch>
          <a>
            <Logo>JL</Logo>{" "}
          </a>
        </Link>
      </LogoWrap>
      <Links>
        <NavigationLink href="/blog">Blog</NavigationLink>
        <NavigationLink href="/resume">Resume</NavigationLink>
        {/* <NavigationLink href="/projects">Projects</NavigationLink> */}
        <NavigationLink href="/references">References</NavigationLink>
      </Links>
    </Inner>
  </Wrapper>
);
