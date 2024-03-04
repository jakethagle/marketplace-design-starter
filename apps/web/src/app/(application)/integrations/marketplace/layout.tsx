import { classNames } from "@/lib/utils";

export default function Layout({
  children,
  props: { searchParams: { custom } } = { searchParams: { custom: "false" } },
}: {
  children: JSX.Element;
  props: {
    searchParams: { custom: string };
  };
}): JSX.Element {
  return (
    <div
      className={classNames("h-full w-full", custom === "true" ? "py-8" : "")}
    >
      {children}
    </div>
  );
}
