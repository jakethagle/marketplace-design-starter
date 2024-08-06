export interface FilterOption {
  label: string;
  ids: string[];
}
export interface MarketplaceFilter {
  id: string;
  label: string;
  options: FilterOption[];
}

export interface Record {
  id: number;
  recordNumber: string;
  title: string;
  description?: string;
  status?: "open" | "in progress" | "closed";
  email?: string;
}
export type FormData = Partial<Record>;
