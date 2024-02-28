"use client";
import { classNames } from "@/lib/utils";
import { PrismaticAvatar } from "@/prismatic/components/prismatic-avatar";
import type { MarketplaceFilter } from "@/types";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import type { Integration } from "@repo/prismatic-js";
import { Button } from "@repo/ui";
import Link from "next/link";
import { Fragment } from "react";

const sortOptions = [
  { name: "Active", href: "#", current: true },
  { name: "Newest", href: "#", current: false },
  { name: "Name", href: "#", current: false },
];

export function MarketplaceHeader(): React.ReactNode {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">
        Integration Marketplace
      </h1>
      <p className="mt-4 text-base text-foreground">
        Connect your tech stack through our marketplace of pre-built
        integrations
      </p>
    </div>
  );
}

export function GridActions(): React.ReactNode {
  return (
    <div className="flex items-center">
      {/* Sort Menu */}
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
      {/* LayoutToggle */}
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

export function GridPagination(): React.ReactNode {
  return (
    <nav className="flex items-center justify-between border-t px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-muted-foreground hover:border-foreground/70 hover:text-foreground"
          href="/marketplace/#"
        >
          <ArrowLongLeftIcon
            aria-hidden="true"
            className="mr-3 h-5 w-5 text-muted-foreground"
          />
          Previous
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <Link
            className={classNames(
              `inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium hover:border-foreground/70 hover:text-foreground text-muted-foreground`,
              number === 1 ? "border-primary text-primary" : "",
            )}
            href="/marketplace/#"
            key={number}
          >
            {number}
          </Link>
        ))}

        {/* Current: "border-primary/90 text-primary", Default: "border-transparent text-muted-foreground hover:text-gray-700 hover:border-muted-foreground/70" */}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-muted-foreground hover:border-muted-foreground/70 hover:text-gray-700"
          href="/marketplace/#"
        >
          Next
          <ArrowLongRightIcon
            aria-hidden="true"
            className="ml-3 h-5 w-5 text-gray-400"
          />
        </Link>
      </div>
    </nav>
  );
}
export function CategoryFilters({
  categories,
  filters,
}: {
  categories: string[];
  filters: MarketplaceFilter[];
}): React.ReactNode {
  return (
    <form className="hidden lg:block">
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
                href={`/marketplace?category=${category.id}`}
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

export function Grid({
  listings,
}: {
  listings: Integration[];
}): React.ReactNode {
  return (
    <div className="lg:col-span-3">
      <div className="">
        <div className="lg:mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-3">
            {listings.map((listing) => (
              <Link
                href={`/marketplace/${listing.name.toLowerCase()}`}
                key={listing.id}
              >
                <div className="group relative" key={listing.id}>
                  <div className="p-4 overflow-hidden rounded-lg bg-gradient-to-b from-green-200/10 to-green-500/10">
                    <div className="aspect-h-3 aspect-w-4 mx-auto">
                      <PrismaticAvatar
                        avatarUrl={listing.avatarUrl as unknown as string}
                      />
                      <div
                        aria-hidden="true"
                        className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                      >
                        <div className=" border border-muted-foreground/70 w-full rounded-md bg-secondary bg-opacity-80 px-4 py-2 text-center text-sm font-medium backdrop-blur backdrop-filter ring ring-inset ring-secondary">
                          View Integration
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium ">
                    <h3>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {listing.name}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium inline-flex items-center rounded-md bg-secondary text-secondary-foreground ring-1 ring-inset ring-secondary/10">
                      {listing.category}
                    </span>
                  </div>
                  <p className="mt-1 text-sm ">{listing.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface MarketplaceGridProps {
  categories: string[];
  listings: Integration[];
  filters: MarketplaceFilter[];
}
export function MarketplaceGrid({
  filters,
  categories,
  listings,
}: MarketplaceGridProps): React.ReactNode {
  return (
    <>
      <div className="flex items-end justify-between border-b pb-6 pt-6">
        <MarketplaceHeader />
        <GridActions />
      </div>
      <section aria-labelledby="marketplace-headings" className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <CategoryFilters categories={categories} filters={filters} />
          <Grid listings={listings} />
          <div className="mt-6 lg:col-start-2 lg:col-span-3 lg:mt-0">
            <GridPagination />
          </div>
        </div>
      </section>
    </>
  );
}
