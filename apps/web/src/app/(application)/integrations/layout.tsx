import { IntegrationHubNav } from "@/components/application/integration-hub-nav";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className="h-full px-0 lg:flex">
      <aside className="flex overflow-x-auto py-4 lg:block lg:flex-none lg:py-12 lg:w-72 lg:drop-shadow-md lg:bg-background">
        <div className="hidden lg:block text-base capitalize font-semibold text-muted-foreground pb-4 pl-6">
          <p className="text-xl">Integration Hub</p>
        </div>
        <IntegrationHubNav />
      </aside>
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
