import HeroPage from "@/components/hero-page";
import Layout from "@/components/landing/nav";
import LayoutWrapper from "@/components/layout-wrapper";
import LogoCloud from "@/components/logo-cloud";

export default function Page(): React.ReactElement {
  return (
    <Layout>
      <HeroPage />
      <LayoutWrapper>
        <LogoCloud />
      </LayoutWrapper>
    </Layout>
  );
}
