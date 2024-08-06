"use client";
import { type FormData, type Record } from "@/types";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button } from "@repo/ui";

export default function RecordTable({
  onEdit,
  onNew,
  records,
  onDelete,
}: {
  records: Record[];
  onEdit: (value: FormData) => void;
  onDelete: (value: FormData) => void;
  onNew: () => void;
}) {
  return (
    <div className="rounded-lg bg-card py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-card-foreground">
              Record List
            </h1>
            <p className="mt-2 text-sm text-foreground/70">
              A list of all your open support tickets including their ticket
              number, title, assignee, and status.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button size="default" onClick={onNew}>
              New Record
            </Button>
            {/* <button
                type="button"
                className="block rounded-md bg-muted px-3 py-2 text-center text-sm font-semibold text-card-foreground hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={onNew}
              >
                New Ticket
              </button> */}
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-border">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-card-foreground sm:pl-0"
                    >
                      Record Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-card-foreground"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-card-foreground"
                    >
                      Assignee
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-card-foreground"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {records.map((record) => (
                    <tr key={record.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-card-foreground sm:pl-0">
                        {record.recordNumber}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-foreground/70">
                        {record.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-foreground/70">
                        {record.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm capitalize text-foreground/70">
                        {record.status}
                      </td>
                      <td className="relative flex flex-row items-center justify-start whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <button
                          className="text-primary hover:text-primary/70"
                          onClick={() => onEdit(record)}
                        >
                          Edit
                          <span className="sr-only"></span>
                        </button>
                        <button
                          className="ml-2 h-4 w-4 items-center text-gray-500 hover:text-red-500"
                          onClick={() => onDelete(record)}
                        >
                          <TrashIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
