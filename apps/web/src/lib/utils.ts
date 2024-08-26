export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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
