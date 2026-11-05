import {
  CaseStudyFigure,
  CaseStudySection,
  CheckList,
  CodeBlock,
  Prose,
} from "@/components/case-study/case-study-primitives";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/data/case-study";
import { cn } from "cn";

interface SectionProps {
  study: CaseStudy;
  index: string;
}

export function FeaturesSection({ study, index }: SectionProps) {
  const features = study.features ?? [];

  if (features.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="features"
      index={index}
      label="key features"
      title="Key features and implementations"
      description="The parts of the project that best show how it works and how it was built."
    >
      <div className="space-y-4">
        {features.map((feature, featureIndex) => (
          <Reveal
            key={feature.title}
            delay={Math.min(featureIndex * 40, 120)}
          >
            <article className="border border-border bg-card">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border px-5 py-3">
                <span className="font-mono text-[11px] text-primary">
                  {String(featureIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-medium">{feature.title}</h3>
                {feature.kind ? (
                  <Badge
                    variant="outline"
                    className="ml-auto font-mono text-[10px] font-normal text-muted-foreground"
                  >
                    {feature.kind}
                  </Badge>
                ) : null}
              </div>

              <div className="space-y-5 p-5 md:p-6">
                <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                  {feature.summary}
                </p>

                {feature.details?.length ? (
                  <Prose paragraphs={feature.details} />
                ) : null}

                {feature.implementation?.length ? (
                  <div>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      <span className="text-primary">{"//"}</span> implementation
                      notes
                    </p>
                    <CheckList
                      items={feature.implementation}
                      className="mt-3"
                    />
                  </div>
                ) : null}

                {feature.image ? (
                  <CaseStudyFigure
                    image={feature.image}
                    sizes="(min-width: 768px) 768px, 100vw"
                  />
                ) : null}

                {feature.code ? (
                  <CodeBlock
                    content={feature.code.content}
                    filename={feature.code.filename}
                    language={feature.code.language}
                  />
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </CaseStudySection>
  );
}

export function ProcessSection({ study, index }: SectionProps) {
  const process = study.process;
  const summary = process?.summary ?? [];
  const steps = process?.steps ?? [];

  if (summary.length === 0 && steps.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="process"
      index={index}
      label="development process"
      title="How the project was built"
    >
      <Prose paragraphs={summary} className="max-w-3xl" />

      {steps.length > 0 ? (
        <ol
          className={cn(
            "border-l border-border pl-6",
            summary.length > 0 && "mt-10",
          )}
        >
          {steps.map((step, stepIndex) => (
            <li
              key={step.title}
              className={cn(
                "relative",
                stepIndex !== steps.length - 1 && "pb-10",
              )}
            >
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-7 size-2 rounded-full bg-primary ring-4 ring-background"
              />

              <Reveal>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span className="text-primary">
                    {String(stepIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground">step</span>
                </div>

                <h3 className="mt-2 text-base font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground sm:text-base">
                  {step.description}
                </p>

                {step.details?.length ? (
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span aria-hidden="true" className="text-primary">
                          –
                        </span>
                        <span className="text-pretty">{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      ) : null}
    </CaseStudySection>
  );
}

export function ChallengesSection({ study, index }: SectionProps) {
  const challenges = study.challenges ?? [];

  if (challenges.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="challenges"
      index={index}
      label="challenges and solutions"
      title="Technical challenges and solutions"
      description="The problems that took the most thought, what caused them, and how they were resolved."
    >
      <div className="space-y-4">
        {challenges.map((challenge, challengeIndex) => (
          <Reveal
            key={challenge.title}
            delay={Math.min(challengeIndex * 40, 120)}
          >
            <article className="border border-border bg-card">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border px-5 py-3">
                <span className="font-mono text-[11px] text-primary">
                  {String(challengeIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-medium">{challenge.title}</h3>
              </div>

              <div className="grid gap-px bg-border sm:grid-cols-2">
                <div className="bg-card p-5">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    problem
                  </p>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">
                    {challenge.problem}
                  </p>
                </div>

                <div className="bg-card p-5">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    why it happened
                  </p>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">
                    {challenge.cause}
                  </p>
                </div>

                <div className="bg-card p-5">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    solution
                  </p>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">
                    {challenge.solution}
                  </p>
                </div>

                <div className="bg-card p-5">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    result
                  </p>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">
                    {challenge.result}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </CaseStudySection>
  );
}

export function DecisionsSection({ study, index }: SectionProps) {
  const decisions = study.decisions ?? [];

  if (decisions.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="decisions"
      index={index}
      label="technical decisions"
      title="Technical decisions and tradeoffs"
    >
      <div
        className={cn(
          "grid gap-4",
          decisions.length > 1 && "md:grid-cols-2",
        )}
      >
        {decisions.map((decision, decisionIndex) => (
          <Reveal
            key={decision.title}
            delay={Math.min(decisionIndex * 40, 120)}
            className="h-full"
          >
            <article className="flex h-full flex-col border border-border bg-card p-5">
              <p className="font-mono text-[11px] text-muted-foreground">
                {String(decisionIndex + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-sm font-medium">{decision.title}</h3>

              <div className="mt-4 border-l-2 border-primary/40 pl-4">
                <p className="font-mono text-[11px] text-muted-foreground">
                  decision
                </p>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">
                  {decision.decision}
                </p>
              </div>

              <div className="mt-4">
                <p className="font-mono text-[11px] text-muted-foreground">
                  why
                </p>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">
                  {decision.rationale}
                </p>
              </div>

              {decision.alternatives || decision.tradeoffs ? (
                <dl className="mt-4 space-y-3 border-t border-border pt-4">
                  {decision.alternatives ? (
                    <div>
                      <dt className="font-mono text-[11px] text-muted-foreground">
                        alternatives considered
                      </dt>
                      <dd className="mt-1 text-sm text-pretty text-muted-foreground">
                        {decision.alternatives}
                      </dd>
                    </div>
                  ) : null}

                  {decision.tradeoffs ? (
                    <div>
                      <dt className="font-mono text-[11px] text-muted-foreground">
                        tradeoffs
                      </dt>
                      <dd className="mt-1 text-sm text-pretty text-muted-foreground">
                        {decision.tradeoffs}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </CaseStudySection>
  );
}
