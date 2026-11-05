import { siteConfig } from "./portfolio";

/**
 * Case study content model.
 *
 * Every section is optional. The page renders a section only when it has
 * content, so the same layout can represent a short personal project or a
 * detailed professional engagement.
 *
 * To add a new case study:
 * 1. Copy the `sampleCaseStudy` object below.
 * 2. Give it a unique `slug` and replace the content.
 * 3. Render it with `<CaseStudyPage study={yourCaseStudy} />`.
 */
export type CaseStudyCategory =
  | "Personal Project"
  | "Professional Experience"
  | "Freelance"
  | "Team Project";

export interface CaseStudyLink {
  label: string;
  href: string;
  /** Controls the icon and the button emphasis. */
  kind?: "live" | "source" | "website" | "other";
}

export interface CaseStudyTechnology {
  name: string;
  /** What the technology was used for on this project. */
  purpose: string;
  /** Optional grouping label, e.g. "Frontend" or "Database". */
  category?: string;
}

export interface CaseStudyBackground {
  summary?: string[];
  problem?: string;
  constraints?: string[];
}

export interface CaseStudyObjective {
  title: string;
  description: string;
}

export interface CaseStudyResponsibility {
  title: string;
  description: string;
  /** Specific tasks or ownership details. */
  contributions?: string[];
}

export interface CaseStudyRole {
  summary?: string[];
  responsibilities?: CaseStudyResponsibility[];
  /** Explains what the team did versus what you did. */
  teamContext?: string;
}

export interface CaseStudyCode {
  filename?: string;
  language?: string;
  content: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
  /** Shown in the window chrome above the image. */
  filename?: string;
  /** Use "contain" for diagrams and "cover" for screenshots. */
  fit?: "cover" | "contain";
}

export interface CaseStudyFeature {
  title: string;
  summary: string;
  /** Optional short label, e.g. "Backend" or "Layout". */
  kind?: string;
  details?: string[];
  implementation?: string[];
  code?: CaseStudyCode;
  image?: CaseStudyImage;
}

export interface CaseStudyProcessStep {
  title: string;
  description: string;
  details?: string[];
}

export interface CaseStudyProcess {
  summary?: string[];
  steps?: CaseStudyProcessStep[];
}

export interface CaseStudyChallenge {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  result: string;
}

export interface CaseStudyDecision {
  title: string;
  decision: string;
  rationale: string;
  alternatives?: string;
  tradeoffs?: string;
}

export interface CaseStudyResult {
  title: string;
  description: string;
}

export interface CaseStudyResults {
  summary?: string[];
  items?: CaseStudyResult[];
  /** Use this for honest context, e.g. missing metrics or confidentiality. */
  note?: string;
}

export interface CaseStudyLesson {
  title?: string;
  description: string;
}

export interface CaseStudyNavigationItem {
  title: string;
  href: string;
  description?: string;
  /** Optional context label, e.g. "personal project". */
  label?: string;
  /** Open the link in a new tab. */
  external?: boolean;
}

export interface CaseStudyNavigation {
  /** Destination name, e.g. "projects" or "experience". */
  back?: { label: string; href: string };
  previous?: CaseStudyNavigationItem;
  next?: CaseStudyNavigationItem;
  related?: CaseStudyNavigationItem[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: CaseStudyCategory;

  period?: string;
  role?: string;
  team?: string;
  status?: string;

  /** Adds a small note below the header. Useful for confidential work. */
  notice?: string;
  confidential?: boolean;

  technologies?: CaseStudyTechnology[];
  technologiesNote?: string;
  links?: CaseStudyLink[];

  overview?: string[];
  background?: CaseStudyBackground;
  objectives?: CaseStudyObjective[];
  roleDetails?: CaseStudyRole;
  features?: CaseStudyFeature[];
  process?: CaseStudyProcess;
  challenges?: CaseStudyChallenge[];
  decisions?: CaseStudyDecision[];
  results?: CaseStudyResults;
  lessons?: CaseStudyLesson[];
  gallery?: CaseStudyImage[];
  galleryNote?: string;
  conclusion?: string[];
  navigation?: CaseStudyNavigation;
}

/**
 * Sample content for the template preview.
 *
 * This is intentionally a case study about the template itself, so the demo
 * does not invent details about a real client project. Replace it with your
 * own content when you create a real case study.
 */
export const sampleCaseStudy: CaseStudy = {
  slug: "template",
  title: "Case Study Template",
  description:
    "A reusable, content-driven case study layout for presenting personal, professional, freelance, and team projects.",
  category: "Personal Project",
  period: "2026",
  role: "Design and development",
  team: "Solo",
  status: "Reusable template",
  notice:
    "Template preview — replace the sample content in data/case-study.ts with your own project. Sections without content are hidden automatically.",
  technologies: [
    {
      name: "Next.js",
      purpose: "App Router, server components, and page metadata.",
      category: "Framework",
    },
    {
      name: "TypeScript",
      purpose: "Typed content model and component props.",
      category: "Language",
    },
    {
      name: "Tailwind CSS",
      purpose: "Responsive layout, spacing, and theme tokens.",
      category: "Styling",
    },
    {
      name: "shadcn/ui",
      purpose: "Buttons, badges, and shared UI primitives.",
      category: "UI",
    },
    {
      name: "Lucide",
      purpose: "Consistent iconography for links and section labels.",
      category: "Icons",
    },
    {
      name: "next/image",
      purpose: "Optimized gallery and feature images.",
      category: "Media",
    },
  ],
  links: [
    { label: "Live portfolio", href: siteConfig.url, kind: "live" },
    { label: "Source", href: siteConfig.sourceUrl, kind: "source" },
  ],
  overview: [
    "This template is a reusable case study page for the portfolio. It is designed to present a project from the first problem statement through the final outcome, without forcing every project into the same amount of detail.",
    "The page is driven by a single typed object. The layout reads that object, renders only the sections that have content, and numbers the remaining sections automatically. Adding a new case study means adding content, not rebuilding the page.",
  ],
  background: {
    summary: [
      "Portfolio case studies often end up as either a short project card or a long, one-off page. The first option leaves out the decisions and constraints that make a project worth reading. The second option is expensive to repeat and tends to drift away from the rest of the site.",
    ],
    problem:
      "There was no shared structure for case studies, so every new project would need its own layout, its own spacing, and its own decisions about which sections to include.",
    constraints: [
      "The layout must support personal, professional, freelance, and team projects.",
      "Sections must be optional and disappear when they have no content.",
      "Confidential projects must work without public source code, links, or screenshots.",
      "The design must reuse the existing portfolio components and tokens.",
    ],
  },
  objectives: [
    {
      title: "One layout, many project types",
      description:
        "Use the same page structure for personal builds, professional work, freelance projects, and team efforts.",
    },
    {
      title: "Optional sections",
      description:
        "Render only the sections that have content, and keep section numbering continuous.",
    },
    {
      title: "Consistent presentation",
      description:
        "Reuse the portfolio's typography, spacing, borders, and developer-focused details.",
    },
    {
      title: "Easy to extend",
      description:
        "Add a new case study by writing a typed content object instead of editing the page structure.",
    },
  ],
  roleDetails: {
    summary: [
      "I designed the content model, built the shared section components, and integrated the template with the existing portfolio design system.",
      "The work covered the page structure, responsive behavior, conditional rendering, and the content needed to demonstrate every section.",
    ],
    responsibilities: [
      {
        title: "Content model",
        description:
          "Defined a typed structure for each case study section, including optional fields.",
        contributions: [
          "Separated project content from page layout.",
          "Made every section optional at the type level.",
        ],
      },
      {
        title: "Section components",
        description:
          "Built reusable components for headers, prose, features, challenges, decisions, results, and navigation.",
        contributions: [
          "Composed existing portfolio primitives.",
          "Kept the visual language consistent across sections.",
        ],
      },
      {
        title: "Responsive layout",
        description:
          "Adjusted grids, spacing, and media blocks for desktop, tablet, and mobile.",
        contributions: [
          "Used the existing Container and section rhythm.",
          "Made code blocks and figures scroll or scale safely.",
        ],
      },
      {
        title: "Accessibility",
        description: "Kept the page semantic and keyboard-friendly.",
        contributions: [
          "Used one h1 and ordered section headings.",
          "Added accessible labels to figures, code blocks, and icon-only elements.",
        ],
      },
    ],
    teamContext:
      "This was a solo build. The template uses the existing portfolio components rather than introducing a separate design system.",
  },
  features: [
    {
      title: "Optional sections with automatic numbering",
      kind: "Layout",
      summary:
        "Each section is registered only when it has content. The page assigns section numbers after filtering, so the sequence stays correct no matter which sections are present.",
      implementation: [
        "Sections are collected in a typed array before rendering.",
        "Empty arrays and missing objects are skipped.",
        "The index is derived from the final visible order.",
      ],
      code: {
        filename: "components/case-study/case-study-page.tsx",
        language: "tsx",
        content: `const sections = getSections(study);

return sections.map((section, index) => (
  <div key={section.key}>
    {section.render(String(index + 1).padStart(2, "0"))}
  </div>
));`,
      },
    },
    {
      title: "A typed content model",
      kind: "Content",
      summary:
        "The layout does not know where a project came from. It only knows the shape of the content it receives, which keeps the page reusable and easy to validate.",
      code: {
        filename: "data/case-study.ts",
        language: "ts",
        content: `export const caseStudy: CaseStudy = {
  title: "Project name",
  category: "Personal Project",
  overview: ["What it is and why it exists."],
  challenges: [/* optional */],
  // sections without content are not rendered
};`,
      },
    },
    {
      title: "Content-driven navigation",
      kind: "Navigation",
      summary:
        "Back, previous, next, and related links are all optional. The navigation section appears only when at least one destination is provided.",
      implementation: [
        "Back links work for projects, experience, or the portfolio.",
        "Previous and next cards support internal case study routes.",
        "Related projects are rendered as compact link cards.",
      ],
    },
    {
      title: "Responsive gallery",
      kind: "Media",
      summary:
        "Screenshots and diagrams use a consistent window frame, an aspect-ratio container, and captions. A single image spans the full width; multiple images form a two-column grid.",
      implementation: [
        "Images use next/image with fill and responsive sizes.",
        "Diagrams can use object-contain; screenshots can use object-cover.",
        "Captions are rendered below the frame as figure captions.",
      ],
    },
  ],
  process: {
    summary: [
      "I started by reading the existing portfolio components and page conventions. The goal was to extend the current design rather than create a second visual system.",
    ],
    steps: [
      {
        title: "Inspect the design system",
        description:
          "Reviewed the shared container, section heading, window frame, reveal, badge, and button components.",
      },
      {
        title: "Define the content model",
        description:
          "Listed every section and marked the fields that should be optional, then wrote the TypeScript types.",
      },
      {
        title: "Build shared primitives",
        description:
          "Created prose, list, callout, fact list, code block, and figure components for consistent section content.",
      },
      {
        title: "Compose the sections",
        description:
          "Built each section as a presentational component and registered it conditionally in the page.",
      },
      {
        title: "Verify",
        description:
          "Ran the type check and build, then checked the page at mobile and desktop widths.",
      },
    ],
  },
  challenges: [
    {
      title: "Optional sections without broken numbering",
      problem:
        "Hiding sections based on content can leave gaps in the section numbers.",
      cause:
        "The index was originally assigned while writing the page, before the content was filtered.",
      solution:
        "Build a list of visible sections first, then assign numbers from that final list.",
      result:
        "The numbering stays continuous even when a project has only three or four sections.",
    },
    {
      title: "Keeping content separate from layout",
      problem:
        "Mixing project copy with JSX makes every new case study a code change.",
      cause:
        "The page structure and the project details were being edited in the same file.",
      solution:
        "Move all content into a typed data object and keep the page components presentational.",
      result: "A new case study is a new content object, not a new layout.",
    },
    {
      title: "Supporting confidential work",
      problem:
        "Professional projects may not have public links, source code, or screenshots.",
      cause:
        "A template designed around public side projects assumes those assets always exist.",
      solution:
        "Make links, gallery items, and code snippets optional, and add a notice field for confidentiality.",
      result:
        "The same layout can present internal or client work without empty sections or broken links.",
    },
  ],
  decisions: [
    {
      title: "Use a typed object instead of MDX",
      decision:
        "Store case study content in a TypeScript object rather than MDX files.",
      rationale:
        "The content has a predictable structure, and a typed object makes optional sections explicit.",
      alternatives:
        "MDX would allow free-form writing, but it would also make it easier to drift away from the shared layout.",
      tradeoffs:
        "Long-form prose needs to be split into strings and arrays, which is less flexible than a single markdown file.",
    },
    {
      title: "Compose the existing portfolio components",
      decision:
        "Reuse Container, SectionHeading, WindowFrame, Reveal, Badge, and ButtonLink.",
      rationale:
        "The case study should feel like part of the portfolio, not a separate microsite.",
      alternatives:
        "A new set of case study primitives would allow more customization, but it would duplicate the design system.",
      tradeoffs:
        "Some section-specific markup is still needed for layouts that the shared components do not cover.",
    },
    {
      title: "Keep the page server-rendered",
      decision:
        "Use server components for the page and only opt into client behavior where it already exists.",
      rationale:
        "The content is static, so there is no need to ship interactive JavaScript for the layout.",
      alternatives:
        "A client-rendered page would make some interactions easier, but it would add bundle weight without a clear benefit.",
      tradeoffs:
        "Interactions such as a copy-code button would need a separate client component.",
    },
  ],
  results: {
    summary: [
      "The result is a single case study layout that can present a short personal project or a detailed professional engagement. The page renders from one typed object and keeps the visual language of the portfolio.",
    ],
    items: [
      {
        title: "One reusable layout",
        description:
          "The same page component handles personal, professional, freelance, and team projects.",
      },
      {
        title: "Automatic section visibility",
        description:
          "Sections with no content are not rendered, and numbering stays continuous.",
      },
      {
        title: "Consistent design",
        description:
          "Typography, spacing, borders, and developer details follow the existing portfolio.",
      },
      {
        title: "Content-first workflow",
        description:
          "Adding a case study means adding a typed content object, not editing the page structure.",
      },
    ],
    note:
      "No performance or business metrics are claimed because this is a template preview, not a shipped client project.",
  },
  lessons: [
    {
      title: "Design the content model first",
      description:
        "The shape of the content determines how reusable the page can be. Defining optional fields early prevented layout rewrites later.",
    },
    {
      title: "Optional content needs clear boundaries",
      description:
        "Every section needs an explicit rule for when it should render. Empty arrays and empty strings are not the same thing.",
    },
    {
      title: "Reuse beats reinvention",
      description:
        "Building on the existing portfolio components kept the page consistent and reduced the amount of new styling needed.",
    },
  ],
  gallery: [
    {
      src: "/case-study/template-preview.svg",
      alt: "Wireframe diagram of the case study template with a project header, content sections, and navigation.",
      filename: "case-study-layout.svg",
      caption:
        "The template keeps a single reading column, optional sections, and a clear navigation area.",
      fit: "contain",
    },
  ],
  galleryNote:
    "Replace this sample diagram with project screenshots, architecture diagrams, or other visual material.",
  conclusion: [
    "The case study template gives the portfolio a consistent way to explain how a project was approached, what decisions were made, and what changed as a result.",
    "It is intentionally content-driven: the layout stays stable while the project story changes. That makes it useful for personal work, professional experience, freelance projects, and team efforts alike.",
  ],
  navigation: {
    back: { label: "projects", href: "/#projects" },
    previous: {
      title: "Realholmes Property Platform",
      href: "/case-study/realholmes-property",
      description: "A professional team project using the TALL stack.",
      label: "professional experience",
    },
    next: {
      title: "Portfolio projects",
      href: "/#projects",
      description: "Browse the rest of the projects and experience.",
      label: "portfolio",
    },
    related: [
      {
        title: "Realholmes Property Platform",
        href: "/case-study/realholmes-property",
        description: "Backend contributions to a real estate platform.",
        label: "professional experience",
      },
      {
        title: "Portfolio source",
        href: siteConfig.sourceUrl,
        description: "The source code for this portfolio.",
        label: "github",
        external: true,
      },
    ],
  },
};
