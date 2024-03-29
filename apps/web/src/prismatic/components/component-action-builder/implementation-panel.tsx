"use client";
import Combobox from "@/components/common/combobox";
import LoadingSpinner from "@/components/common/loading-spinner";
import type { Action, Component, InputField } from "@repo/prismatic-js";
import { Button } from "@repo/ui";
import { useState } from "react";

export default function ImplementationPanel({
  component,
}: {
  component: Component;
}): JSX.Element {
  const [selected, setSelected] = useState<Action>();
  if (!component.actions.nodes.length) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-4 border rounded-md gap-y-4 flex flex-col">
      <div className="flex-col flex-1">
        {/* <div className="grid grid-flow-col gap-x-4 items-end"> */}
        <Combobox
          label="Integration Actions"
          onChange={(value) => {
            setSelected(
              component.actions.nodes.find((a) => a?.id === value.key) ||
                undefined,
            );
          }}
          options={component.actions.nodes.map((a: Action) => ({
            key: a.id,
            label: a.label,
          }))}
          selected={
            selected ? { key: selected.id, label: selected.label } : undefined
          }
        />

        {/* </div> */}
        <p className="text-[0.9rem] leading-7 text-muted-foreground">
          Select the integration action to configure or add a new one
        </p>
      </div>
      {selected?.key ? (
        <div>
          <span className="block font-semibold leading-6 text-gray-900">
            Inputs
          </span>
          <p className="text-[0.9rem] text-muted-foreground">
            Configure the inputs to be used for data requests
          </p>
          <div className="h-1 w-full border-b border-border" />
          <form className="py-4">
            <ul>
              {selected.inputs.nodes
                .filter((i) => i !== null)
                .map((i: InputField) => {
                  return (
                    <div className="grid gap-y-2 py-2" key={i.key}>
                      <span className="block text-sm font-medium leading-6 text-foreground">
                        {i.label}
                      </span>
                      <input className="ring-1 ring-border rounded-md p-1" />
                    </div>
                  );
                })}
            </ul>
            <div className="flex flex-row justify-end p-2">
              <Button variant="default">Save</Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}
