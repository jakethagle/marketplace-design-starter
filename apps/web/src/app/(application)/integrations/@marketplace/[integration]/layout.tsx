import IntegrationCard from "@/components/application/example/integration-card";
import TabGroup, { type TabProp } from "@/components/application/example/tabs";

export default function Layout({
  params,
  overview,
  records,
  logs,
}: {
  children: React.ReactNode;
  params: { integration: string };
  overview: React.ReactNode;
  records: React.ReactNode;
  logs: React.ReactNode;
}): JSX.Element {
  if (!params.integration) {
    return <div>Integration not found</div>;
  }

  try {
    const _tabs: TabProp[] = [
      {
        panel: <>{overview}</>,
        label: "Overview",
        key: "overview",
      },
      {
        panel: <>{records}</>,
        label: "Linked Records",
        key: "records",
      },
      {
        panel: <>{logs}</>,
        label: "Logs",
        key: "logs",
      },
    ];

    return (
      <div className="px-12 py-6">
        <div className="flex flex-col">
          <IntegrationCard integrationId={params.integration} />
          <TabGroup tabs={_tabs} />
        </div>
      </div>
    );
  } catch (error) {
    return <div>Failed to find the integration you requested</div>;
  }
}
