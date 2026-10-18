import { cn } from "cn";
import type { ReactNode } from "react";

interface WindowFrameProps {
  /** File name or path shown in the title bar. */
  title: string;
  children: ReactNode;
  /** Optional right-aligned label in the title bar. */
  meta?: ReactNode;
  className?: string;
  contentClassName?: string;
}

/** Plain editor-window chrome — three dots, a file name, and a bordered body. */
export function WindowFrame({
  title,
  children,
  meta,
  className,
  contentClassName,
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-2">
        <span aria-hidden="true" className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-primary/60" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
        </span>
        <span className="ml-1 truncate font-mono text-[11px] text-muted-foreground">
          {title}
        </span>
        {meta ? (
          <span className="ml-auto shrink-0 font-mono text-[11px] text-muted-foreground">
            {meta}
          </span>
        ) : null}
      </div>
      <div className={cn("p-4", contentClassName)}>{children}</div>
    </div>
  );
}
