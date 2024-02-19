"use client";

import { Switch } from "@headlessui/react";
import { Button } from "@repo/ui";
import Link from "next/link";
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from "next/navigation";
import React, { useEffect, useState } from "react";
import { classNames } from "../lib/utils";
import prismaticConfig from "../prismatic/constants/config";

const navigation = [
  { name: "Dashboard", href: "/", segment: null },
  {
    name: "Marketplace",
    href: "/marketplace",
    segment: "marketplace",
  },
  { name: "Designer", href: "/designer", segment: "designer" },
  { name: "Example", href: "/example", segment: "example" },
];

export function CustomToggle(): React.ReactNode {
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (enabled) {
      router.push(`${pathname}?custom=true`);
    } else {
      router.push(`${pathname}?custom=false`);
    }
  }, [enabled, pathname, router]);
  return (
    <Switch
      checked={enabled}
      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      onChange={setEnabled}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-full w-full rounded-md bg-white"
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "bg-primary" : "bg-muted-foreground",
          "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out",
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out",
        )}
      />
    </Switch>
  );
}
export default function Navbar(): React.ReactNode {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 h-14">
      <div className="flex justify-between">
        <div className="flex">
          <div className="hidden sm:flex flex-row items-center">
            <Link href="/website">
              <h3 className="text-xl font-bold leading-7 tracking-tight text-end">
                {prismaticConfig.name?.replaceAll("Demo", "")}
              </h3>
            </Link>
          </div>
          <div className="sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <Button
                    className="bg-opacity-70"
                    size="default"
                    variant={
                      activeSegment === item.segment ? "default" : "ghost"
                    }
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-12 flex flex-row justify-end items-center">
          <CustomToggle />
          <div>
            <Link href="/login">
              <Button
                className="ml-12 bg-opacity-70"
                size="default"
                variant="outline"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
