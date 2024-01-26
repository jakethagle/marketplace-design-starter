type ListingData = object;
export interface Marketplace<TData extends ListingData> {
  listings: MarketplaceListing<TData>[];
}

export interface MarketplaceListing<TData extends ListingData> {
  data: TData;
}
