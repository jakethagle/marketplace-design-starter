import BreadcrumbNav from "@/components/breadcrumb-nav";
import LayoutWrapper from "@/components/layout-wrapper";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <LayoutWrapper>
      <div className="pb-6">
        <BreadcrumbNav slug="salesforce" />
      </div>
      {children}
    </LayoutWrapper>
  );
}
