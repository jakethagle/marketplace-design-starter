import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function IntegrationPageHeader({
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
    </div>
  );
}
