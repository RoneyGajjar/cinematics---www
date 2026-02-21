/**
 * Merges class names — lightweight alternative to clsx/tailwind-merge.
 * Filters out falsy values and joins with a space.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
