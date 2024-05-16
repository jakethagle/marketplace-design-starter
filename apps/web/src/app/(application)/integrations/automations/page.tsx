import Marketplace from "@/prismatic/components/embedded-iframe";

export default function DesignerPage(): React.ReactElement {
  return (
    <div className="h-full">
      <Marketplace
        filters={{ marketplace: { category: "Automations" } }}
        mode="Marketplace"
        translations={{
          phrases: {
            dynamicPhrase: {
              "Integration Marketplace": "Automation Marketplace",
            },
          },
        }}
      />
    </div>
  );
}
