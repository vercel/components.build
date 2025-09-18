import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Author } from "./components/author";
import { Video } from "./components/video";

// use this function to get MDX components, you will need it for rendering MDX
export const getMDXComponents = (
  components?: MDXComponents
): MDXComponents => ({
  ...defaultMdxComponents,
  ...components,
  Author,
  Video,
});
