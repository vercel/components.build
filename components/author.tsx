import Image from "next/image";

type AuthorProps = {
  name: string;
  image: string;
  href: string;
};

export const Author = (props: AuthorProps) => (
  <span className="inline-flex items-center gap-1.5 align-bottom">
    <Image
      alt={props.name}
      className="my-0! inline-flex overflow-hidden rounded-full"
      height={20}
      src={props.image}
      unoptimized
      width={20}
    />
    <a
      className="font-medium text-primary"
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.name}
    </a>
  </span>
);
