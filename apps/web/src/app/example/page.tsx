import IntegrationTable from "@/components/example/integration-table";
import type { TabProp } from "@/components/example/tabs";
import ExamplePageTabs from "@/components/example/tabs";
import LoadingSpinner from "@/components/loading-spinner";
import Marketplace from "@/prismatic/components/embedded-marketplace";
import { prismaticMarketplace } from "@/prismatic/lib";
import type { Instance } from "@repo/prismatic-js";
import { Suspense } from "react";

export interface Record {
  id: number;
  name: string;
  status: string;
  updated: string;
  message: string;
  isCurrent: boolean;
}
export function getRecords(): Record[] {
  return [
    {
      id: 1,
      name: "Invoice-13456",
      status: "Awaiting Payment",
      updated: "7 Minutes Ago",
      message: "",
      isCurrent: false,
    },
    {
      id: 2,
      name: "Invoice-13457",
      status: "Paid",
      updated: "7 Minutes Ago",
      message: "",
      isCurrent: false,
    },
  ];
}
async function getMarketplaceIntegration(
  integration: string,
): Promise<{ nodes?: Instance[] }> {
  const { client } = await prismaticMarketplace();
  const {
    marketplaceIntegrations: { nodes },
  } = await client.query({
    __name: "MarketplaceIntegration",
    marketplaceIntegrations: {
      __args: { activated: true, name: integration },
      nodes: {
        __scalar: true,
        instances: {
          __args: { enabled: true, name: integration },
          nodes: {
            __scalar: true,
            flowConfigs: {
              nodes: {
                flow: {
                  name: true,
                },
                __scalar: true,
              },
            },
          },
        },
      },
    },
  });
  return nodes[0]?.instances as unknown as { nodes: Instance[] };
}

export default async function ExamplePage({
  searchParams,
}: {
  searchParams: { integration: string | undefined };
}) {
  const integration = searchParams.integration || "Salesforce";
  const { nodes } = await getMarketplaceIntegration(integration);
  const records = getRecords();
  if (!nodes) {
    return null;
  }
  const _tabs: TabProp[] = [
    {
      panel: (
        <div className="h-full pt-8">
          <Marketplace mode="Integration" />
        </div>
      ),
      label: "Configuration",
      key: "configuration",
    },
    {
      panel: <div>Field Mappings</div>,
      label: "Field Mappings",
      key: "field-mappings",
    },
    {
      panel: <IntegrationTable instance={nodes[0]} records={records} />,
      label: "Import/Export",
      key: "import-export",
    },
  ];

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ExamplePageTabs tabs={_tabs} />
    </Suspense>
  );
}
