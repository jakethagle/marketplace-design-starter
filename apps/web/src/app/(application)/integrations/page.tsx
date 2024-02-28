import Marketplace from "@/prismatic/components/embedded-marketplace";

export default function DesignerPage(): React.ReactElement {
  return (
    <div className="h-full">
      <Marketplace mode="Dashboard" />
    </div>
  );
}
