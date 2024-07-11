"use client";
import { classNames } from "@/lib/utils";
import {
  ComputerDesktopIcon,
  DocumentTextIcon,
  SquaresPlusIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

function isActivePath(pathName: string, href: string): boolean {
  const urlParts = href.split("/");
  if (urlParts.length > 2) {
    return pathName.startsWith(href);
  }
  return pathName === href;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/integrations",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Designer",
    href: "/integrations/designer",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Marketplace",
    href: "/integrations/marketplace",
    icon: SquaresPlusIcon,
  },
  {
    name: "Logs",
    href: "/integrations/logs",
    icon: DocumentTextIcon,
  },
];
export function IntegrationHubNav(): JSX.Element {
  const pathName = usePathname();

  return (
    <nav className="flex-none px-4 sm:px-6">
      <ul className="flex gap-x-3 gap-y-1 whitespace-nowrap 2xl:flex-col">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              className={classNames(
                isActivePath(pathName, item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:text-primary hover:bg-primary/5",
                "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold",
              )}
              href={item.href}
            >
              <item.icon
                aria-hidden="true"
                className={classNames(
                  isActivePath(pathName, item.href)
                    ? "text-primary"
                    : "text-foreground group-hover:text-primary",
                  "h-6 w-6 shrink-0",
                )}
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
