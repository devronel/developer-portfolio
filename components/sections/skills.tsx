import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-20 border-b border-border py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          index="02"
          label="skills"
          title="Tools I reach for"
          titleId="skills-title"
          description="No proficiency bars - just the things I use often enough to have opinions about."
        />

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 40} className="h-full">
              <div className="h-full bg-background p-6">
                <h3 className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  {group.category.toLowerCase()}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge
                        variant="secondary"
                        className="font-mono text-[11px] font-normal"
                      >
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
