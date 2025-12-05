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
  da: {
    displayName: "Danish",
  },
  nl: {
    displayName: "Dutch",
  },
  fi: {
    displayName: "Finnish",
  },
  fr: {
    displayName: "French",
  },
  hu: {
    displayName: "Hungarian",
  },
  id: {
    displayName: "Indonesian",
  },
  ga: {
    displayName: "Irish",
  },
  it: {
    displayName: "Italian",
  },
  no: {
    displayName: "Norwegian",
  },
  pt: {
    displayName: "Portuguese",
  },
  ro: {
    displayName: "Romanian",
  },
  sr: {
    displayName: "Serbian",
  },
  sl: {
    displayName: "Slovenian",
  },
  es: {
    displayName: "Spanish",
  },
  sv: {
    displayName: "Swedish",
  },
  tr: {
    displayName: "Turkish",
  },
  de: {
    displayName: "German",
  },
  cn: {
    displayName: "Chinese (Mandarin)",
    search: "搜尋文檔",
  },
  jp: {
    displayName: "Japanese",
  },
};
