export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <div className="h-full w-full">{children}</div>;
}
