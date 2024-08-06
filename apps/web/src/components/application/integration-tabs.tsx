"use client";
import { classNames } from "@/lib/utils";
import { Tab } from "@headlessui/react";

function tabStyle(selected: boolean): string {
  return classNames(
    selected
      ? "bg-background text-foreground shadow-sm"
      : "hover:text-foreground hover:bg-background",
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mx-1",
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
      <Tab.List className="mx-4 sm:mx-6 lg:mx-8 grid w-full grid-cols-4 items-center justify-center rounded-md bg-gray-200 p-1 text-muted-foreground max-w-fit mb-2">
        {tabs.map((tab) => (
          <Tab className={({ selected }) => tabStyle(selected)} key={tab.key}>
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels
        className={"flex-1 h-[calc(100vh_-_110px)] max-h-fit pb-2 border-t-2"}
      >
        {tabs.map((tab) => (
          <Tab.Panel
            className="flex-1 h-full max-h-full overflow-y-auto relative"
            key={tab.key}
          >
            {tab.panel}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
