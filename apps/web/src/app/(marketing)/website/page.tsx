import Container from "@/components/common/container";
import HeroPageSection from "@/components/marketing/hero-section";
import LogoCloud from "@/components/marketing/logo-cloud";

export default function Page(): React.ReactElement {
  return (
    <>
      <HeroPageSection />
      <Container>
        <LogoCloud />
      </Container>
    </>
  );
}
