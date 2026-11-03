import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  CreditCard,
  Database,
  KeyRound,
  Plus,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { WindowFrame } from "@/components/site/window-frame";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Realholmes Property Platform — Case Study",
  description:
    "A case study of my backend contributions to the Realholmes Property Platform, a team-built real estate application using the TALL stack.",
  alternates: { canonical: "/case-study" },
  openGraph: {
    type: "article",
    title: "Realholmes Property Platform — Case Study",
    description:
      "A case study of my backend contributions to the Realholmes Property Platform, a team-built real estate application using the TALL stack.",
    url: "/case-study",
  },
};

const projectFacts = [
  { label: "type", value: "Professional experience · Team project" },
  { label: "role", value: "Full Stack Developer" },
  { label: "focus", value: "Backend" },
  { label: "company", value: "Realholmes Property Inc." },
  { label: "period", value: "2025 — 2026" },
  { label: "location", value: "Muntinlupa City, PH · Onsite" }
];

const responsibilities = [
  {
    icon: Plus,
    title: "New features",
    description: "Building backend functionality for new parts of the platform.",
  },
  {
    icon: Bug,
    title: "Bug fixes",
    description: "Tracing errors and resolving issues in existing code.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Keeping current features working as the application changed.",
  },
  {
    icon: Database,
    title: "Improvements",
    description: "Refining existing backend logic and database queries.",
  },
];

const stack = [
  {
    name: "Laravel",
    description: "PHP framework behind the application backend.",
  },
  {
    name: "Livewire",
    description: "Server-driven UI layer used together with Laravel.",
  },
  {
    name: "Alpine.js",
    description: "Lightweight JavaScript for interface interactions.",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS used to build the interface.",
  }
];

const authFeatures = [
  "Sign in with an email address and password.",
  "Sign in with Google or Facebook.",
  "Add a password to an account originally created through social login.",
  "Use either social login or email and password to reach the same account.",
];

const challenges = [
  "Understanding an existing codebase and how the different features connected.",
  "Fixing issues without breaking related functionality.",
  "Keeping backend changes aligned with the frontend handled by another developer.",
  "Working carefully around login and account flows that existing users relied on.",
];

const learnings = [
  "Reading and changing code that someone else wrote.",
  "Testing changes against existing features, not just the new case.",
  "Communicating backend changes clearly to the frontend developer.",
  "Getting more comfortable with Laravel and the rest of the TALL stack.",
];

function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 border border-dashed border-border bg-muted/30 px-3 py-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
          <span
            aria-hidden="true"
            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
          />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RealHolmesPropertyCaseStudy() {
  return (
    <>
      <section
        id="top"
        aria-labelledby="case-study-title"
        className="relative overflow-hidden border-b border-border"
      >
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_top,black,transparent_72%)]"
        />

        <Container className="relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="font-mono text-xs text-muted-foreground"
            >
              <Link
                href="/#projects"
                className="transition-colors hover:text-foreground"
              >
                projects
              </Link>
              <span aria-hidden="true" className="mx-1.5 text-muted-foreground/50">
                /
              </span>
              <span aria-current="page">realholmes</span>
            </nav>

            <p className="mt-8 font-mono text-xs text-muted-foreground sm:text-sm">
              <span className="text-primary">{"//"}</span> case study ·
              professional experience
            </p>

            <h1
              id="case-study-title"
              className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Realholmes Property Platform
            </h1>

            <p className="mt-5 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
              A real estate platform I helped build and maintain as a full stack
              developer, with a focus on backend features, bug fixes, and
              day-to-day maintenance.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              <li>
                <Badge variant="secondary" className="font-mono text-[11px]">
                  Full Stack Developer
                </Badge>
              </li>
              <li>
                <Badge variant="outline" className="font-mono text-[11px]">
                  Team project
                </Badge>
              </li>
              <li>
                <Badge variant="outline" className="font-mono text-[11px]">
                  Backend focus
                </Badge>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/#projects" variant="outline" size="sm">
                <ArrowLeft aria-hidden="true" />
                Back to projects
              </ButtonLink>
              <ButtonLink href="/#experience" variant="ghost" size="sm">
                View experience
                <ArrowUpRight aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <WindowFrame title="realholmes/README.md" meta="case study">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary">$</span> cat project.md
              </p>

              <dl className="mt-4 divide-y divide-border border-y border-border">
                {projectFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[5.5rem_1fr] gap-3 py-2"
                  >
                    <dt className="font-mono text-[11px] text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="text-xs text-pretty">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4">
                <p className="font-mono text-[11px] text-muted-foreground">
                  stack
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {stack.map((item) => (
                    <li key={item.name}>
                      <Badge
                        variant="outline"
                        className="font-mono text-[10px] font-normal text-muted-foreground"
                      >
                        {item.name}
                      </Badge>
                    </li>
                  ))}
                  <li>
                    <Badge
                      variant="outline"
                      className="font-mono text-[10px] font-normal text-muted-foreground"
                    >
                      MySql
                    </Badge>
                  </li>
                </ul>
              </div>
            </WindowFrame>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="overview-title"
        className="scroll-mt-20 border-b border-border py-20 md:py-28"
      >
        <Container>
          <SectionHeading
            index="01"
            label="project overview"
            title="A team-built real estate platform"
            titleId="overview-title"
          />

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="space-y-5 text-sm text-pretty text-muted-foreground sm:text-base">
                <p>
                  Realholmes is a real estate platform built and maintained by a
                  team at Realholmes Property Inc. My work focused on the
                  backend: adding new features, fixing bugs, and keeping
                  existing parts of the application running as it changed.
                </p>
                <p>
                  This was a shared codebase. Another developer handled the
                  frontend, while I worked on server-side logic and the data
                  behind the application. We both contributed to the same
                  product, and this page covers only the areas I worked on.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-primary/40 pl-4">
                <p className="font-mono text-[11px] text-muted-foreground">
                  note
                </p>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">
                  This page does not include company-confidential information,
                  private source code, or screenshots.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="border border-border bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">{"//"}</span> context
                </p>

                <dl className="mt-4 divide-y divide-border border-y border-border">
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3">
                    <dt className="font-mono text-[11px] text-muted-foreground">
                      product
                    </dt>
                    <dd className="text-xs">Real estate platform</dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3">
                    <dt className="font-mono text-[11px] text-muted-foreground">
                      users
                    </dt>
                    <dd className="text-xs text-pretty text-muted-foreground">
                      <span className="font-mono text-primary">
                        Real estate agents, property buyers, and prospective renters and developers.
                      </span>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3">
                    <dt className="font-mono text-[11px] text-muted-foreground">
                      problem
                    </dt>
                    <dd className="text-xs text-pretty text-muted-foreground">
                      <span className="font-mono text-primary">
                        Provides a platform where real estate agents can list and manage properties, while helping potential buyers and renters discover available properties. It also allows agents to expand their property listings through subscription plans.
                      </span>
                    </dd>
                  </div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3">
                    <dt className="font-mono text-[11px] text-muted-foreground">
                      my focus
                    </dt>
                    <dd className="text-xs text-pretty">
                      Backend features, fixes, and maintenance
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="role-title"
        className="scroll-mt-20 border-b border-border py-20 md:py-28"
      >
        <Container>
          <SectionHeading
            index="02"
            label="my role"
            title="Backend work inside a shared codebase"
            titleId="role-title"
          />

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="space-y-5 text-sm text-pretty text-muted-foreground sm:text-base">
                <p>
                  I worked as a Full Stack Developer, with most of my time spent
                  on the backend. The platform was a team effort: another
                  developer owned the frontend, and I handled server-side
                  features and fixes.
                </p>
                <p>
                  My work touched both new development and maintenance. That
                  meant writing feature logic, tracing bugs through existing
                  code, and keeping backend changes in step with the interface
                  handled by the frontend developer.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {responsibilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.title} className="bg-background p-5">
                      <Icon
                        aria-hidden="true"
                        className="size-4 text-primary"
                      />
                      <h3 className="mt-4 text-sm font-medium">{item.title}</h3>
                      <p className="mt-2 text-sm text-pretty text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="contributions-title"
        className="scroll-mt-20 border-b border-border py-20 md:py-28"
      >
        <Container>
          <SectionHeading
            index="03"
            label="key contributions"
            title="What I worked on"
            titleId="contributions-title"
            description="Three areas where I spent most of my time. Each was part of a team effort, the frontend was handled by another developer."
          />

          <p className="mb-8 font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> git log --author=&quot;me&quot;
            --oneline
          </p>

          <div className="space-y-4">
            <Reveal>
              <article className="border border-border bg-card">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border px-5 py-3">
                  <span className="font-mono text-[11px] text-primary">01</span>
                  <h3 className="text-sm font-medium">Subscription management</h3>
                  <Badge
                    variant="outline"
                    className="ml-auto font-mono text-[10px] font-normal text-muted-foreground"
                  >
                    backend
                  </Badge>
                </div>

                <div className="flex items-start gap-4 p-5 md:p-6">
                  <span
                    aria-hidden="true"
                    className="hidden size-9 shrink-0 place-items-center border border-border bg-muted/40 text-primary sm:grid"
                  >
                    <CreditCard className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                      I worked on the backend side of subscription management,
                      focusing on the server-side logic behind the feature. The
                      interface was handled by the frontend developer.
                    </p>

                    <div className="flex flex-col gap-2 mt-3">
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                            Implemented the backend subscription management system for real estate agents who need to list more 
                            properties on the platform. Agents can list up to 3 properties for free, while additional 
                            listings require an active monthly or yearly subscription.
                        </p>
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                            My responsibilities included implementing subscription business logic, calculating monthly and yearly 
                            subscription periods, enforcing property listing limits, and managing subscription 
                            expiration through Laravel queue jobs running in the background. When a subscription expires, the system 
                            automatically locks the agent's properties.
                        </p>
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                            My primary focus was backend development, while another team member handled the frontend implementation.
                        </p>
                    </div>

                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={60}>
              <article className="border border-border bg-card">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border px-5 py-3">
                  <span className="font-mono text-[11px] text-primary">02</span>
                  <h3 className="text-sm font-medium">
                    Flexible login and authentication
                  </h3>
                  <Badge
                    variant="outline"
                    className="ml-auto font-mono text-[10px] font-normal text-muted-foreground"
                  >
                    backend
                  </Badge>
                </div>

                <div className="flex items-start gap-4 p-5 md:p-6">
                  <span
                    aria-hidden="true"
                    className="hidden size-9 shrink-0 place-items-center border border-border bg-muted/40 text-primary sm:grid"
                  >
                    <KeyRound className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                      I worked on the backend flows behind a more flexible login
                      experience. The goal was to let people reach the same
                      account through more than one authentication method.
                    </p>

                    <div className="flex flex-col gap-2 mt-3">
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                            Enhanced the existing authentication system to give users more flexibility when accessing their accounts.
                        </p>
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                            Previously, some users tried logging in with their email and password even though they had 
                            originally registered using Google or Facebook. To address this confusion, we implemented a 
                            feature that allows users to set a password for their existing social login account.
                        </p>
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                            Users who register through Google or Facebook are required to create a password for 
                            their account. This allows them to access the same account using either 
                            their social login provider or their email and password.
                        </p>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base font-bold">
                            My contributions included:
                        </p>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            <li
                            className="flex gap-2 text-sm text-muted-foreground"
                            >
                            <Check
                                aria-hidden="true"
                                className="mt-0.5 size-3.5 shrink-0 text-primary"
                            />
                            <span className="text-pretty">
                                Enhancing the existing authentication flow.
                            </span>
                            </li>
                            <li
                            className="flex gap-2 text-sm text-muted-foreground"
                            >
                            <Check
                                aria-hidden="true"
                                className="mt-0.5 size-3.5 shrink-0 text-primary"
                            />
                            <span className="text-pretty">
                                Implementing password creation for accounts registered through Google or Facebook.
                            </span>
                            </li>
                            <li
                            className="flex gap-2 text-sm text-muted-foreground"
                            >
                            <Check
                                aria-hidden="true"
                                className="mt-0.5 size-3.5 shrink-0 text-primary"
                            />
                            <span className="text-pretty">
                                Supporting both social login and email/password authentication for the same account.
                            </span>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="border border-border bg-card">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border px-5 py-3">
                  <span className="font-mono text-[11px] text-primary">03</span>
                  <h3 className="text-sm font-medium">
                    Bug Fixing and Application Maintenance
                  </h3>
                  <Badge
                    variant="outline"
                    className="ml-auto font-mono text-[10px] font-normal text-muted-foreground"
                  >
                    backend/frontend/database
                  </Badge>
                </div>

                <div className="flex items-start gap-4 p-5 md:p-6">
                  <span
                    aria-hidden="true"
                    className="hidden size-9 shrink-0 place-items-center border border-border bg-muted/40 text-primary sm:grid"
                  >
                    <Bug className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-pretty text-muted-foreground sm:text-base">
                      Contributed to the ongoing maintenance and improvement of the Realholmes platform by resolving application issues and maintaining existing functionality.
                    </p>

                    <div className="mt-4">
                        <p className="text-sm text-pretty text-muted-foreground sm:text-base font-bold">
                            My contributions included:
                        </p>
                        <div className="mt-4">
                        <BulletList
                            items={[
                            "Investigating and fixing bugs in existing application features.",
                            "Troubleshooting and resolving backend errors.",
                            "Maintaining existing functionality to ensure it continued working as expected.",
                            "Modifying and improving existing code when needed.",
                            "Implementing fixes based on identified issues and project requirements."
                            ]}
                        />
                        </div>
                    </div>

                    {/* <Placeholder>
                      Add one or two real examples: the bug, its cause, and the
                      fix.
                    </Placeholder> */}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="stack-title"
        className="scroll-mt-20 border-b border-border py-20 md:py-28"
      >
        <Container>
          <SectionHeading
            index="04"
            label="technical stack"
            title="The TALL stack"
            titleId="stack-title"
            description="The platform uses Laravel, Livewire, Alpine.js, and Tailwind CSS together."
          />

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((item, index) => (
              <div key={item.name} className="bg-background p-5">
                <p className="font-mono text-[11px] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-sm font-medium">{item.name}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 border-l-2 border-primary/40 pl-4 text-sm text-pretty text-muted-foreground">
            My hands-on work was primarily in Laravel and the server-side parts
            of the stack. The frontend implementation was handled by another
            developer.
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="challenges-title"
        className="scroll-mt-20 border-b border-border py-20 md:py-28"
      >
        <Container>
          <SectionHeading
            index="05"
            label="challenges and learnings"
            title="Working in an existing product"
            titleId="challenges-title"
            description="Maintaining a live application is different from building something from scratch. You have to understand code someone else wrote, make changes safely, and keep the frontend and backend in sync."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="h-full border border-border bg-card p-6">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">{"//"}</span> challenges
                </p>
                <div className="mt-4">
                  <BulletList items={challenges} />
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full border border-border bg-card p-6">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">{"//"}</span> learnings
                </p>
                <div className="mt-4">
                  <BulletList items={learnings} />
                </div>
              </div>
            </Reveal>
          </div>

          <p className="mt-8 text-sm text-pretty text-muted-foreground sm:text-base">
            The biggest takeaway was learning to make smaller, safer changes. I
            became more careful about understanding the code around a bug before
            touching it, and more aware of how backend decisions affect the rest
            of the product.
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="closing-title"
        className="scroll-mt-20 py-20 md:py-28"
      >
        <Container>
          <SectionHeading
            index="06"
            label="closing"
            title="What I took from Realholmes Property Inc."
            titleId="closing-title"
          />

          <div className="grid gap-8 border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <Reveal>
              <div className="space-y-5 text-sm text-pretty text-muted-foreground sm:text-base">
                <p>
                  Working on Realholmes gave me experience in a shared codebase:
                  contributing to a team, owning backend tasks, and maintaining
                  features after they shipped.
                </p>
                <p>
                  It strengthened my Laravel skills and gave me a better
                  understanding of how backend work supports the rest of a
                  product. I also learned more about communicating changes
                  clearly when another developer is building the interface.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="border border-border bg-background p-5 font-mono text-xs leading-relaxed">
                <p>
                  <span className="text-primary">$</span> next --step
                </p>
                <p className="mt-2 text-muted-foreground">
                  Back to the projects page, or get in touch.
                </p>

                <div className="mt-5 flex flex-col gap-2">
                  <ButtonLink
                    href="/#projects"
                    size="sm"
                    className="w-full justify-between"
                  >
                    Projects
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink
                    href="/#contact"
                    variant="outline"
                    size="sm"
                    className="w-full justify-between"
                  >
                    Contact
                    <ArrowUpRight aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
