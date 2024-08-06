import { classNames } from "@/lib/utils";
import { PrismaticAvatar } from "@/prismatic/components/prismatic-avatar";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { Button } from "@repo/ui";
import ConnectionStatus from "./connection-status";
import Link from "next/link";
import { getMarketplaceIntegration } from "@/lib/server";

const stats = [
  {
    name: "Active Alert Monitors",
    value: "0",
    change: "-2.5%",
    changeType: "positive",
  },
  {
    name: "Records Synced",
    value: "1035",
    change: "+5.2%",
    changeType: "positive",
  },
  {
    name: "Unexpected Errors",
    value: "4",
    change: "-3.39%",
    changeType: "positive",
  },
];

export default async function IntegrationCard({
  integrationId,
}: {
  integrationId: string;
}): Promise<JSX.Element> {
  const integration = await getMarketplaceIntegration(integrationId);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow mb-10">
      <h2 id="profile-overview-title" className="sr-only">
        Profile Overview
      </h2>
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between h-full">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <div className="p-4 overflow-hidden rounded-lg bg-gradient-to-b from-primary/5 to-primary/10 min-w-fit">
                <div className="aspect-h-4 aspect-w-4 mx-auto h-20 w-20 rounded-full">
                  {integration?.avatarUrl ? (
                    <PrismaticAvatar avatarUrl={integration.avatarUrl} />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {integration.name}
              </p>
              <p className="text-sm font-medium text-gray-600">
                {integration.description}
              </p>
              <p className="text-sm font-medium text-gray-600 mt-1">
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm  text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  {integration.category}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start sm:mt-0 sm:flex-row sm:gap-x-2 h-full">
            <Link
              href={`/integrations/marketplace/${integration.id}/configure`}
            >
              <Button variant={"outline"}>
                {integration.deployed ? "Settings" : "Activate"}
                <Cog8ToothIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full p-6 pt-0">
        <ConnectionStatus />
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-6 sm:px-6 xl:px-8"
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">
              {stat.name}
            </dt>
            <dd
              className={classNames(
                stat.changeType === "negative"
                  ? "text-rose-600"
                  : "text-green-600",
                "text-xs font-medium",
              )}
            >
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
