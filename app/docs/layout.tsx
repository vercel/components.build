import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      githubUrl="https://github.com/vercel/components"
      links={[]}
      nav={{
        mode: "top",
        title: (
          <>
            <svg
              aria-label="Logo"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={12} cy={12} fill="currentColor" r={12} />
            </svg>
            My App
          </>
        ),
      }}
      sidebar={{
        collapsible: false,
        style: {
          backgroundColor: "transparent",
        },
      }}
      tabMode="navbar"
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
