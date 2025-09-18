import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { BoxesIcon } from "lucide-react";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <DocsLayout
      githubUrl="https://github.com/vercel/components.build"
      links={[]}
      nav={{
        mode: "top",
        title: (
          <>
            <BoxesIcon />
            <span className="font-semibold">components.build</span>
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
