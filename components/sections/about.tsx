import { MapPin } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WindowFrame } from "@/components/site/window-frame";
import { profile } from "@/data/portfolio";

interface CodeEntry {
  key: string;
  value: string;
  /** Booleans render in the accent colour. */
  accent?: boolean;
}

const codeEntries: CodeEntry[] = [
  { key: "name", value: JSON.stringify(profile.name) },
  { key: "role", value: JSON.stringify(profile.role) },
  { key: "location", value: JSON.stringify(profile.location) },
  {
    key: "stack",
    value: `[${profile.stack.map((item) => JSON.stringify(item)).join(", ")}]`,
  },
  {
    key: "openToWork",
    value: String(profile.availability.open),
    accent: true,
  },
];

function Facts({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="mt-8 divide-y divide-border border-y border-border">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline justify-between gap-4 py-3"
        >
          <dt className="font-mono text-xs text-muted-foreground">
            {item.label}
          </dt>
          <dd className="text-right text-sm">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-b border-border py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          index="01"
          label="about"
          title="Software Developer"
          titleId="about-title"
          description="I enjoy solving problems, building useful applications, and learning new ways to become a better developer."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-sm text-pretty text-muted-foreground sm:text-base">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <Facts
              items={[
                {
                  label: "based in",
                  value: (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin
                        aria-hidden="true"
                        className="size-3.5 text-muted-foreground"
                      />
                      {profile.location}
                    </span>
                  ),
                },
                { label: "role", value: profile.role },
                {
                  label: "status",
                  value: profile.availability.open ? (
                    <span className="text-primary">
                      {profile.availability.label}
                    </span>
                  ) : (
                    "Not looking right now"
                  ),
                },
              ]}
            />
          </Reveal>

          <Reveal delay={80}>
            <WindowFrame title="dev.ts" meta="TypeScript">
              <pre aria-hidden="true" className="overflow-x-auto font-mono text-[11px] leading-relaxed sm:text-xs">
                <code>
                  <span className="text-primary">const</span> dev = {"{"}
                  {"\n"}
                  {codeEntries.map((entry, index) => (
                    <span key={entry.key}>
                      {"  "}
                      <span className="text-muted-foreground">{entry.key}</span>
                      <span className="text-muted-foreground/60">: </span>
                      <span className={entry.accent ? "text-primary" : ""}>
                        {entry.value}
                      </span>
                      {index < codeEntries.length - 1 ? "," : ""}
                      {"\n"}
                    </span>
                  ))}
                  {"}"} <span className="text-primary">as const</span>;
                </code>
              </pre>

              <p className="sr-only">
                Name: {profile.name}. Role: {profile.role}. Location:{" "}
                {profile.location}. Stack: {profile.stack.join(", ")}.{" "}
                {profile.availability.open
                  ? profile.availability.label
                  : "Not currently looking."}
              </p>
            </WindowFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
