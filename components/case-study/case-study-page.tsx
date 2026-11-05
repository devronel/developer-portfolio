import type { ReactNode } from "react";

import {
  BackgroundSection,
  ObjectivesSection,
  OverviewSection,
  RoleSection,
  TechnologiesSection,
} from "@/components/case-study/case-study-context-sections";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { NavigationSection } from "@/components/case-study/case-study-navigation";
import {
  ConclusionSection,
  GallerySection,
  LessonsSection,
  ResultsSection,
} from "@/components/case-study/case-study-outcome-sections";
import {
  ChallengesSection,
  DecisionsSection,
  FeaturesSection,
  ProcessSection,
} from "@/components/case-study/case-study-work-sections";
import type { CaseStudy } from "@/data/case-study";
import { cn } from "cn";

interface CaseStudyPageProps {
  study: CaseStudy;
}

interface SectionDefinition {
  key: string;
  render: (index: string) => ReactNode;
}

/**
 * Build the list of visible sections before assigning numbers.
 *
 * Filtering first keeps the section index continuous when a project omits
 * optional content.
 */
function getSections(study: CaseStudy): SectionDefinition[] {
  const sections: SectionDefinition[] = [];

  if (study.overview?.length) {
    sections.push({
      key: "overview",
      render: (index) => <OverviewSection study={study} index={index} />,
    });
  }

  const hasBackground = Boolean(
    study.background?.summary?.length ||
      study.background?.problem ||
      study.background?.constraints?.length,
  );

  if (hasBackground) {
    sections.push({
      key: "background",
      render: (index) => <BackgroundSection study={study} index={index} />,
    });
  }

  if (study.objectives?.length) {
    sections.push({
      key: "objectives",
      render: (index) => <ObjectivesSection study={study} index={index} />,
    });
  }

  const hasRole = Boolean(
    study.roleDetails?.summary?.length ||
      study.roleDetails?.responsibilities?.length ||
      study.roleDetails?.teamContext,
  );

  if (hasRole) {
    sections.push({
      key: "role",
      render: (index) => <RoleSection study={study} index={index} />,
    });
  }

  if (study.technologies?.length) {
    sections.push({
      key: "technologies",
      render: (index) => <TechnologiesSection study={study} index={index} />,
    });
  }

  if (study.features?.length) {
    sections.push({
      key: "features",
      render: (index) => <FeaturesSection study={study} index={index} />,
    });
  }

  const hasProcess = Boolean(
    study.process?.summary?.length || study.process?.steps?.length,
  );

  if (hasProcess) {
    sections.push({
      key: "process",
      render: (index) => <ProcessSection study={study} index={index} />,
    });
  }

  if (study.challenges?.length) {
    sections.push({
      key: "challenges",
      render: (index) => <ChallengesSection study={study} index={index} />,
    });
  }

  if (study.decisions?.length) {
    sections.push({
      key: "decisions",
      render: (index) => <DecisionsSection study={study} index={index} />,
    });
  }

  const hasResults = Boolean(
    study.results?.summary?.length ||
      study.results?.items?.length ||
      study.results?.note,
  );

  if (hasResults) {
    sections.push({
      key: "results",
      render: (index) => <ResultsSection study={study} index={index} />,
    });
  }

  if (study.lessons?.length) {
    sections.push({
      key: "lessons",
      render: (index) => <LessonsSection study={study} index={index} />,
    });
  }

  if (study.gallery?.length) {
    sections.push({
      key: "gallery",
      render: (index) => <GallerySection study={study} index={index} />,
    });
  }

  if (study.conclusion?.length) {
    sections.push({
      key: "conclusion",
      render: (index) => <ConclusionSection study={study} index={index} />,
    });
  }

  const hasNavigation = Boolean(
    study.navigation?.back ||
      study.navigation?.previous ||
      study.navigation?.next ||
      study.navigation?.related?.length,
  );

  if (hasNavigation) {
    sections.push({
      key: "navigation",
      render: (index) => <NavigationSection study={study} index={index} />,
    });
  }

  return sections;
}

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  const sections = getSections(study);

  return (
    <>
      <CaseStudyHeader study={study} />

      {sections.map((section, index) => (
        <div
          key={section.key}
          className={cn(
            index < sections.length - 1 && "border-b border-border",
          )}
        >
          {section.render(String(index + 1).padStart(2, "0"))}
        </div>
      ))}
    </>
  );
}
