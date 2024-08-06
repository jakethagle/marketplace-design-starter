import EmbeddediFrame from "@/prismatic/components/embedded-iframe";
import type { MarketplaceFilter } from "@/types";
import { CategoryFilters } from "@/components/application/marketplace/category-filters";
import { GridActions } from "@/components/application/marketplace/grid-actions";
import { GridList } from "@/components/application/marketplace/grid-list";
import { GridPagination } from "@/components/application/marketplace/grid-pagination";
import { MarketplaceHeader } from "@/components/application/marketplace/marketplace-header";
import { GridItemV2 } from "@/components/application/marketplace/grid-item";
import { prismaticServices } from "@/prismatic/lib";

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
  const marketplaceIntegrations =
    await prismaticServices.marketplaceService.find();

  const categories: string[] = [];
  for (const integration of marketplaceIntegrations) {
    const category = integration.category || "Uncategorized";
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  return custom === "true" ? (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-end justify-between border-b pb-6 pt-2">
        <MarketplaceHeader />
        <GridActions />
      </div>
      <section
        aria-labelledby="marketplace-headings"
        className="pb-10 pt-6 w-full"
      >
        <div className="flex flex-row gap-x-10 w-full ">
          <CategoryFilters categories={categories} filters={filters} />
          <div className="lg:col-start-2 flex-1 2xl:max-w-7xl 2xl:mx-auto overflow-y-auto ">
            <GridList>
              <>
                {marketplaceIntegrations.map((listing) => (
                  <GridItemV2
                    key={listing.id}
                    avatarUrl={listing.avatarUrl}
                    category={listing.category || "Uncategorized"}
                    deployed={listing.deployed}
                    description={listing.description}
                    id={listing.id}
                    name={listing.name}
                  />
                ))}
              </>
            </GridList>
            <GridPagination />
          </div>
        </div>
      </section>
    </div>
  ) : (
    <EmbeddediFrame
      filters={
        {
          // marketplace: {
          //   filterQuery: [TermOperator.notEqual, "category", "Automations"],
          // },
        }
      }
      mode="Marketplace"
    />
  );
}
