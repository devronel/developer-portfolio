import type { VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { AnchorHTMLAttributes } from "react";

import { buttonVariants } from "@/components/ui/button";

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonVariants {}

/**
 * An anchor styled like a button.
 *
 * Links should stay links: using the interactive `Button` with a `render` prop
 * adds `role="button"` and overrides link semantics, so we apply the variant
 * classes to a real `<a>` instead.
 */
export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
