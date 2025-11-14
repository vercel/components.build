import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsTitle,
  DocsPage as FumadocsDocsPage,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { Author } from "@/components/author";
import { getMDXComponents } from "@/components/geistdocs/mdx-components";
import { TableOfContents } from "@/components/geistdocs/toc";
import { getLLMText, getPageImage, source } from "@/lib/geistdocs/source";
import { AuthorNote } from "../author-note";
import { AskAI } from "./ask-ai";
import { CopyPage } from "./copy-page";
import { EditSource } from "./edit-source";
import { Feedback } from "./feedback";
import { OpenInChat } from "./open-in-chat";
import { ScrollTop } from "./scroll-top";

const containerStyle = {
  "--fd-nav-height": "4rem",
} as CSSProperties;

type PageProps = {
  slug: string[] | undefined;
};

export const DocsPage = async ({ slug }: PageProps) => {
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const markdown = await getLLMText(page);

  let editOnGithubUrl: string | undefined;

  const owner = process.env.NEXT_PUBLIC_GEISTDOCS_OWNER;
  const repo = process.env.NEXT_PUBLIC_GEISTDOCS_REPO;
  const path = page.path;

  if (owner && repo && path) {
    editOnGithubUrl = `https://github.com/${owner}/${repo}/edit/main/content/docs/${path}`;
  }

  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const url = new URL(
    page.url,
    `${protocol}://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  ).toString();
  const query = `Read this page, I want to ask questions about it. ${url}`;

  return (
    <FumadocsDocsPage
      container={{ style: containerStyle, className: "col-span-2" }}
      full={page.data.full}
      tableOfContent={{
        component: (
          <TableOfContents>
            <EditSource url={editOnGithubUrl} />
            <ScrollTop />
            <Feedback />
            <CopyPage text={markdown} />
            <AskAI query={query} />
            <OpenInChat query={query} />
          </TableOfContents>
        ),
      }}
      toc={page.data.toc}
    >
      <DocsTitle className="text-4xl tracking-tight">
        {page.data.title}
      </DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody className="mx-auto w-full">
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            Author,
            AuthorNote,
          })}
        />
      </DocsBody>
    </FumadocsDocsPage>
  );
};

export const generateStaticPageParams = () => source.generateParams();

export const generatePageMetadata = (slug: PageProps["slug"]) => {
  const page = source.getPage(slug);

  if (!page) {
    notFound();
  }

  const metadata: Metadata = {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };

  return metadata;
};
