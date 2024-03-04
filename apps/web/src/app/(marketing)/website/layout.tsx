import LayoutShell from "@/components/marketing/nav";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <LayoutShell>{children}</LayoutShell>;
}
