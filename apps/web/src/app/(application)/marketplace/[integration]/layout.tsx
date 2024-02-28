import BreadcrumbNav from "@/components/application/marketplace/breadcrumb-nav";
import Container from "@/components/common/container";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <Container>
      <div className="pb-6">
        <BreadcrumbNav slug="salesforce" />
      </div>
      {children}
    </Container>
  );
}
