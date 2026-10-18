import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/site/brand-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socials, type SocialIconName } from "@/data/portfolio";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} satisfies Record<SocialIconName, React.ComponentType<{ className?: string }>>;

interface SocialLinksProps {
  className?: string;
}

/** Icon-only links; every one has an accessible label and a tooltip. */
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={className}>
      {socials.map((link) => {
        const Icon = iconMap[link.icon];
        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.label}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    href={link.href}
                    aria-label={link.label}
                    {...(isExternal
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  />
                }
              >
                <Icon className="size-4" />
              </TooltipTrigger>
              <TooltipContent>{link.label}</TooltipContent>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
}
