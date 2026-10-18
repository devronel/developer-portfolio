"use client";

import {
  ArrowUpRight,
  Download,
  Hash,
  Mail,
  Monitor,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { GitHubIcon, LinkedInIcon } from "@/components/site/brand-icons";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { hasResume, navItems, profile, siteConfig, socials } from "@/data/portfolio";
import { useIsMac } from "@/hooks/use-is-mac";

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const;

/** ⌘K / Ctrl+K palette: section jumps, external links, theme switching. */
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const isMac = useIsMac();
  const { setTheme } = useTheme();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.key.toLowerCase() === "k" &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        setOpen((isOpen) => !isOpen);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function runAndClose(action: () => void) {
    setOpen(false);
    action();
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="hidden gap-2 text-muted-foreground md:inline-flex"
      >
        <Search className="size-3.5" />
        <span className="text-[11px]">Jump to…</span>
        <kbd className="ml-1 hidden border border-border bg-muted px-1 py-0.5 font-mono text-[10px] tracking-widest lg:inline-block">
          {isMac ? "⌘" : "Ctrl"}K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Command menu"
        description="Jump to a section, open a link, or change the theme."
      >
        <CommandInput placeholder="Search sections, links, and commands…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigate">
            {navItems.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.label} ${item.href}`}
                onSelect={() =>
                  runAndClose(() => {
                    window.location.hash = item.href;
                  })
                }
              >
                <Hash />
                {item.label}
                <CommandShortcut>{item.href}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Links">
            {socials.map((link) => {
              const Icon = socialIconMap[link.icon];

              return (
                <CommandItem
                  key={link.label}
                  value={`${link.label} ${link.href}`}
                  onSelect={() =>
                    runAndClose(() => window.open(link.href, "_blank"))
                  }
                >
                  <Icon className="size-4" />
                  {link.label}
                  <ArrowUpRight className="ml-auto opacity-50" />
                </CommandItem>
              );
            })}
            {hasResume && (
              <CommandItem
                value="Download CV resume"
                onSelect={() =>
                  runAndClose(() => {
                    window.location.href = profile.resumeUrl;
                  })
                }
              >
                <Download />
                Download CV
              </CommandItem>
            )}
            <CommandItem
              value={`Source code ${siteConfig.sourceUrl}`}
              onSelect={() =>
                runAndClose(() => window.open(siteConfig.sourceUrl, "_blank"))
              }
            >
              <ArrowUpRight />
              Site source
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem
              value="light theme"
              onSelect={() => runAndClose(() => setTheme("light"))}
            >
              <Sun />
              Light
            </CommandItem>
            <CommandItem
              value="dark theme"
              onSelect={() => runAndClose(() => setTheme("dark"))}
            >
              <Moon />
              Dark
            </CommandItem>
            <CommandItem
              value="system theme"
              onSelect={() => runAndClose(() => setTheme("system"))}
            >
              <Monitor />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
