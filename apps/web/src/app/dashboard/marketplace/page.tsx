import LayoutWrapper from "@/components/layout-wrapper";
import { MarketplaceGrid } from "@/components/marketplace/grid";
import Marketplace from "@/prismatic/components/embedded-marketplace";
import { getMarketplaceIntegrations } from "@/prismatic/lib";
import type { MarketplaceFilter } from "@/types";

export default async function CustomMarketplace({
  searchParams,
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
  return searchParams.custom === "true" ? (
    <LayoutWrapper>
      <MarketplaceGrid
        categories={categories}
        filters={filters}
        listings={marketplaceIntegrations.nodes}
      />
    </LayoutWrapper>
  ) : (
    <div className="h-full">
      <Marketplace mode="Marketplace" />
    </div>
  );
}
