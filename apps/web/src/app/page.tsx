import HeroPage from "../components/hero-page";
import LayoutWrapper from "../components/layout-wrapper";
import LogoCloud from "../components/logo-cloud";

export default function Page(): React.ReactElement {
  return (
    <LayoutWrapper>
      <div className="flex flex-col items-start">
        <HeroPage />
        <LogoCloud />
      </div>
    </LayoutWrapper>
  );
}
