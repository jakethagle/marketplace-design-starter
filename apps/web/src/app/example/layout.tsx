import LayoutWrapper from "@/components/layout-wrapper";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
