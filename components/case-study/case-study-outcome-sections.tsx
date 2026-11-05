import { Check, Lightbulb } from "lucide-react";

import {
  Callout,
  CaseStudyFigure,
  CaseStudySection,
  Prose,
} from "@/components/case-study/case-study-primitives";
import { Reveal } from "@/components/site/reveal";
import type { CaseStudy } from "@/data/case-study";
import { cn } from "cn";

interface SectionProps {
  study: CaseStudy;
  index: string;
}

export function ResultsSection({ study, index }: SectionProps) {
  const results = study.results;
  const summary = results?.summary ?? [];
  const items = results?.items ?? [];
  const note = results?.note;
  const hasNarrative = summary.length > 0 || Boolean(note);

  if (!hasNarrative && items.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="results"
      index={index}
      label="results and outcomes"
      title="Results and outcomes"
    >
      <div
        className={cn(
          "grid gap-10",
          hasNarrative && items.length > 0 && "lg:grid-cols-[1.1fr_0.9fr]",
        )}
      >
        {hasNarrative ? (
          <div>
            <Prose paragraphs={summary} />

            {note ? (
              <Callout label="note" className="mt-6">
                <p>{note}</p>
              </Callout>
            ) : null}
          </div>
        ) : null}

        {items.length > 0 ? (
          <ul
            className={cn(
              "grid gap-px border border-border bg-border",
              hasNarrative ? "sm:grid-cols-2 lg:grid-cols-1" : "sm:grid-cols-2",
            )}
          >
            {items.map((item) => (
              <li key={item.title} className="bg-background p-5">
                <Check
                  aria-hidden="true"
                  className="size-4 text-primary"
                />
                <h3 className="mt-3 text-sm font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </CaseStudySection>
  );
}

export function LessonsSection({ study, index }: SectionProps) {
  const lessons = study.lessons ?? [];

  if (lessons.length === 0) {
    return null;
  }

  return (
    <CaseStudySection
      id="lessons"
      index={index}
      label="lessons learned"
      title="What I learned"
    >
      <ul
        className={cn(
          "grid gap-px border border-border bg-border",
          lessons.length > 1 && "sm:grid-cols-2",
        )}
      >
        {lessons.map((lesson, lessonIndex) => (
          <li key={lesson.title ?? lesson.description} className="bg-background p-5">
            <div className="flex items-center gap-2">
              <Lightbulb aria-hidden="true" className="size-4 text-primary" />
              <p className="font-mono text-[11px] text-muted-foreground">
                {String(lessonIndex + 1).padStart(2, "0")}
              </p>
            </div>

            {lesson.title ? (
              <h3 className="mt-3 text-sm font-medium">{lesson.title}</h3>
            ) : null}

            <p className="mt-3 text-sm text-pretty text-muted-foreground">
              {lesson.description}
            </p>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}

export function GallerySection({ study, index }: SectionProps) {
  const gallery = study.gallery ?? [];

  if (gallery.length === 0) {
    return null;
  }

  const isSingle = gallery.length === 1;

  return (
    <CaseStudySection
      id="gallery"
      index={index}
      label="gallery"
      title="Screenshots and diagrams"
      description={study.galleryNote}
    >
      <div className={cn("grid gap-6", !isSingle && "md:grid-cols-2")}>
        {gallery.map((image, imageIndex) => (
          <Reveal
            key={`${image.src}-${imageIndex}`}
            delay={Math.min(imageIndex * 40, 120)}
          >
            <CaseStudyFigure
              image={image}
              sizes={
                isSingle
                  ? "(min-width: 1024px) 960px, 100vw"
                  : "(min-width: 768px) 50vw, 100vw"
              }
            />
          </Reveal>
        ))}
      </div>
    </CaseStudySection>
  );
}

export function ConclusionSection({ study, index }: SectionProps) {
  if (!study.conclusion?.length) {
    return null;
  }

  return (
    <CaseStudySection
      id="conclusion"
      index={index}
      label="conclusion"
      title="Conclusion"
    >
      <Prose paragraphs={study.conclusion} className="max-w-3xl" />
    </CaseStudySection>
  );
}
