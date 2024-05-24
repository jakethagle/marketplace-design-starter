"use client";

import type { TabProp } from "@/components/application/example/tabs";
import TabGroup from "@/components/application/example/tabs";
import Combobox from "@/components/common/combobox";
import LoadingSpinner from "@/components/common/loading-spinner";
import EmbeddediFrame from "@/prismatic/components/embedded-iframe";
import type { Component, Integration } from "@repo/prismatic-js";
import { useState } from "react";
import Implementation from "./implementation-panel";

export default function ComponentActionBuilder({
  components,
}: {
  components: Component[];
  integrations?: Integration[];
}): JSX.Element {
  const [selected, setSelected] = useState<Component>();

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <h3 className="text-xl tracking-tight font-semibold">Data Requests</h3>
        <p className="text-sm text-muted-foreground">
          Choose the external data request to configure
        </p>
        <br />
        {components.length >= 1 ? (
          <Combobox
            label="Available Integrations"
            onChange={(value) => {
              setSelected(components.find((c) => c.id === value.key));
            }}
            options={components.map((c) => ({ key: c.id, label: c.label }))}
            selected={selected}
          />
        ) : (
          <LoadingSpinner />
        )}
        {selected ? (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-1 gap-x-2 mt-2">
              {/* <Button
                className={`${true ? "!bg-emerald-500" : ""}`}
                disabled={!selected}
              >
                <CheckBadgeIcon className="h-5 w-5 mr-2" />
                Connected
              </Button>
              <Button className="" variant="outline">
                Test
              </Button> */}
            </div>
            <BuilderTabs component={selected} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function BuilderTabs({
  component,
}: {
  component: Component;
}): JSX.Element {
  const _tabs: TabProp[] = [
    {
      panel: <Implementation component={component} />,
      label: "Implementation",
      key: "request",
    },
    {
      panel: <div>Response Settings</div>,
      label: "Configure Response",
      key: "response",
    },
    {
      panel: (
        <div className="h-[900px]">
          <EmbeddediFrame
            integration="Component Action Builder"
            mode="Integration"
          />
        </div>
      ),
      label: "Testing/Logs",
      key: "logs",
    },
  ];

  return <TabGroup tabs={_tabs} />;
}
