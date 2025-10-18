import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorNote } from "@/components/author-note";
import { LLMCopyButton, ViewOptions } from "@/components/page-actions";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: PageProps<"/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;
  const mdxUrl = page.path;

  return (
    <DocsPage
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
      }}
      toc={page.data.toc}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="-mt-8 mb-8 flex flex-row items-center gap-2">
        <LLMCopyButton markdownUrl={mdxUrl} />
        <ViewOptions
          githubUrl={`https://github.com/vercel/components.build/blob/main/apps/docs/content/docs/${page.path}`}
          markdownUrl={mdxUrl}
        />
      </div>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            AuthorNote,
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export const generateStaticParams = () => source.generateParams();

export async function generateMetadata(
  props: PageProps<"/[[...slug]]">
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const title = `${page.data.title} | components.build`;
  const description = page.data.description;
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  const image = new URL(`/og?slug=${params.slug?.join("/") ?? ""}`, baseUrl);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      card: "summary_large_image",
      creator: "@vercel",
    },
  };
}
