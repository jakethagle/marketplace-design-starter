import { IntegrationHubNav } from "@/components/application/integration-hub-nav";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className="h-full px-0 xl:flex">
      <aside className="flex overflow-x-auto py-4 xl:block xl:flex-none xl:py-12 xl:w-72 xl:drop-shadow-sm xl:bg-background xl:h-full">
        <div className="hidden xl:block text-base capitalize font-semibold text-muted-foreground pb-4 pl-6">
          <p className="text-xl">Integration Hub</p>
        </div>
        <IntegrationHubNav />
      </aside>
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
