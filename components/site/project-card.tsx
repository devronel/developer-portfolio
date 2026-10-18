import { ExternalLink, FolderGit2 } from "lucide-react";

import { ButtonLink } from "@/components/site/button-link";
import { WindowFrame } from "@/components/site/window-frame";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

function ProjectLinks({ project }: ProjectCardProps) {

  if (!project.live && !project.source) return null;

  return (
    <div className="flex items-center gap-1">
      {
        project.links.map(item => {

          return (
            <ButtonLink
              key={item.id}
              href={item.source}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="xs"
            >
              <FolderGit2 aria-hidden="true" />
              { item.label }
            </ButtonLink>
          )

        })
      }
      {project.live ? (
        <ButtonLink
          href={project.live}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
          size="xs"
        >
          <ExternalLink aria-hidden="true" />
          Live
        </ButtonLink>
      ) : null}
    </div>
  );
}

function ProjectTags({ project }: ProjectCardProps) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {project.tags.map((tag) => (
        <li key={tag}>
          <Badge
            variant="outline"
            className="font-mono text-[10px] font-normal text-muted-foreground"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}


export function FeaturedProjectCard({ project }: ProjectCardProps) {
  return (
    <WindowFrame
      title={`${project.slug} - README`}
      meta={project.year}
      className="transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      contentClassName="flex h-full flex-col gap-4 p-6"
    >
      <div>
        <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
        <p className="mt-2 max-w-2xl text-sm text-pretty text-muted-foreground">
          {project.summary}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
        <ProjectTags project={project} />
        <div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </WindowFrame>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:ring-primary/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <CardHeader>
        <CardTitle className="flex items-baseline justify-between gap-4">
          <span>{project.title}</span>
          <span className="font-mono text-[11px] font-normal text-muted-foreground">
            {project.year}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-pretty text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4">
          <ProjectTags project={project} />
        </div>
      </CardContent>

      {project.live || project.source ? (
        <CardFooter className="justify-end gap-2">
          <ProjectLinks project={project} />
        </CardFooter>
      ) : null}
    </Card>
  );
}
