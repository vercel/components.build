import Image from "next/image";

export const Hero = () => (
  <div className="container mx-auto">
    <h1 className="font-semibold text-6xl tracking-tighter">
      Build the modern web
    </h1>
    <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground text-xl">
      components.build is an open-source standard for building modern,
      composable and accessible UI components.
    </p>
    <div className="mt-8 flex items-center justify-center gap-1.5 text-muted-foreground">
      <p>Authored by</p>
      <Image
        alt="haydenbleasel"
        className="inline-flex overflow-hidden rounded-full"
        height={20}
        src="https://github.com/haydenbleasel.png"
        unoptimized
        width={20}
      />{" "}
      <a
        className="font-medium text-primary"
        href="https://x.com/haydenbleasel"
        rel="noopener noreferrer"
        target="_blank"
      >
        Hayden Bleasel
      </a>{" "}
      <p>and</p>
      <Image
        alt="shadcn"
        className="inline-flex overflow-hidden rounded-full"
        height={20}
        src="https://github.com/shadcn.png"
        unoptimized
        width={20}
      />{" "}
      <a
        className="font-medium text-primary"
        href="https://x.com/shadcn"
        rel="noopener noreferrer"
        target="_blank"
      >
        shadcn
      </a>{" "}
    </div>
    <p className="text-muted-foreground">
      with contributions from the community.
    </p>
  </div>
);
