import Listing from "@/components/application/marketplace/listing";
import { getMarketplaceIntegration } from "@/prismatic/lib";

export default async function ListingPage({
  params: { integration },
}: {
  params: { integration: string };
}): Promise<JSX.Element> {
  const marketplaceListing = await getMarketplaceIntegration(integration);
  const defaultIntegration = {
    name: "Salesforce",
    version: { name: "6", date: "January 1, 2024", datetime: "" },
    price: "$220",
    description: `Elevate your business efficiency with our Advanced ${
      marketplaceListing.integration.name ? "Salesforce" : " "
    } Integration. This robust integration is designed to seamlessly connect ${
      marketplaceListing.integration.name ? "Salesforce" : " "
    } with your existing business applications, creating a unified and powerful system for managing customer relationships and streamlining processes`,
    highlights: [
      "Bidirectional data sync",
      "Real-time analytics",
      "Enhanced productivity",
      "Customizable and scalable",
    ],
    imageSrc: "/salesforce-integration.png",
    imageAlt:
      "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
  };
  return (
    <Listing
      item={{
        ...defaultIntegration,
        name: marketplaceListing.integration.name,
        key: marketplaceListing.integration.name,
        imageSrc:
          marketplaceListing.integration.avatarUrl ??
          defaultIntegration.imageSrc,
      }}
    />
  );
}
