import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { FeaturedProjectCard, ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { projects, socials } from "@/data/portfolio";

const githubUrl = socials.find((link) => link.icon === "github")?.href;

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 border-b border-border py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          index="03"
          label="projects"
          title="Things I've built"
          titleId="projects-title"
          description="What it is, why it matters, how it's built. Ask me about any of them - I'd rather talk through the trade-offs than the feature list."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <Reveal key={project.slug} className="md:col-span-2">
              <FeaturedProjectCard project={project} />
            </Reveal>
          ))}

          {rest.map((project, index) => (
            <Reveal key={project.slug} delay={index * 40} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {githubUrl ? (
            <div className="mt-8">
              <ButtonLink
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="sm"
                className="font-mono text-xs"
              >
                GitHub Repositories
                <ArrowUpRight aria-hidden="true" />
              </ButtonLink>
            </div>
          ) : null}
          <div className="mt-8">
            <ButtonLink
              href={"https://www.frontendmentor.io/profile/devronel?tab=solutions"}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
              className="font-mono text-xs"
            >
              Frontend Mentor Solutions
              <ArrowUpRight aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
