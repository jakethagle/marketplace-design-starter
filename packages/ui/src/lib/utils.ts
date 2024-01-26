import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
