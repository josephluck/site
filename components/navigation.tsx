import * as React from "react";
import styled from "styled-components";
import { symbols } from "./theme";
import { HeadingTwo } from "./typography";
import Link from "next/link";
import { withRouter } from "next/router";
import { Collapse } from "react-collapse";

const RouteHeading = styled(HeadingTwo)<{ active: boolean }>`
  color: ${props =>
    props.active ? symbols.color.linkHover : symbols.color.link};
  transition: ${symbols.transition.standard};
  &:hover {
    color: ${symbols.color.linkHover};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const SubRoutes = styled.div`
  padding: 0 ${symbols.spacing._16};
`;

const SubRoute = styled(RouteHeading)`
  color: ${props =>
    props.active ? symbols.color.linkHover : symbols.color.linkTertiary};
`;

const blogPosts = [
  {
    name: "Typesafe react components",
    path: "typesafe-react-components"
  }
];
const blogPostsPaths = blogPosts.map(post => `/blog/${post.path}`);

export const Navigation = withRouter<{}>(props => {
  const { asPath } = props.router;
  return (
    <div>
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
      >
        <SubRoutes>
          {blogPosts.map(post => (
            <SubRoute active={asPath === `/blog/${post.path}`} key={post.path}>
              <Link href={`/blog/${post.path}`} passHref>
                <a>{post.name}</a>
              </Link>
            </SubRoute>
          ))}
        </SubRoutes>
      </Collapse>
    </div>
  );
});
