import { BoxIcon } from "lucide-react";

export const Logo = () => (
  <>
    <span className="hidden font-semibold text-xl tracking-tight sm:block">
      components.build
    </span>
    <span className="font-semibold text-xl tracking-tight sm:hidden">
      <BoxIcon className="size-5" />
    </span>
  </>
);

export const github = {
  owner: undefined as string | undefined,
  repo: undefined as string | undefined,
};

export const nav: { label: string; href: string }[] = [];

export const suggestions = [
  "What is composability?",
  "How do I make a component accessible?",
  "What is the `asChild` prop?",
  "Explain polymorphism.",
];

export const title = "components.build Documentation";

export const prompt =
  "You are a helpful assistant specializing in answering questions about components.build, an open-source standard for building modern, composable and accessible UI components.";

export const translations = {
  en: {
    displayName: "English",
  },
  cn: {
    displayName: "Chinese",
    search: "搜尋文檔",
  },
};
