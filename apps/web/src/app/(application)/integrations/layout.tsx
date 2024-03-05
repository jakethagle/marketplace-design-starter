import { IntegrationHubNav } from "@/components/application/integration-hub-nav";

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <div className="h-full px-0 mx-auto max-w-[1800px] lg:flex lg:gap-x-16 lg:px-8">
      <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-48 lg:flex-none lg:border-0 lg:py-16">
        <div className="hidden lg:block text-base capitalize font-semibold text-muted-foreground pb-4">
          Integration Hub
        </div>
        <IntegrationHubNav />
      </aside>
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
