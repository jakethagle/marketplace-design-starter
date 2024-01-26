import Listing from "@/components/marketplace/listing";

export default function ListingPage({
  params: { slug },
}: {
  params: { slug: string };
}): React.ReactNode {
  return <Listing item={{ ...integration, key: slug }} />;
}
const integration = {
  name: "Salesforce",
  version: { name: "6", date: "January 1, 2024", datetime: "" },
  price: "$220",
  description:
    "Elevate your business efficiency with our Advanced Salesforce Integration. This robust integration is designed to seamlessly connect Salesforce with your existing business applications, creating a unified and powerful system for managing customer relationships and streamlining processes",
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
