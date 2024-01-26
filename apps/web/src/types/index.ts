export interface FilterOption {
  label: string;
  ids: string[];
}
export interface MarketplaceFilter {
  id: string;
  label: string;
  options: FilterOption[];
}
