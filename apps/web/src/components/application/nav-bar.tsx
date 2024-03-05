/* eslint-disable @next/next/no-img-element  -- skip*/
"use client";

import { Switch } from "@headlessui/react";
import { Button } from "@repo/ui";
import Link from "next/link";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";
import { useEffect, useState } from "react";
import { classNames } from "../../lib/utils";
import prismaticConfig from "../../prismatic/constants/config";
import UserMenu from "../common/user-menu";

const navigation = [
  { name: "Home", href: "/", segment: null },
  {
    name: "Integrations",
    href: "/integrations",
    segment: "integrations",
  },
  { name: "Example", href: "/example", segment: "example" },
];

export function CustomToggle(): JSX.Element {
  const params = useSearchParams();
  const [enabled, setEnabled] = useState(Boolean(params.get("custom")));
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
export default function Navbar(): JSX.Element {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-2 h-14">
      <div className="flex justify-between">
        <div className="flex">
          <div className="hidden sm:flex flex-row items-center">
            <img
              alt=""
              className="inline-block h-6 w-6 rounded-full mr-2"
              src="/favicon.ico"
            />
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
        <div className="ml-12 flex flex-row justify-end items-center gap-x-2">
          <UserMenu />
          <CustomToggle />
        </div>
      </div>
    </div>
  );
}
