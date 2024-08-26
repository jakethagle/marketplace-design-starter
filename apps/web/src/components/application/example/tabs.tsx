"use client";
import { classNames } from "@/lib/utils";
import { Tab } from "@headlessui/react";

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
    <Tab.Group>
      <Tab.List className="border-b pb-2">
        {tabs.map((tab) => (
          <Tab className={({ selected }) => tabStyle(selected)} key={tab.key}>
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className={"flex-1 h-full max-h-full"}>
        {tabs.map((tab) => (
          <Tab.Panel
            className="h-full w-full px-2 py-6 max-w-full flex-1"
            key={tab.key}
          >
            {tab.panel}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
