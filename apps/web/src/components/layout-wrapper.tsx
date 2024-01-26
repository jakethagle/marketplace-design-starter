export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {children}
    </div>
  );
}
