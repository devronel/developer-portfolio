import { ArrowRight, Download } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SocialLinks } from "@/components/site/social-links";
import { StatusPill } from "@/components/site/status-pill";
import { WindowFrame } from "@/components/site/window-frame";
import { hasResume, profile, skillGroups } from "@/data/portfolio";

const stackLine = skillGroups.map((group) => group.category.toLowerCase()).join("  ");

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />

      <Container className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <Reveal>
          <StatusPill />

          <p className="mt-6 font-mono text-xs text-muted-foreground sm:text-sm">
            <span className="text-primary">~/portfolio</span> $ whoami
          </p>

          <h1
            id="hero-title"
            className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </h1>

          <p className="mt-4 font-mono text-sm text-primary sm:text-base">
            {profile.role}
            <span className="text-muted-foreground"> · {profile.location}</span>
          </p>

          <p className="mt-6 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
            {profile.tagline}
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[1em] w-[0.55ch] translate-y-[0.12em] bg-primary motion-safe:animate-cursor-blink"
            />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" size="lg">
              View projects
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
            {hasResume && (
              <ButtonLink
                href={profile.resumeUrl}
                target="_blank"
                variant="outline"
                size="lg"
              >
                <Download aria-hidden="true" />
                Download CV
              </ButtonLink>
            )}
          </div>

          <SocialLinks className="mt-8 flex items-center gap-2" />
        </Reveal>

        <Reveal delay={80}>
          <WindowFrame title={`${profile.handle}@code — zsh`} meta="bash">
            <div className="space-y-3 font-mono text-xs leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <p>
                {profile.handle} — {profile.role.toLowerCase()}
              </p>

              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat status.txt
              </p>
              <p className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-primary"
                />
                {profile.availability.label}
              </p>

              <p className="text-muted-foreground">
                <span className="text-primary">$</span> ls skills/
              </p>
              <p className="text-muted-foreground">{stackLine}</p>

              <p className="text-muted-foreground">
                <span className="text-primary">$</span>
                <span
                  aria-hidden="true"
                  className="ml-1.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.12em] bg-primary motion-safe:animate-cursor-blink"
                />
              </p>
            </div>
          </WindowFrame>
        </Reveal>
      </Container>
    </section>
  );
}
