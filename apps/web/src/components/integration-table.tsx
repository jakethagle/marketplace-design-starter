import { Button } from "@repo/ui";
import { classNames } from "../lib/utils";

function getRecords() {
  return [
    {
      id: 1,
      name: "Foo",
      status: "Success",
      updated: "7 Minutes Ago",
      message: "",
      isCurrent: false,
    },
    {
      name: "Bar",
      status: "Success",
      updated: "7 Minutes Ago",
      message: "",
      isCurrent: false,
    },
  ];
}

export default function IntegrationTable(): React.ReactNode {
  const records = getRecords();
  return (
    <div className="py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto text-foreground">
          <h1 className="text-base font-semibold leading-6 ">
            Import/Export Records
          </h1>
          <p className="mt-2 text-sm ">
            A table of records synced from your integration.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button type="button">Refresh</Button>
        </div>
      </div>
      <div className="-mx-4 mt-8 ring-1 ring-border sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-border text-foreground">
          <thead>
            <tr>
              <th
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
                scope="col"
              >
                Name
              </th>
              <th
                className="hidden px-3 py-3.5 text-left text-sm font-semibold  lg:table-cell"
                scope="col"
              >
                Status
              </th>
              <th
                className="hidden px-3 py-3.5 text-left text-sm font-semibold  lg:table-cell"
                scope="col"
              >
                Last Sync
              </th>
              <th
                className="hidden px-3 py-3.5 text-left text-sm font-semibold  lg:table-cell"
                scope="col"
              >
                Message
              </th>
              <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col">
                <span className="sr-only">Select</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((row, rowIdx) => (
              <tr key={row.id}>
                <td
                  className={classNames(
                    rowIdx === 0 ? "" : "border-t",
                    "relative py-4 pl-4 pr-3 text-sm sm:pl-6 border-border"
                  )}
                >
                  <div className="font-medium ">{row.name}</div>
                  <div className="mt-1 flex flex-col  sm:block lg:hidden">
                    <span>{row.message}</span>
                  </div>
                </td>
                <td
                  className={classNames(
                    rowIdx === 0 ? "" : "border-t",
                    "hidden px-3 py-3.5 text-sm  lg:table-cell"
                  )}
                >
                  {row.status}
                </td>
                <td
                  className={classNames(
                    rowIdx === 0 ? "" : "border-t ",
                    "hidden px-3 py-3.5 text-sm  lg:table-cell"
                  )}
                >
                  {row.updated}
                </td>
                <td
                  className={classNames(
                    rowIdx === 0 ? "" : "border-t ",
                    "hidden px-3 py-3.5 text-sm  lg:table-cell"
                  )}
                >
                  {row.message}
                </td>
                <td
                  className={classNames(
                    rowIdx === 0 ? "" : "border-t",
                    "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                  )}
                >
                  <Button type="button" variant="outline">
                    View<span className="sr-only">, {row.name}</span>
                  </Button>
                  {rowIdx !== 0 ? (
                    <div className="absolute -top-px left-0 right-6 h-px " />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
