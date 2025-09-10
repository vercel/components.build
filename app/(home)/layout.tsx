import { HomeLayout } from "fumadocs-ui/layouts/home";

export default function Layout({ children }: LayoutProps<"/">) {
  return <HomeLayout>{children}</HomeLayout>;
}
