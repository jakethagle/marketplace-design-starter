"use client";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { classNames } from "../../lib/utils";
import Marketplace from "../../prismatic/components/embedded-iframe";

function tabStyle(selected: boolean): string {
  return classNames(
    selected
      ? "border-primary text-primary"
      : "border-transparent  hover:border-muted-foreground",
    "whitespace-nowrap border-b-2 py-4 text-sm font-medium outline-none transition-colors",
  );
}
export default function SettingsTabs(): JSX.Element {
  return (
    <div className=" w-full h-full lg:col-span-4 lg:mt-0">
      <Tab.Group as="div">
        <div className="border-b">
          <Tab.List className="-mb-px flex space-x-8">
            <Tab
              className={({ selected }) => tabStyle(selected)}
              key="configuration"
            >
              Configuration
            </Tab>
            <Tab
              className={({ selected }) => tabStyle(selected)}
              key="field-mappings"
            >
              Field Mappings
            </Tab>
            <Tab
              className={({ selected }) => tabStyle(selected)}
              key="import-export"
            >
              Import/Export
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          <Tab.Panel
            className="text-sm text-muted-foreground"
            key="configuration"
          >
            <div className="h-[900px] pt-8">
              <Marketplace integration="" mode="Integration" />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className="text-sm text-muted-foreground"
            key="field-mappings"
          >
            <h3 className="sr-only">Field Mappings</h3>
          </Tab.Panel>
          <Tab.Panel
            className="text-sm text-muted-foreground"
            key="import-export"
          >
            {/* <IntegrationTable instance={undefined} records={[]} /> */}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
