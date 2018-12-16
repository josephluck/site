import * as React from "react";
import styled from "styled-components";
import { symbols } from "./theme";
import { HeadingTwo } from "./typography";
import Link from "next/link";
import { withRouter } from "next/router";
import { Collapse } from "react-collapse";

const RouteHeading = styled(HeadingTwo)<{ active: boolean }>`
  color: ${props =>
    props.active ? symbols.color.linkHover : symbols.color.text};
  margin: ${symbols.spacing._16} 0 ${symbols.spacing._12};
  line-height: 1.2;
  &:first-of-type {
    margin-top: 0;
  }
  a {
    color: inherit;
  }
`;

const SubRoutes = styled.div`
  padding: 0 ${symbols.spacing._8};
`;

const SubRoute = styled(RouteHeading)`
  color: ${props =>
    props.active ? symbols.color.linkHover : symbols.color.linkTertiary};
  font-size: ${symbols.font._12.size};
  margin: ${symbols.spacing._8} 0;
`;

const Wrapper = styled.div`
  padding: ${symbols.spacing._32};
  background: ${symbols.color.navigationBackground};
  height: 100%;
  border-right: solid 1px ${symbols.color.border};
`;

const CollapseInner = styled.div`
  overflow: hidden;
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
      <RouteHeading active={asPath === "/"}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
      </RouteHeading>
      <RouteHeading
        active={asPath === "/blog" || blogPostsPaths.indexOf(asPath) > -1}
      >
        <Link href={blogPostsPaths[0]} passHref>
          <a>Blog</a>
        </Link>
      </RouteHeading>
      <Collapse
        isOpened={asPath === "/blog" || blogPostsPaths.indexOf(asPath) > -1}
        hasNestedCollapse
      >
        <CollapseInner>
          <SubRoutes>
            {blogPosts.map(post => (
              <SubRoute
                active={asPath === `/blog/${post.path}`}
                key={post.path}
              >
                <Link href={`/blog/${post.path}`} passHref>
                  <a>{post.name}</a>
                </Link>
              </SubRoute>
            ))}
          </SubRoutes>
        </CollapseInner>
      </Collapse>
    </Wrapper>
  );
});
