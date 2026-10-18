/** Keyboard users land here first; hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-foreground"
    >
      Skip to content
    </a>
  );
}
