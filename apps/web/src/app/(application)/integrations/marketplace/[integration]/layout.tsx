import BreadcrumbNav from "@/components/application/marketplace/breadcrumb-nav";
import Container from "@/components/common/container";

export default function Layout({
  children,
  params: { integration },
}: {
  children: JSX.Element;
  params: {
    integration: string;
  };
}): JSX.Element {
  return (
    <Container>
      <>
        <div className="py-6">
          <BreadcrumbNav slug={integration} />
        </div>
        {children}
      </>
    </Container>
  );
}
