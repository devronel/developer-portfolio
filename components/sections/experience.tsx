import { MapPin } from "lucide-react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20 border-b border-border py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          index="04"
          label="experience"
          title="Where I've worked"
          titleId="experience-title"
          description="My professional experience building and maintaining web applications."
        />

        <p className="mb-8 font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> git log --oneline --career
        </p>

        <ol className="border-l border-border pl-6">
          {experience.map((entry, index) => (
            <li
              key={entry.hash}
              className={
                index === experience.length - 1 ? "relative" : "relative pb-10"
              }
            >
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-7 size-2 rounded-full bg-primary ring-4 ring-background"
              />

              <Reveal>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span className="text-primary">{entry.hash}</span>
                  <span className="text-muted-foreground">{entry.period}</span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <MapPin aria-hidden="true" className="size-3" />
                    {entry.location}
                  </span>
                </div>

                <h3 className="mt-2 text-base font-medium tracking-tight">
                  {entry.role}
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    @ {entry.company}
                  </span>
                </h3>

                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden="true" className="text-primary">
                        –
                      </span>
                      <span className="text-pretty">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
