"use client";

import { Switch } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { classNames } from "@/lib/utils";
import prismaticConfig from "@/prismatic/constants/config";
import UserMenu from "./user-menu";

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
      onChange={setEnabled}
      className="group relative inline-flex h-7 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 data-[checked]:bg-primary"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-full w-full rounded-md bg-background"
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "bg-primary" : "bg-gray-300",
          "pointer-events-none absolute mx-auto h-6 w-10 rounded-full transition-colors duration-200 ease-in-out",
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none absolute left-0 inline-block h-6 w-6 transform rounded-full border border-gray-200 bg-background shadow ring-0 transition-transform duration-200 ease-in-out",
        )}
      />
    </Switch>
  );
}
export default function Navbar(): JSX.Element {
  return (
    <div className="mx-auto py-4 px-6 sm:px-8 lg:px-10 ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="hidden flex-row items-center md:flex ">
            <Link href="/website">
              <h3 className="text-xl font-semibold text-center tracking-wide leading-8 text-foreground">
                {prismaticConfig.name?.replaceAll("Demo", "")}
              </h3>
            </Link>
          </div>
        </div>
        <div className="ml-12 flex flex-row justify-end items-center gap-x-2 lg:gap-x-4">
          <UserMenu />
          <CustomToggle />
        </div>
      </div>
    </div>
  );
}
