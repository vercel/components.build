import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AuthorNoteProps = {
  name: string;
  role: string;
  githubUsername: string;
  children: ReactNode;
};

export const AuthorNote = ({
  name,
  role,
  githubUsername,
  children,
}: AuthorNoteProps) => (
  <aside
    aria-label="Author's Note"
    className="not-prose my-8 flex flex-col gap-4 border-l-3 p-4 pl-6"
  >
    <blockquote className="mb-2 italic [&_a]:underline">{children}</blockquote>
    <div className="mt-2 flex items-center gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage
          alt={name}
          src={`https://github.com/${githubUsername}.png`}
        />
        <AvatarFallback>{name.toUpperCase().slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-muted-foreground text-sm">{role}</div>
      </div>
    </div>
  </aside>
);
