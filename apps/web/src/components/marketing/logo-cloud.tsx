"use client";

import { customers } from "@/prismatic/constants/config";

export default function LogoCloud(): JSX.Element {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold tracking-tight leading-8 text-foreground">
          Trusted by the world’s most innovative teams
        </h2>
        <div
          className={`mx-auto grid grid-cols-${customers.length} items-center gap-x-8 lg:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-${customers.length}`}
        >
          {customers.map((c) => (
            <div className="p-8 sm:p-10" key={c.name}>
              <div
                className="h-12 max-h-12 w-full flex justify-center items-center"
                key={c.name}
              >
                <h3 className="text-2xl font-bold tracking-tight">{c.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
