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
  type: "source" | "live"
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
  url: string; // Replace with your production domain — used for canonical/OG URLs.
  description: string;
  sourceUrl: string; // Repo URL, shown in the footer.
  copyrightYear: number;
}


export const siteConfig: SiteConfig = {
  name: "Ronel Florida",
  url: "https://ronelflorida-code.vercel.app/",
  description: "Software Developer specializing in backend systems, application logic, and database management. Skilled in Laravel, Java, Spring Boot, and REST APIs.",
  sourceUrl: "https://github.com/devronel/developer-portfolio",
  copyrightYear: 2026,
};


export const profile: Profile = {
  name: "Ronel Florida",
  handle: "ronel florida",
  role: "Software Developer",
  location: "Occidental Mindoro, Philippines",
  availability: { open: true, label: "Open to new opportunities" },
  tagline: "Software developer focused on building backend systems, designing application logic, and managing databases.",
  stack: ["Laravel", "JavaScript", "Next.js", "MySql"],
  email: "rnl.florida@gmail.com",
  resumeUrl: "/resume/Ronel_Florida_Resume.pdf",
  bio: [
    "I'm a software developer with 2+ years of experience building and maintaining web applications, mainly using Laravel. I've worked on features, fixed bugs, improved existing functionality, and helped make applications more reliable and easier to use.",
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
    items: ["PHP", "JavaScript", "TypeScript", "Java", "SQL", "HTML5", "CSS3"],
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
    items: ["Laravel", "Livewire", "REST API", "MySQL", "Spring Boot"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub", "Figma", "Postman"],
  },
];


export const projects: Project[] = [
  {
    slug: "kartify-ecommerce-application",
    title: "Kartify",
    summary: "An e-commerce application featuring product browsing, shopping cart management, and order processing.",
    tags: ["Java", "SpringBoot", "MySQL", "Rest API", "Next.js", "TailwindCSS", "shadcn/ui"],
    year: "2026",
    featured: true,
    links: [
      {
        id: 1,
        label: "Frontend Repository",
        type: "source",
        source: "https://github.com/devronel/kartify",
      },
      {
        id: 2,
        label: "Backend Repository",
        type: "source",
        source: "https://github.com/devronel/kartify-api",
      }
    ]
  },
  {
    slug: "portfolio",
    title: "rnl@code",
    summary: "A personal portfolio showcasing my projects, development experience, and skills as a software developer.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    year: "2026",
    links: [
      {
        id: 1,
        label: "Code",
        type: "source",
        source: "https://github.com/devronel/developer-portfolio",
      },
      {
        id: 2,
        label: "Live",
        type: "live",
        source: "https://ronelflorida-code.vercel.app/",
      }
    ]
  },
  {
    slug: "forgekit",
    title: "ForgeKit",
    summary: "Free image converter for JPG, PNG & WebP. In-memory processing, no sign-up needed.",
    tags: ["Laravel", "Livewire", "Alpine.js", "TailwindCSS"],
    year: "2026",
    links: [
      {
        id: 1,
        label: "Code",
        type: "source",
        source: "https://github.com/devronel/forgekit",
      },
      {
        id: 2,
        label: "Live",
        type: "live",
        source: "https://image-forge-lfoh.onrender.com/",
      }
    ]
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
      "Contributed to the development and ongoing maintenance of a real estate platform, implementing new features and enhancing existing functionality",
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
