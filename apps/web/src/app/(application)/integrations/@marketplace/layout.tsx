export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <div className="h-full w-full max-h-full">{children}</div>;
}
