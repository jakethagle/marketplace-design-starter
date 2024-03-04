"use client";
import prismatic from "@prismatic-io/embedded";
import { useEffect, useState } from "react";
import usePrismaticAuth from "../hooks/use-prismatic";

export default function Marketplace({
  mode,
  integration,
}: {
  mode: "Marketplace" | "Integration" | "Designer" | "Dashboard";
  integration?: string;
}): JSX.Element {
  const { authenticated } = usePrismaticAuth();
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized) {
      prismatic.init();
    }
  }, [initialized]);

  useEffect(() => {
    if (initialized) {
      return;
    }
    if (authenticated && mode === "Marketplace") {
      prismatic.showMarketplace({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
          marketplace: { configuration: "allow-details" },
          configurationWizard: {
            triggerDetailsConfiguration: "default-open",
          },
        },
      });
      setInitialized(true);
    } else if (authenticated && mode === "Integration") {
      if (!integration) {
        throw new Error("Integration must be specified");
      }
      prismatic.configureIntegration({
        integrationName: integration,
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
          instance: {
            hideBackToMarketplace: true,
          },
        },
      });
      setInitialized(true);
    } else if (authenticated && mode === "Designer") {
      prismatic.showIntegrations({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
        },
      });
      setInitialized(true);
    } else if (authenticated && mode === "Dashboard") {
      prismatic.showDashboard({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
        },
      });
      setInitialized(true);
    } else {
      null;
    }
  }, [authenticated, mode, integration, initialized]);

  return <div className="h-full" id="prismatic-embedded" />;
}
