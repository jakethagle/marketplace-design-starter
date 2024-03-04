import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function ExamplePageHeader({
  integration,
}: {
  integration: string;
}): JSX.Element {
  return (
    <div>
      <div>
        <nav aria-label="Back" className="sm:hidden">
          <Link
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            href="/marketplace"
          >
            <ChevronLeftIcon
              aria-hidden="true"
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
            />
            Back
          </Link>
        </nav>
        <nav aria-label="Breadcrumb" className="hidden sm:flex">
          <ol className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  href="/"
                >
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                />
                <Link
                  className="ml-4 text-sm font-medium text-muted-foreground hover:text-foreground"
                  href="/marketplace"
                >
                  Marketplace
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                />
                <Link
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-muted-foreground hover:text-foreground"
                  href={`/integrations/marketplace/${integration}/settings`}
                >
                  {integration}
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {integration}
          </h2>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
          <button
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            type="button"
          >
            Settings
          </button>
          <button
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="button"
          >
            Connected
          </button>
        </div>
      </div>
    </div>
  );
}
