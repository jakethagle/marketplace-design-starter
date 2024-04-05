"use client";

import Combobox from "@/components/common/combobox";
import LoadingSpinner from "@/components/common/loading-spinner";
import type { Component } from "@repo/prismatic-js";

export default function ComponentCombobox({
  components,
}: {
  components: Component[];
  selected?: Component;
}): JSX.Element {
  if (components.length === 0) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <Combobox
      label="Available Integrations"
      onChange={(value) => {
        // eslint-disable-next-line no-console -- testing
        console.log("pushing to router", value);
      }}
      options={components.map((c) => ({ key: c.id, label: c.label }))}
      selected={{ key: components[0].id, label: components[0].label }}
    />
  );
}
