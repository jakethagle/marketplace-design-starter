import Container from "@/components/common/container";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <Container className="h-full py-6">{children}</Container>;
}
