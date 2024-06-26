import { MarketplaceGrid } from "@/components/application/marketplace/grid";
import EmbeddediFrame from "@/prismatic/components/embedded-iframe";
import { getMarketplaceIntegrations } from "@/prismatic/lib";
import type { MarketplaceFilter } from "@/types";
import { TermOperator } from "@prismatic-io/embedded";

export default async function CustomMarketplace({
  searchParams: { custom },
}: {
  searchParams: { custom: string | undefined };
}): Promise<React.ReactElement> {
  const recommendedFilter: MarketplaceFilter = {
    id: "recommended",
    label: "Recommended",
    options: [],
  };
  const mostPopularFilter: MarketplaceFilter = {
    id: "popular",
    label: "Most Popular",
    options: [],
  };
  const allIntegrationsFilter: MarketplaceFilter = {
    id: "all",
    label: "All Integrations",
    options: [],
  };
  const filters = [recommendedFilter, mostPopularFilter, allIntegrationsFilter];

  const marketplaceIntegrations = await getMarketplaceIntegrations();

  const categories: string[] = [];
  for (const integration of marketplaceIntegrations.nodes) {
    const category = integration.category || "Uncategorized";
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  return custom === "true" ? (
    <div className="h-full w-full px-6 overflow-y-auto">
      <MarketplaceGrid
        categories={categories}
        filters={filters}
        listings={marketplaceIntegrations.nodes}
      />
    </div>
  ) : (
    <EmbeddediFrame
      filters={{
        marketplace: {
          filterQuery: [TermOperator.notEqual, "category", "Automations"],
        },
      }}
      mode="Marketplace"
    />
  );
}
