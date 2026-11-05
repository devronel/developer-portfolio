import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { sampleCaseStudy } from "@/data/case-study";
import { caseStudyMetadata } from "@/lib/case-study";

export const metadata: Metadata = caseStudyMetadata(sampleCaseStudy);

/**
 * Case study template.
 *
 * To use this layout for a real project:
 * 1. Add a typed `CaseStudy` object to `data/case-study.ts`.
 * 2. Copy this file to `app/case-study/<slug>/page.tsx`.
 * 3. Replace `sampleCaseStudy` with your object.
 *
 * Sections without content are hidden automatically, so the same layout works
 * for personal projects, professional experience, freelance work, and team
 * projects.
 */
export default function CaseStudyTemplatePage() {
  return <CaseStudyPage study={sampleCaseStudy} />;
}
