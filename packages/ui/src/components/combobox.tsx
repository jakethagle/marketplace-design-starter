import { Combobox as HeadlessComboBox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { classNames } from "../lib/utils";

export interface Option {
  key: string;
  label: string;
}

export default function Combobox({
  options,
  selected,
  label,
  onChange,
}: {
  options: Option[];
  selected: Option;
  onChange: (value: Option) => void;
  label?: string;
}): JSX.Element {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(selected);

  const filtereditems =
    query === ""
      ? options
      : options.filter((option: Option) => {
          return option.key.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <HeadlessComboBox
      as="div"
      onChange={(value) => {
        setSelectedItem(value);
        onChange(value);
      }}
      value={selectedItem}
    >
      <HeadlessComboBox.Label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </HeadlessComboBox.Label>
      <div className="relative mt-2">
        <HeadlessComboBox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          displayValue={(item?: Option) => item?.label || ""}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <HeadlessComboBox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
        </HeadlessComboBox.Button>

        {filtereditems.length > 0 && (
          <HeadlessComboBox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filtereditems.map((item) => (
              <HeadlessComboBox.Option
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900",
                  )
                }
                key={item.key}
                value={item}
              >
                {({ active, selected: s }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        s ? "font-semibold" : "",
                      )}
                    >
                      {item.label}
                    </span>

                    {s ? (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600",
                        )}
                      >
                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    ) : null}
                  </>
                )}
              </HeadlessComboBox.Option>
            ))}
          </HeadlessComboBox.Options>
        )}
      </div>
    </HeadlessComboBox>
  );
}
