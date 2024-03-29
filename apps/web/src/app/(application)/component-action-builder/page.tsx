// import Implementation from "@/components/application/data-requests/implementation-panel";
import ComponentActionBuilder from "@/prismatic/components/component-action-builder";
import { prismaticMarketplace } from "@/prismatic/lib";
import { getComponents } from "@repo/prismatic-js";

export default async function DatasourceBuilder(): Promise<JSX.Element> {
  const { client } = await prismaticMarketplace();
  const { nodes: components } = await getComponents(client);

  return <ComponentActionBuilder components={components} />;
}
