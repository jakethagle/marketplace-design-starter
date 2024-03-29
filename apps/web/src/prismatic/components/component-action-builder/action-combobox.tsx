"use client";

import Combobox from "@/components/common/combobox";
import LoadingSpinner from "@/components/common/loading-spinner";
import type { Action } from "@repo/prismatic-js";

export default function ActionCombobox({
  actions,
  selected,
}: {
  actions: Action[];
  selected?: Action;
}): JSX.Element {
  if (actions.length === 0) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <Combobox
      label="Integration Actions"
      onChange={(value) => {
        // eslint-disable-next-line no-console -- testing
        console.log("pushing to router", value);
      }}
      options={actions.map((a) => ({ key: a.id, label: a.label }))}
      selected={
        selected ? { key: selected.id, label: selected.label } : undefined
      }
    />
  );
}
