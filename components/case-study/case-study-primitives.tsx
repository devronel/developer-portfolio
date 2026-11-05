import Image from "next/image";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { WindowFrame } from "@/components/site/window-frame";
import { Badge } from "@/components/ui/badge";
import type { CaseStudyImage } from "@/data/case-study";
import { cn } from "cn";

/* -------------------------------------------------------------------------- */
/* Section shell                                                              */
/* -------------------------------------------------------------------------- */

interface CaseStudySectionProps {
  /** Used for the section id and the heading's `aria-labelledby`. */
  id: string;
  /** Two-digit index assigned by the page after empty sections are removed. */
  index: string;
  label: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function CaseStudySection({
  id,
  index,
  label,
  title,
  description,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-20 py-20 md:py-28", className)}
    >
      <Container>
        <SectionHeading
          index={index}
          label={label}
          title={title}
          titleId={`${id}-title`}
          description={description}
        />
        {children}
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Text and lists                                                             */
/* -------------------------------------------------------------------------- */

interface ProseProps {
  paragraphs: string[];
  className?: string;
}

export function Prose({ paragraphs, className }: ProseProps) {
  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "space-y-4 text-sm text-pretty text-muted-foreground sm:text-base",
        className,
      )}
    >
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
          <span
            aria-hidden="true"
            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
          />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface CheckListProps {
  items: string[];
  className?: string;
}

export function CheckList({ items, className }: CheckListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn("grid gap-2 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
          <Check
            aria-hidden="true"
            className="mt-0.5 size-3.5 shrink-0 text-primary"
          />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface CalloutProps {
  label: string;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export function Callout({ label, children, icon: Icon, className }: CalloutProps) {
  return (
    <div className={cn("border-l-2 border-primary/40 pl-4", className)}>
      <p className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
        {Icon ? <Icon aria-hidden="true" className="size-3 text-primary" /> : null}
        {label}
      </p>
      <div className="mt-1 text-sm text-pretty text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Badges and facts                                                           */
/* -------------------------------------------------------------------------- */

interface TagListProps {
  items: string[];
  variant?: "secondary" | "outline";
  className?: string;
  badgeClassName?: string;
}

export function TagList({
  items,
  variant = "outline",
  className,
  badgeClassName,
}: TagListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item}>
          <Badge
            variant={variant}
            className={cn(
              "font-mono text-[10px] font-normal text-muted-foreground",
              badgeClassName,
            )}
          >
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export interface CaseStudyFact {
  label: string;
  value: string;
}

interface FactListProps {
  items: CaseStudyFact[];
  className?: string;
}

export function FactList({ items, className }: FactListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <dl className={cn("divide-y divide-border border-y border-border", className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-[5.5rem_1fr] gap-3 py-2"
        >
          <dt className="font-mono text-[11px] text-muted-foreground">
            {item.label}
          </dt>
          <dd className="text-xs text-pretty">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* -------------------------------------------------------------------------- */
/* Code and media                                                             */
/* -------------------------------------------------------------------------- */

interface CodeBlockProps {
  content: string;
  filename?: string;
  language?: string;
}

export function CodeBlock({
  content,
  filename = "snippet",
  language,
}: CodeBlockProps) {
  return (
    <WindowFrame
      title={filename}
      meta={language}
      contentClassName="p-0"
    >
      <pre
        tabIndex={0}
        aria-label={`Code snippet: ${filename}`}
        className="overflow-x-auto p-4 font-mono text-xs leading-relaxed"
      >
        <code>{content}</code>
      </pre>
    </WindowFrame>
  );
}

interface CaseStudyFigureProps {
  image: CaseStudyImage;
  sizes?: string;
  className?: string;
}

export function CaseStudyFigure({
  image,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className,
}: CaseStudyFigureProps) {
  return (
    <figure className={cn("min-w-0", className)}>
      <WindowFrame
        title={image.filename ?? "screenshot"}
        meta={image.caption ? "figure" : undefined}
        contentClassName="p-0"
      >
        <div className="relative aspect-video bg-muted/30">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className={cn(
              "object-cover",
              image.fit === "contain" && "object-contain",
            )}
          />
        </div>
      </WindowFrame>

      {image.caption ? (
        <figcaption className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
