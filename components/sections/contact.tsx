import { Download, Mail } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { CopyEmailButton } from "@/components/site/copy-email-button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { SocialLinks } from "@/components/site/social-links";
import { StatusPill } from "@/components/site/status-pill";
import { hasResume, profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          index="05"
          label="contact"
          title="Let's build something"
          titleId="contact-title"
        />

        <div className="grid gap-10 border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="max-w-lg text-sm text-pretty text-muted-foreground sm:text-base">
              I&apos;m open to full-time roles and selective freelance work. If you
              have a project that needs someone who can own it from schema to
              interface, send me a note - I read everything and reply within a
              couple of days.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CopyEmailButton email={profile.email} />
              {hasResume && (
                <ButtonLink
                  href={profile.resumeUrl}
                  download
                  variant="outline"
                  size="lg"
                >
                  <Download aria-hidden="true" />
                  <span className="font-mono text-xs">Download CV</span>
                </ButtonLink>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <SocialLinks className="flex items-center gap-2" />
              <StatusPill />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-border bg-background p-5 font-mono text-xs leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> contact --email
              </p>
              <p className="mt-2 break-all">
                <Mail
                  aria-hidden="true"
                  className="mr-2 inline size-3.5 text-muted-foreground"
                />
                {profile.email}
              </p>
              <p className="mt-4 text-muted-foreground">
                <span className="text-primary">$</span> echo $TIMEZONE
              </p>
              <p className="mt-2">{profile.location}</p>
              <p className="mt-4 text-muted-foreground">
                <span className="text-primary">$</span> response_time
              </p>
              <p className="mt-2">&lt; 2 business days</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
