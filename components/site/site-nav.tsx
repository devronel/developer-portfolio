"use client";

import { cn } from "cn";

import { navItems, sectionIds } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";

interface SiteNavProps {
  className?: string;
  itemClassName?: string;
  /** Close the mobile sheet after a link is followed. */
  onNavigate?: () => void;
  orientation?: "row" | "column";
}

/** Anchor list with a scroll spy — one `nav` used by the navbar and the sheet. */
export function SiteNav({
  className,
  itemClassName,
  onNavigate,
  orientation = "row",
}: SiteNavProps) {
  const activeId = useActiveSection(sectionIds);

  return (
    <nav aria-label="Sections" className={className}>
      <ul
        className={cn(
          "flex",
          orientation === "row"
            ? "items-center gap-1"
            : "flex-col gap-0.5 border-t border-border pt-4",
        )}
      >
        {navItems.map((item, index) => {
          const isActive = activeId === item.href.replace("#", "");

          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group inline-flex items-baseline gap-1.5 px-2 font-mono text-xs whitespace-nowrap transition-colors outline-none hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring/50",
                  orientation === "column" && "py-2.5 text-sm",
                  isActive ? "text-foreground" : "text-muted-foreground",
                  itemClassName,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "text-primary transition-opacity",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                >
                  /
                </span>
                <span className="tabular-nums text-muted-foreground/60 group-hover:text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label.toLowerCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
