"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@repo/ui";
import { useState } from "react";
import { classNames } from "../lib/utils";

export default function Banner(): React.ReactElement {
  const [show, setShow] = useState(true);
  return (
    <div
      className={classNames(
        "flex items-center gap-x-6 bg-accent text-accent-foreground px-6 py-1 sm:px-3.5 sm:before:flex-1",
        !show ? "hidden" : ""
      )}
    >
      <div className="text-sm leading-6 text-secondary-foreground w-full">
        <div>
          <div className="flex flex-row justify-between max-w-4xl mx-auto">
            <strong className="font-semibold">Salesforce is live!</strong>
            <span className="">🚀 </span>
            <span>
              See how our new Salesforce integration can transform your business
              through automation and real-time analytics.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={() => {
            setShow(false);
          }}
          variant="ghost"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="h-5 w-5 " />
        </Button>
      </div>
    </div>
  );
}
