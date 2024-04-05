"use client";
import { classNames } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { Fragment, Suspense } from "react";

function tabStyle(selected: boolean): string {
  return classNames(
    selected ? "bg-primary text-primary-foreground" : "",
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  );
}
export interface TabProp {
  panel: JSX.Element;
  label: string;
  key: string;
}

export default function TabGroup({ tabs }: { tabs: TabProp[] }): JSX.Element {
  return (
    <Suspense fallback={null}>
      <div className=" w-full h-full lg:col-span-4 lg:mt-0 ">
        <Tab.Group as="div" className="h-full">
          <Tab.List className="inline-flex h-9 items-center justify-center rounded bg-muted p-1 text-muted-foreground">
            {tabs.map((tab) => (
              <Tab
                className={({ selected }) => tabStyle(selected)}
                key={tab.key}
              >
                {tab.label}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels as={Fragment}>
            {tabs.map((tab) => (
              <Tab.Panel
                className="h-full text-sm text-muted-foreground mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                key={tab.key}
              >
                {tab.panel}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Suspense>
  );
}
