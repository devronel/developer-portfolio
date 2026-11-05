import { Check } from "lucide-react";

import {
  BulletList,
  Callout,
  CaseStudySection,
  Prose,
} from "@/components/case-study/case-study-primitives";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/data/case-study";
import { cn } from "cn";

interface SectionProps {
  study: CaseStudy;
  index: string;
}

export function OverviewSection({ study, index }: SectionProps) {
  if (!study.overview?.length) {
    return null;
  }

  return (
    <CaseStudySection
      id="overview"
      index={index}
      label="project overview"
      title="Project overview"
    >
      <Prose paragraphs={study.overview} className="max-w-3xl" />
    </CaseStudySection>
  );
}

export function BackgroundSection({ study, index }: SectionProps) {
  const background = study.background;
  const hasSummary = Boolean(background?.summary?.length);
  const hasProblem = Boolean(background?.problem);
  const hasConstraints = Boolean(background?.constraints?.length);

  if (!hasSummary && !hasProblem && !hasConstraints) {
    return null;
  }

  return (
    <CaseStudySection
      id="background"
      index={index}
      label="background"
      title="Background and problem"
    >
      <div
        className={cn(
          "grid gap-10",
          hasConstraints && "lg:grid-cols-[1.1fr_0.9fr]",
        )}
      >
        <div className="max-w-3xl">
          <Prose paragraphs={background?.summary ?? []} />

          {background?.problem ? (
            <Callout label="the problem" className="mt-6">
              <p>{background.problem}</p>
            </Callout>
          ) : null}
        </div>

        {hasConstraints ? (
          <div className="border border-border bg-card p-5">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">{"//"}</span> constraints
            </p>
            <BulletList items={background?.constraints ?? []} className="mt-4" />
          </div>
        ) : null}
      </div>
    </CaseStudySection>
  );
}

export function ObjectivesSection({ study, index }: SectionProps) {
  const objectives = study.objectives ?? [];

  if (objectives.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="objectives"
      index={index}
      label="objectives"
      title="What the project set out to do"
    >
      <ul
        className={cn(
          "grid gap-px border border-border bg-border",
          objectives.length > 1 && "sm:grid-cols-2",
        )}
      >
        {objectives.map((objective, objectiveIndex) => (
          <li key={objective.title} className="bg-background p-5">
            <p className="font-mono text-[11px] text-muted-foreground">
              {String(objectiveIndex + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-sm font-medium">{objective.title}</h3>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">
              {objective.description}
            </p>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

export function RoleSection({ study, index }: SectionProps) {
  const role = study.roleDetails;
  const hasIntro = Boolean(role?.summary?.length || role?.teamContext);
  const hasResponsibilities = Boolean(role?.responsibilities?.length);

  if (!hasIntro && !hasResponsibilities) {
    return null;
  }

  return (
    <CaseStudySection
      id="role"
      index={index}
      label="my role"
      title="My role and responsibilities"
    >
      <div
        className={cn(
          "grid gap-10",
          hasIntro && hasResponsibilities && "lg:grid-cols-[0.9fr_1.1fr]",
        )}
      >
        {hasIntro ? (
          <div>
            <Prose paragraphs={role?.summary ?? []} />

            {role?.teamContext ? (
              <Callout label="team context" className="mt-6">
                <p>{role.teamContext}</p>
              </Callout>
            ) : null}
          </div>
        ) : null}

        {hasResponsibilities ? (
          <ul
            className={cn(
              "grid gap-px border border-border bg-border",
              (role?.responsibilities?.length ?? 0) > 1 && "sm:grid-cols-2",
            )}
          >
            {(role?.responsibilities ?? []).map((responsibility) => (
              <li key={responsibility.title} className="bg-background p-5">
                <h3 className="text-sm font-medium">{responsibility.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">
                  {responsibility.description}
                </p>

                {responsibility.contributions?.length ? (
                  <ul className="mt-3 space-y-1.5">
                    {responsibility.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-2 text-xs text-muted-foreground"
                      >
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 size-3.5 shrink-0 text-primary"
                        />
                        <span className="text-pretty">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </CaseStudySection>
  );
}

export function TechnologiesSection({ study, index }: SectionProps) {
  const technologies = study.technologies ?? [];

  if (technologies.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="technologies"
      index={index}
      label="technologies and tools"
      title="Technologies and tools"
      description="The stack used on the project, and what each part was responsible for."
    >
      <ul
        className={cn(
          "grid gap-px border border-border bg-border",
          technologies.length > 1 && "sm:grid-cols-2",
          technologies.length > 2 && "lg:grid-cols-3",
        )}
      >
        {technologies.map((technology, technologyIndex) => (
          <li key={technology.name} className="bg-background p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-mono text-[11px] text-muted-foreground">
                {String(technologyIndex + 1).padStart(2, "0")}
              </p>
              {technology.category ? (
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] font-normal text-muted-foreground"
                >
                  {technology.category}
                </Badge>
              ) : null}
            </div>
            <h3 className="mt-3 text-sm font-medium">{technology.name}</h3>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">
              {technology.purpose}
            </p>
          </li>
        ))}
      </ul>

      {study.technologiesNote ? (
        <Callout label="note" className="mt-6">
          <p>{study.technologiesNote}</p>
        </Callout>
      ) : null}
    </CaseStudySection>
  );
}
