"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function BreadcrumbNav({
  label,
  id,
}: {
  label: string;
  id: string;
}): JSX.Element {
  return (
    <div className="relative ">
      <div className="">
        <nav aria-label="Back" className="sm:hidden">
          <Link
            className="flex items-center text-sm font-medium "
            href="/integrations/marketplace"
          >
            <ChevronLeftIcon
              aria-hidden="true"
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 "
            />
            Back
          </Link>
        </nav>
        <nav
          aria-label="Breadcrumb"
          className="hidden sm:flex sm:flex-row sm:items-start"
        >
          <ol className="flex items-center">
            <li>
              <div className="flex">
                <Link
                  className="text-sm font-medium hover:underline"
                  href="/integrations/marketplace"
                >
                  Marketplace
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 "
                />
                <Link
                  className="text-sm font-medium hover:underline capitalize"
                  href={`/integrations/marketplace/${id}`}
                >
                  {label}
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
