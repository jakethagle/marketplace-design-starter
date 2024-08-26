import { classNames } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={classNames(
        "mx-auto max-w-7xl px-6 sm:px-8 lg:px-10",
        className ? className : "",
      )}
    >
      {children}
    </div>
  );
}
