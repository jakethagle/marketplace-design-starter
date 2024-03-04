import { IntegrationHubNav } from "@/components/application/integration-hub-nav";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className="flex flex-row h-full">
      <IntegrationHubNav />
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
