import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Globe,
  Info,
  Lock,
} from "lucide-react";

import {
  Callout,
  FactList,
  TagList,
  type CaseStudyFact,
} from "@/components/case-study/case-study-primitives";
import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { WindowFrame } from "@/components/site/window-frame";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy, CaseStudyLink } from "@/data/case-study";
import { cn } from "cn";

interface CaseStudyHeaderProps {
  study: CaseStudy;
}

function getFacts(study: CaseStudy): CaseStudyFact[] {
  const facts: Array<CaseStudyFact | null> = [
    study.category ? { label: "category", value: study.category } : null,
    study.period ? { label: "period", value: study.period } : null,
    study.role ? { label: "role", value: study.role } : null,
    study.team ? { label: "team", value: study.team } : null,
    study.status ? { label: "status", value: study.status } : null,
  ];

  return facts.filter((fact): fact is CaseStudyFact => fact !== null);
}

function LinkIcon({ kind }: { kind: CaseStudyLink["kind"] }) {
  if (kind === "source") {
    return <FolderGit2 aria-hidden="true" />;
  }

  if (kind === "website") {
    return <Globe aria-hidden="true" />;
  }

  if (kind === "other") {
    return <ArrowUpRight aria-hidden="true" />;
  }

  return <ExternalLink aria-hidden="true" />;
}

export function CaseStudyHeader({ study }: CaseStudyHeaderProps) {
  const back = study.navigation?.back ?? {
    label: "projects",
    href: "/#projects",
  };
  const facts = getFacts(study);
  const hasStack = Boolean(study.technologies?.length);
  const hasRightPanel = facts.length > 0 || hasStack;
  const links = study.links ?? [];

  return (
    <section
      id="top"
      aria-labelledby="case-study-title"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />

      <Container
        className={cn(
          "relative grid gap-12 py-16 md:py-24 lg:items-start lg:gap-16",
          hasRightPanel && "lg:grid-cols-[1.1fr_0.9fr]",
        )}
      >
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="font-mono text-xs text-muted-foreground"
          >
            <Link
              href={back.href}
              className="transition-colors hover:text-foreground"
            >
              {back.label}
            </Link>
            <span aria-hidden="true" className="mx-1.5 text-muted-foreground/50">
              /
            </span>
            <span aria-current="page">{study.slug}</span>
          </nav>

          <p className="mt-8 font-mono text-xs text-muted-foreground sm:text-sm">
            <span className="text-primary">{"//"}</span> case study ·{" "}
            {study.category.toLowerCase()}
          </p>

          <h1
            id="case-study-title"
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {study.title}
          </h1>

          <p className="mt-5 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
            {study.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {study.role ? (
              <li>
                <Badge variant="secondary" className="font-mono text-[11px]">
                  {study.role}
                </Badge>
              </li>
            ) : null}
            <li>
              <Badge variant="outline" className="font-mono text-[11px]">
                {study.category}
              </Badge>
            </li>
            {study.confidential ? (
              <li>
                <Badge variant="outline" className="font-mono text-[11px]">
                  <Lock aria-hidden="true" />
                  Confidential
                </Badge>
              </li>
            ) : null}
          </ul>

          {study.notice ? (
            <Callout
              label={study.confidential ? "confidential" : "note"}
              icon={study.confidential ? Lock : Info}
              className="mt-6 max-w-xl"
            >
              <p>{study.notice}</p>
            </Callout>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={back.href} variant="outline" size="sm">
              <ArrowLeft aria-hidden="true" />
              Back to {back.label}
            </ButtonLink>

            {links.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <ButtonLink
                  key={`${link.kind ?? "link"}-${link.href}`}
                  href={link.href}
                  variant={link.kind === "live" ? "default" : "outline"}
                  size="sm"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <LinkIcon kind={link.kind} />
                  {link.label}
                </ButtonLink>
              );
            })}
          </div>
        </Reveal>

        {hasRightPanel ? (
          <Reveal delay={80}>
            <WindowFrame title={`${study.slug}/README.md`} meta="case study">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span> cat project.md
              </p>

              {facts.length > 0 ? (
                <FactList items={facts} className="mt-4" />
              ) : null}

              {hasStack ? (
                <div className="mt-4">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    stack
                  </p>
                  <TagList
                    items={(study.technologies ?? []).map(
                      (technology) => technology.name,
                    )}
                    className="mt-2"
                  />
                </div>
              ) : null}
            </WindowFrame>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
