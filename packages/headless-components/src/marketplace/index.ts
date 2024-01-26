type ListingData = object;

export function marketplace<TData extends ListingData>(
  data: TData[],
  filterOptions?: {
    filterFn: (data: TData) => boolean;
  }
): {
  listings: MarketplaceListing<TData>[];
  getListings: () => MarketplaceListing<TData>[];
} {
  const _initialState = data;
  const _listings = data.map((d) => listing<TData>({ data: d }));
  const listings: MarketplaceListing<TData>[] = _listings;

  const getListings = (): MarketplaceListing<TData>[] =>
    listings.filter((l) =>
      filterOptions?.filterFn ? filterOptions.filterFn(l.data) : true
    );

  return {
    listings,
    getListings,
  };
}

interface MarketplaceListing<TData extends ListingData> {
  data: TData;
}

function listing<TData extends ListingData>({
  data,
}: {
  data: TData;
}): MarketplaceListing<TData> {
  return { data };
}
