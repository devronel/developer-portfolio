import { cn } from "cn";
import type { ComponentProps } from "react";

/** Shared horizontal rhythm: `max-w-5xl` with responsive gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-6", className)}
      {...props}
    />
  );
}
