import LayoutShell from "@/components/marketing/nav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <LayoutShell>{children}</LayoutShell>;
}
