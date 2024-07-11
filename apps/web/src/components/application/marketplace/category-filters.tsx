"use client";
import type { MarketplaceFilter } from "@/types";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export function CategoryFilters({
  categories,
  filters,
}: {
  categories: string[];
  filters: MarketplaceFilter[];
}): JSX.Element {
  return (
    <form className="hidden lg:block lg:min-w-[220px]">
      <ul className="space-y-4 border-b  pb-6 text-sm font-medium ">
        {filters
          // .filter((c) => c.highlight)
          .map((category, i) => (
            // eslint-disable-next-line react/no-array-index-key -- skip
            <li key={`${category.id}-${i}`}>
              <Link
                className={
                  category.id === "all" ? "text-primary underline" : ""
                }
                href={`/integrations/marketplace?category=${category.id}`}
              >
                {category.label}
              </Link>
            </li>
          ))}
      </ul>

      <Disclosure as="div" className="border-b py-6" defaultOpen>
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between  py-3 text-sm hover:text-primary">
                <span className="font-medium ">Categories</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusIcon aria-hidden="true" className="h-5 w-5" />
                  ) : (
                    <PlusIcon aria-hidden="true" className="h-5 w-5" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                {categories.map((option, optionIdx) => (
                  <div className="flex items-center" key={option}>
                    <input
                      className="h-4 w-4 rounded border text-primary focus:ring-ring"
                      id={`filter-${option}-${optionIdx}`}
                      name={`${option}[]`}
                      type="checkbox"
                    />
                    <label
                      className="ml-3 text-sm cursor-pointer"
                      htmlFor={`filter-${option}-${optionIdx}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </form>
  );
}
