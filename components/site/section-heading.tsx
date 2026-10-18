import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Two-digit index, e.g. "01". */
  index: string;
  label: string;
  /** Rendered as the section's `h2`; use the same text as `titleId`. */
  title: string;
  /** Id applied to the heading so the section can use `aria-labelledby`. */
  titleId: string;
  description?: ReactNode;
}

export function SectionHeading({
  index,
  label,
  title,
  titleId,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">{"//"}</span> {index}. {label}
      </p>
      <h2
        id={titleId}
        className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm text-pretty text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
