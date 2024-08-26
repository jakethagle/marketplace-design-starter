import Container from "@/components/common/container";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return <Container className="h-full">{children}</Container>;
}
