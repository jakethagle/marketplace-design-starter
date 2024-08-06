"use client";
import { classNames } from "@/lib/utils";
import { PrismaticAvatar } from "@/prismatic/components/prismatic-avatar";
import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import GridToggle from "./grid-toggle";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import prismatic from "@prismatic-io/embedded";

export function CustomToggle({ deployed }: { deployed: boolean }): JSX.Element {
  const [enabled, setEnabled] = useState<boolean>(deployed);
  return (
    <Switch
      checked={enabled}
      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      onChange={setEnabled}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-full w-full rounded-md bg-background"
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "bg-primary" : "bg-muted-foreground",
          "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out",
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-background shadow ring-0 transition-transform duration-200 ease-in-out",
        )}
      />
    </Switch>
  );
}

export function GridItemV2(listing: {
  id: string;
  name: string;
  description: string;
  category: string | null;
  deployed: boolean;
  avatarUrl: string | null;
}): JSX.Element {
  const router = useRouter();
  const [enabled, setEnabled] = useState(listing.deployed);
  // useEffect(() => {
  //   if (listing.deployed !== enabled) {
  //     setEnabled(listing.deployed);
  //   }
  // }, [listing.deployed]);

  function handleSetEnabled(checked: boolean): void {
    if (!checked && enabled) {
      setEnabled(false);
    }
    if (checked && !enabled) {
      setEnabled(checked);
      prismatic.configureIntegration({
        integrationId: listing.id,
        skipRedirectOnRemove: false,
        usePopover: true,
        theme: "LIGHT",
        screenConfiguration: {
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
          instance: {
            hideBackToMarketplace: true,
          },
          configurationWizard: {
            triggerDetailsConfiguration: "hidden",
            isInModal: true,
          },
        },
      });
      router.refresh();
    } else if (!checked && enabled) {
      setEnabled(checked);
      // prismatic.graphqlRequest()
    }
  }
  const handleViewDetails = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ): void => {
    event.preventDefault();
    prismatic.configureInstance({
      integrationName: listing.name,
      skipRedirectOnRemove: false,
      usePopover: true,
      screenConfiguration: {
        instance: {
          hideBackToMarketplace: true,
        },
        configurationWizard: {
          triggerDetailsConfiguration: "hidden",
          isInModal: true,
        },
      },
    });
  };

  return (
    <Link href={`/integrations/${listing.id}`}>
      <div className="h-full overflow-hidden border-border border rounded-lg bg-background text-card-foreground hover:shadow-md hover:cursor-pointer transition-shadow ease-in-out flex flex-col justify-start gap-y-2 flex-grow">
        <div className="pt-4 px-4 sm:px-6">
          <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-2">
              <div className="p-4 overflow-hidden rounded-lg bg-gradient-to-b from-primary/5 to-primary/10 min-w-fit">
                <div className="aspect-h-4 aspect-w-4 mx-auto h-10 w-10">
                  <PrismaticAvatar avatarUrl={listing.avatarUrl} />
                </div>
              </div>
            </div>
            <div className="hidden text-gray-500 md:block md:ml-4 md:mt-2 md:flex-shrink-0">
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm  text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {listing.category}
              </span>
            </div>
          </div>
        </div>
        <div className="md:mt-2 px-4 sm:px-6 min-h-[80px] flex-1">
          <h4 className="text-xl font-medium tracking-tight leading-8">
            {listing.name}
          </h4>
          <p className="hidden text-gray-500 md:block">{listing.description}</p>
        </div>
        <div className="border-t border-border flex flex-row justify-between items-center px-4 sm:px-6 py-4">
          <Button
            onClick={(e) => handleViewDetails(e)}
            className={classNames(enabled ? "border-primary" : "")}
            variant="outline"
            disabled={!enabled}
          >
            <Cog8ToothIcon className="h-5 w-5 sm:mr-1" />
            <span className="hidden sm:block">Manage</span>
          </Button>

          <GridToggle
            onChange={(checked) => {
              handleSetEnabled(checked);
            }}
            active={enabled}
          />
        </div>
      </div>
    </Link>
  );
}
