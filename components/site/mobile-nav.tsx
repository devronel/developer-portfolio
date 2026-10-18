"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/site/button-link";
import { SiteNav } from "@/components/site/site-nav";
import { StatusPill } from "@/components/site/status-pill";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { hasResume, profile } from "@/data/portfolio";

/** Nav menu for < lg screens. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu />
      </SheetTrigger>

      <SheetContent side="right" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle className="font-mono text-xs text-muted-foreground">
            {profile.handle}@portfolio
          </SheetTitle>
          <SheetDescription className="sr-only">
            Jump to a section of the page.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-6 px-4">
          <SiteNav orientation="column" onNavigate={() => setOpen(false)} />
          <StatusPill />
        </div>

        <div className="mt-auto p-4">
          {hasResume && (
            <ButtonLink
              href={profile.resumeUrl}
              download
              variant="outline"
              size="sm"
              className="w-full font-mono text-xs"
            >
              Download CV
            </ButtonLink>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
