import { classNames } from "@/lib/utils";

export default function LayoutWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
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
