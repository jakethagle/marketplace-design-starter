import Marketplace from "@/prismatic/components/embedded-iframe";

export default function DesignerPage(): React.ReactElement {
  return (
    <div className="h-full">
      <Marketplace mode="Designer" />
    </div>
  );
}
