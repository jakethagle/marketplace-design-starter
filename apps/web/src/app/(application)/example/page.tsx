import IntegrationTable from "@/components/example/integration-table";
import ExamplePageHeader from "@/components/example/page-header";
import type { TabProp } from "@/components/example/tabs";
import ExamplePageTabs from "@/components/example/tabs";
import LoadingSpinner from "@/components/loading-spinner";
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
): Promise<{ nodes?: Instance[] } | undefined> {
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
  return nodes[0]?.instances as unknown as { nodes?: Instance[] } | undefined;
}

export default async function ExamplePage({
  searchParams,
}: {
  searchParams: { integration: string | undefined };
}) {
  const integration = searchParams.integration || "Salesforce";
  const response = await getMarketplaceIntegration(integration);

  let instance: Instance | undefined;
  if (response?.nodes) {
    instance = response.nodes[0];
  }
  const records = getRecords();
  if (!instance) {
    return <LoadingSpinner />;
  }
  const _tabs: TabProp[] = [
    {
      panel: <IntegrationTable instance={instance} records={records} />,
      label: "Import/Export",
      key: "import-export",
    },
    {
      panel: <div>Field Mappings</div>,
      label: "Field Mappings",
      key: "field-mappings",
    },
  ];

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="pb-10">
        <ExamplePageHeader integration={integration} />
      </div>
      {/* <h2 */}
      <ExamplePageTabs tabs={_tabs} />
    </Suspense>
  );
}
