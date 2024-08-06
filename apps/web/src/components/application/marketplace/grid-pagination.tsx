"use client";
import { classNames } from "@/lib/utils";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export function GridPagination(): JSX.Element {
  return (
    <nav className="flex items-center justify-between border-t px-4 sm:px-0 mt-10">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-muted-foreground hover:border-foreground/70 hover:text-foreground"
          href="/marketplace/#"
        >
          <ArrowLongLeftIcon
            aria-hidden="true"
            className="mr-3 h-5 w-5 text-muted-foreground"
          />
          Previous
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <Link
            className={classNames(
              `inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium hover:border-foreground/70 hover:text-foreground text-muted-foreground`,
              number === 1 ? "border-primary text-primary" : "",
            )}
            href="/marketplace/#"
            key={number}
          >
            {number}
          </Link>
        ))}

        {/* Current: "border-primary/90 text-primary", Default: "border-transparent text-muted-foreground hover:text-gray-700 hover:border-muted-foreground/70" */}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-muted-foreground hover:border-muted-foreground/70 hover:text-gray-700"
          href="/marketplace/#"
        >
          Next
          <ArrowLongRightIcon
            aria-hidden="true"
            className="ml-3 h-5 w-5 text-gray-400"
          />
        </Link>
      </div>
    </nav>
  );
}
