"use client";

import { Switch } from "@headlessui/react";
import { classNames } from "@/lib/utils";

export default function GridToggle({
  active,
  onChange,
}: {
  active: boolean;
  onChange: (checked: boolean) => void;
}): JSX.Element {
  const handleEnabled = (checked: boolean): void => {
    onChange(checked);
  };

  return (
    <Switch
      checked={active}
      onChange={handleEnabled}
      className="group relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 hover:bg-gray- hover:ring-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ui-checked:bg-indigo-600"
    >
      {({ checked }) => (
        <>
          <span className="sr-only">Use setting</span>
          <span
            className={classNames(
              "pointer-events-none relative inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ",
              checked ? "translate-x-5" : "",
            )}
          >
            <span
              aria-hidden="true"
              className={
                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ui-checked:opacity-0 ui-checked:duration-100 ui-checked:ease-out"
              }
            >
              <svg
                fill="none"
                viewBox="0 0 12 12"
                className="h-4 w-4 text-gray-400"
              >
                <path
                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out ui-checked:opacity-100 ui-checked:duration-200 ui-checked:ease-in"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 12 12"
                className="h-4 w-4 text-indigo-600"
              >
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>
          </span>
        </>
      )}
    </Switch>
  );
}
