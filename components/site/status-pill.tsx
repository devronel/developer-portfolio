import { cn } from "cn";

import { profile } from "@/data/portfolio";

/** Green pulse + mono label; hidden when `profile.availability.open` is false. */
export function StatusPill({ className }: { className?: string }) {
  if (!profile.availability.open) return null;

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 border border-border bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden="true" className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
      </span>
      {profile.availability.label}
    </p>
  );
}
