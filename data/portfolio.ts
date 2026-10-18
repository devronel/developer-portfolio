export type SocialIconName = "github" | "linkedin" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface NavItem {
  label: string;
  href: string;
}


interface LinkData {
  id: number;
  label: string;
  source?: string;
}


export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  links: LinkData[];
  featured?: boolean;
  live?: string;
  source?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  /** Short marker rendered like a git short hash. */
  hash: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Profile {
  name: string;  // Short handle shown in the navbar and terminal prompt.
  handle: string;
  role: string;
  location: string; // Green status pill — set `open: false` to hide it.
  availability: { open: boolean; label: string }; // Hero pitch. Keep it under 30 words.
  tagline: string; // Four or five technologies you'd lead with — rendered in the about card.
  stack: string[];
  email: string;
  resumeUrl: string;
  bio: string[];
}

export interface SiteConfig {
  name: string;
  /** TODO: replace with your production domain — used for canonical/OG URLs. */
  url: string;
  description: string;
  /** TODO: replace with your repo URL, shown in the footer. */
  sourceUrl: string;
  copyrightYear: number;
}


export const siteConfig: SiteConfig = {
  name: "Ronel Florida",
  url: "https://ronelflorida.dev",
  description:
    "Full-stack engineer building fast, accessible web products with TypeScript, Next.js, and Node.js.",
  sourceUrl: "https://github.com/ronelflorida/ronelflorida-dev",
  copyrightYear: 2026,
};


export const profile: Profile = {
  name: "Ronel Florida",
  handle: "ronel",
  role: "Software Developer",
  location: "Occidental Mindoro, Philippines",
  availability: { open: true, label: "Open to new opportunities" },
  tagline: "Software developer building backend systems, handling application logic, and working with databases.",
  stack: ["Laravel", "JavaScript", "NextJS", "MySql", "Livewire", "TailwindCSS"],
  email: "rnl.florida@gmail.com",
  resumeUrl: "#",
  bio: [
    "I'm a software developer with experience building and maintaining web applications, mainly using Laravel. I've worked on features, fixed bugs, improved existing functionality, and helped make applications more reliable and easier to use.",
    "I enjoy solving problems, learning new things, and finding ways to improve my code. I also work on personal projects to explore new technologies and put what I learn into practice.",
    "Currently, I'm learning Java and Spring Boot to expand my backend development skills and explore different ways of building applications. I'm always looking for opportunities to grow as a developer, learn from others, and build useful software.",
  ],
};


export const hasResume = profile.resumeUrl !== "#";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];


export const sectionIds: string[] = navItems.map((item) =>
  item.href.replace("#", ""),
);


export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/devronel", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ronelflorida", icon: "linkedin"},
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];


export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: [
      "Tailwind CSS",
      "React",
      "Next.js",
      "shadcn/ui",
      "Alpine.js"
    ],
  },
  {
    category: "Backend",
    items: ["Laravel", "Livewire", "REST APIs", "MySQL", "SpringBoot"],
  },
  {
    category: "Tooling & Ops",
    items: ["Git", "Github", "Figma", "Postman"],
  },
];


export const projects: Project[] = [
  {
    slug: "kartify-ecommerce-application",
    title: "Kartify",
    summary: "An e-commerce frontend for browsing products, managing shopping carts, and interacting with the backend API.",
    tags: ["Java", "SpringBoot", "MySQL", "Rest API", "Next.js", "TailwindCSS", "shadcn/ui"],
    year: "2026",
    featured: true,
    source: "https://github.com/devronel/kartify-api",
    links: [
      {
        id: 1,
        label: "Frontend Repository",
        source: "https://github.com/devronel/kartify",
      },
      {
        id: 2,
        label: "Backend Repository",
        source: "https://github.com/devronel/kartify-api",
      }
    ]
  },
  {
    slug: "portfolio",
    title: "ronelflorida.dev",
    summary: "A personal portfolio showcasing my projects, development experience, and skills as a software developer.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    year: "2026",
    links: [
      {
        id: 1,
        label: "Code",
        source: "#",
      }
    ],
    live: "#",
  },
  {
    slug: "forgekit",
    title: "ForgeKit",
    summary: "Free image converter for JPG, PNG & WebP. In-memory processing, no sign-up needed.",
    tags: ["Laravel", "Livewire", "TailwindCSS"],
    year: "2025",
    links: [
      {
        id: 1,
        label: "Code",
        source: "https://github.com/devronel/forgekit",
      }
    ],
    live: "https://image-forge-lfoh.onrender.com/",
  }
];


export const experience: ExperienceEntry[] = [
  {
    hash: "a1f3c92",
    role: "Full Stack Developer",
    company: "Realholmes Property Inc.",
    period: "2025 — 2026",
    location: "Muntinlupa City, Philippines - Onsite",
    highlights: [
      "Contributed to the development and ongoing maintenance of a Laravel-based real estate platform, implementing new features and enhancing existing functionality",
      "Optimized database queries and backend processes to improve application performance and reduce response times",
      "Diagnosed and resolved frontend and backend issues, improving system reliability, responsiveness, and overall user experience."
    ],
  },
  {
    hash: "7d0b45e",
    role: "Frontend Developer",
    company: "Philippian Marketing Corporation",
    period: "2023 — 2024",
    location: "Bacoor City, Philippines - Onsite",
    highlights: [
      "Contributed to the development of ERP and company web applications by implementing responsive, user-friendly interfaces.",
      "Developed reusable and responsive UI components to improve usability across desktop and mobile devices.",
      "Identified and resolved frontend issues, improving application performance, responsiveness, and overall user experience."
    ],
  }
];
