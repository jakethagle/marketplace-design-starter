"use client";
import prismatic from "@prismatic-io/embedded";
import { useEffect, useState } from "react";
import usePrismaticAuth from "../hooks/use-prismatic";

export default function EmbeddediFrame({
  mode,
  integration,
}: {
  mode: "Marketplace" | "Integration" | "Designer" | "Dashboard" | "Logs";
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
          dashboard: {
            hideTabs: ["Marketplace", "Integrations"],
          },
        },
      });
      setInitialized(true);
    } else if (authenticated && mode === "Logs") {
      prismatic.showLogs({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
          dashboard: {
            hideTabs: ["Marketplace", "Integrations"],
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
