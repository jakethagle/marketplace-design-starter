"use client";
/* eslint-disable jsx-a11y/anchor-is-valid -- skip */
import { classNames } from "@/lib/utils";
import usePrismaticAuth from "@/prismatic/hooks/use-prismatic";
import { Role } from "@/prismatic/types";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import LoadingSpinner from "../common/loading-spinner";

interface RoleSelection {
  id: Role;
  title: string;
  description: string;
}

const userRole = [
  {
    id: Role.User,
    title: "User",
    description: "View the Marketplace as a standard user.",
  },
  {
    id: Role.Admin,
    title: "Admin",
    description: "View the Marketplace with an admin user.",
  },
];
const getUserRole = (type: Role): RoleSelection => {
  return userRole.find((role) => role.id === type) || userRole[1];
};

export function UserRoleSelectBox({
  selected,
  setSelected,
}: {
  selected: RoleSelection;
  setSelected: (role: RoleSelection) => void;
}): JSX.Element {
  return (
    <Listbox onChange={setSelected} value={selected}>
      {({ open }) => (
        <div className="relative w-full">
          <div className="flex flex-row w-full">
            <Listbox.Button className="flex flex-row justify-between w-full items-center focus:outline-none hover:bg-primary/90 hover:text-primary-foreground px-4 py-2.5 rounded-t-md">
              <p className={classNames("text-sm")}>{selected.title}</p>
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-foreground inline-flex hover:text-primary-foreground"
              />
            </Listbox.Button>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={open}
          >
            <Listbox.Options className="absolute right-0 z-50 mt-2 w-72 origin-top-right divide-y divide-border overflow-hidden rounded-md shadow-lg ring-1 ring-border focus:outline-none bg-background text-foreground">
              {userRole.map((option) => (
                <Listbox.Option
                  className={({ active }) =>
                    classNames(
                      active
                        ? "bg-primary/90 text-primary-foreground"
                        : "text-foreground",
                      "cursor-default select-none p-4 text-sm",
                    )
                  }
                  key={option.title}
                  value={option}
                >
                  {({ selected: selectedVal, active }) => (
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p
                          className={
                            selectedVal ? "font-semibold" : "font-normal"
                          }
                        >
                          {option.title}
                        </p>
                        {selectedVal ? (
                          <span
                            className={
                              active
                                ? "text-primary-foreground"
                                : "text-primary"
                            }
                          >
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                          </span>
                        ) : null}
                      </div>
                      <p
                        className={classNames(
                          active
                            ? "text-primary-foreground/70"
                            : "text-primary/70",
                          "mt-2",
                        )}
                      >
                        {option.description}
                      </p>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}

export default function UserMenu(): JSX.Element {
  const { role, handleSetRole } = usePrismaticAuth();
  if (!role) {
    return <LoadingSpinner />;
  }
  return (
    <Menu as="div" className="relative ml-4 flex-shrink-0">
      <div>
        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100 ring-border ring-1">
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-popover shadow-lg text-popover-foreground py-0 ring-1 ring-border justify-start">
          <Menu.Item>
            <div>
              <UserRoleSelectBox
                selected={getUserRole(role)}
                setSelected={(newRole) => {
                  if (getUserRole(role) !== newRole) {
                    void handleSetRole(newRole.id);
                  }
                }}
              />
            </div>
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                  active
                    ? "bg-primary/90 text-primary-foreground"
                    : "text-foreground",
                  "block px-4 py-2 text-sm",
                )}
                href="#"
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                  active
                    ? "bg-primary/90 text-primary-foreground rounded-b-md"
                    : "text-foreground",
                  "block px-4 py-2 text-sm ",
                )}
                href="/login"
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
