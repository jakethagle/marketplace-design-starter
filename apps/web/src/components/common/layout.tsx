"use client";

import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../application/nav-bar";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Team", href: "#", icon: UsersIcon },
  { name: "Projects", href: "/example", icon: FolderIcon },
  {
    name: "Integrations",
    href: "/integrations",
    icon: PuzzlePieceIcon,
    current: false,
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function MultiLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const selected = useSelectedLayoutSegments();

  return (
    <div className="h-full">
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <Dialog.Backdrop className="fixed inset-0 bg-primary/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />

        <div className="fixed inset-0 flex">
          <Dialog.Panel
            //   transition=
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <Transition show={sidebarOpen}>
              <Transition.Child>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-foreground"
                    />
                  </button>
                </div>
              </Transition.Child>
            </Transition>

            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-2 ring-1 ring-background/10">
              <div className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-6 w-6 shrink-0"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="-mx-2 flex-1 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          !selected.includes(item.href.split("/")[1])
                            ? "bg-primary/80 text-primary-foreground"
                            : "text-primary-foreground/90 hover:bg-primary/80 hover:text-primary-foreground",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20  lg:bg-background lg:pb-2 lg:drop-shadow-xl">
        <div className="flex h-16 shrink-0 items-center justify-center">
          <img alt="" className="h-9 auto " src="/favicon.ico" />
        </div>
        <nav className="mt-8">
          <ul
            role="list"
            className="flex flex-col items-center justify-center space-y-1"
          >
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  as={item.href}
                  href={item.href}
                  className={classNames(
                    selected.includes(item.href.split("/")[1]) ||
                      (item.href === "/" && selected.length === 0)
                      ? "bg-primary text-primary-foreground"
                      : "text-black-foreground/80 hover:bg-primary/80 hover:text-primary-foreground",
                    "group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6 ",
                  )}
                >
                  <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main className="lg:pl-20 relative overflow-hidden max-h-screen">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
