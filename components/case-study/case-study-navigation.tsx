import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { CaseStudySection } from "@/components/case-study/case-study-primitives";
import { ButtonLink } from "@/components/site/button-link";
import type { CaseStudy, CaseStudyNavigationItem } from "@/data/case-study";
import { cn } from "cn";

interface SectionProps {
  study: CaseStudy;
  index: string;
}

interface NavigationCardProps {
  direction: "previous" | "next";
  item: CaseStudyNavigationItem;
}

function NavigationCard({ direction, item }: NavigationCardProps) {
  const isNext = direction === "next";

  return (
    <Link
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className={cn(
        "group flex h-full flex-col border border-border bg-card p-5 transition-colors hover:border-primary/40",
        isNext && "sm:items-end sm:text-right",
      )}
    >
      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
        {!isNext ? (
          <ArrowLeft aria-hidden="true" className="size-3" />
        ) : null}
        {direction}
        {isNext ? <ArrowRight aria-hidden="true" className="size-3" /> : null}
      </span>

      <span className="mt-2 text-sm font-medium">{item.title}</span>

      {item.description ? (
        <span className="mt-2 text-sm text-pretty text-muted-foreground">
          {item.description}
        </span>
      ) : null}
    </Link>
  );
}

export function NavigationSection({ study, index }: SectionProps) {
  const navigation = study.navigation;
  const hasBack = Boolean(navigation?.back);
  const hasPrevious = Boolean(navigation?.previous);
  const hasNext = Boolean(navigation?.next);
  const hasRelated = Boolean(navigation?.related?.length);

  if (!hasBack && !hasPrevious && !hasNext && !hasRelated) {
    return null;
  }

  return (
    <CaseStudySection
      id="navigation"
      index={index}
      label="navigation"
      title="Keep exploring"
    >
      <div className="space-y-8">
        {navigation?.back ? (
          <div>
            <ButtonLink
              href={navigation.back.href}
              variant="outline"
              size="sm"
            >
              <ArrowLeft aria-hidden="true" />
              Back to {navigation.back.label}
            </ButtonLink>
          </div>
        ) : null}

        {hasPrevious || hasNext ? (
          <div
            className={cn(
              "grid gap-4",
              hasPrevious && hasNext && "sm:grid-cols-2",
            )}
          >
            {navigation?.previous ? (
              <NavigationCard
                direction="previous"
                item={navigation.previous}
              />
            ) : null}

            {navigation?.next ? (
              <NavigationCard direction="next" item={navigation.next} />
            ) : null}
          </div>
        ) : null}

        {navigation?.related?.length ? (
          <div>
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">{"//"}</span> related projects
            </p>

            <ul
              className={cn(
                "mt-4 grid gap-4",
                (navigation.related?.length ?? 0) > 1 && "sm:grid-cols-2",
              )}
            >
              {navigation.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group flex h-full flex-col border border-border bg-card p-5 transition-colors hover:border-primary/40"
                  >
                    {item.label ? (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {item.label}
                      </span>
                    ) : null}

                    <span className="mt-2 flex items-center justify-between gap-4 text-sm font-medium">
                      {item.title}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      />
                    </span>

                    {item.description ? (
                      <span className="mt-2 text-sm text-pretty text-muted-foreground">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </CaseStudySection>
  );
}
