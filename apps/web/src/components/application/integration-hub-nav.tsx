"use client";
import { classNames } from "@/lib/utils";
import {
  ComputerDesktopIcon,
  DocumentTextIcon,
  SquaresPlusIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/integrations", icon: ComputerDesktopIcon },
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
    <div className="lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-background px-6">
        <div className="text-sm capitalize font-semibold text-muted-foreground pt-4">
          Integration Hub
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      className={classNames(
                        item.href === pathName
                          ? "bg-primary/5 text-primary"
                          : "text-muted-foreground hover:text-primary hover:bg-gray-50",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                      )}
                      href={item.href}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          item.href === pathName
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary",
                          "h-6 w-6 shrink-0",
                        )}
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li />
          </ul>
        </nav>
      </div>
    </div>
  );
}
