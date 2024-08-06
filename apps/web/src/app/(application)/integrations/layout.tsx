import TabGroup, {
  type TabProp,
} from "@/components/application/integration-tabs";

export default function Layout({
  dashboard,
  marketplace,
  designer,
  logs,
}: {
  dashboard: React.ReactNode;
  marketplace: React.ReactNode;
  logs: React.ReactNode;
  designer: React.ReactNode;
}): React.ReactNode {
  const _tabs: TabProp[] = [
    {
      panel: <>{marketplace}</>,
      label: "Marketplace",
      key: "marketplace",
    },
    {
      panel: <>{dashboard}</>,
      label: "Dashboard",
      key: "dashboard",
    },
    {
      panel: <>{designer}</>,
      label: "Low-Code Designer",
      key: "designer",
    },
    {
      panel: <>{logs}</>,
      label: "Logs",
      key: "logs",
    },
  ];

  return <TabGroup tabs={_tabs} />;
}
