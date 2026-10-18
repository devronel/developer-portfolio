import { ArrowUp, ExternalLink } from "lucide-react";

import { Container } from "@/components/site/container";
import { profile, siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-10 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {siteConfig.copyrightYear} {profile.name}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            back to top
            <ArrowUp aria-hidden="true" className="size-3" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
