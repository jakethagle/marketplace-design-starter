import Container from "@/components/common/container";
import HeroSection from "@/components/marketing/hero-section";
import LogoCloud from "@/components/marketing/logo-cloud";

export default function Page(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <Container>
        <LogoCloud />
      </Container>
    </>
  );
}
