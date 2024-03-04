import { classNames } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={classNames(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className ? className : "",
      )}
    >
      {children}
    </div>
  );
}
