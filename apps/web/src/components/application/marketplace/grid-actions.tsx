"use client";
import { classNames } from "@/lib/utils";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Button } from "@repo/ui";
import Link from "next/link";
import { Fragment } from "react";

export const sortOptions = [
  { name: "Active", href: "#", current: true },
  { name: "Newest", href: "#", current: false },
  { name: "Name", href: "#", current: false },
];
export function GridActions(): JSX.Element {
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex flex-row px-2 py-1 hover:bg-accent hover:text-accent-foreground rounded-md">
          Sort
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 bg-popover text-popover-foreground origin-top-right rounded-md shadow-lg border">
            <div className="py-1">
              {sortOptions.map((option) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <Link
                      className={classNames(
                        active ? "text-primary" : "",
                        "block px-4 py-2 text-sm rounded-sm transition-colors focus:bg-accent focus:text-accent-foreground outline-none",
                      )}
                      href={option.href}
                    >
                      {option.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Button className="ml-2" size="sm" variant="ghost">
        <Squares2X2Icon className="h-4 w-4" />
      </Button>
      {/* Mobile Filter */}
      <Button
        className="sm:ml-2 lg:hidden"
        size="icon"
        type="button"
        variant="outline"
      >
        <FunnelIcon aria-hidden="true" className="h-4 w-4" />
      </Button>
    </div>
  );
}
