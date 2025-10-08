import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { BoxesIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
            <BoxesIcon className="size-4" />
            <span className="font-medium">components.build</span>
            <Badge className="rounded-full" variant="secondary">
              Beta
            </Badge>
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
