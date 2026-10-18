import { CommandMenu } from "@/components/site/command-menu";
import { Container } from "@/components/site/container";
import { MobileNav } from "@/components/site/mobile-nav";
import { SiteNav } from "@/components/site/site-nav";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="Back to top"
          className="font-mono text-sm font-medium tracking-tight"
        >
          <span className="text-muted-foreground">~/</span>
          ronel
          <span className="text-primary">@</span>
          <span className="text-muted-foreground">code</span>
        </a>

        <div className="flex items-center gap-2">
          <SiteNav className="hidden lg:block" />
          <CommandMenu />
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
