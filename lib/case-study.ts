import type { Metadata } from "next";

import type { CaseStudy } from "@/data/case-study";

/**
 * Shared metadata for a case study route.
 *
 * The page title is wrapped by the root layout's title template, so the final
 * document title becomes "<project> — Case Study - <name>".
 */
export function caseStudyMetadata(study: CaseStudy): Metadata {
  const path = `/case-study/${study.slug}`;
  const title = `${study.title} — Case Study`;

  return {
    title,
    description: study.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description: study.description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.description,
    },
  };
}
