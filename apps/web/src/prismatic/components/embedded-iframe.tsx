"use client";
import LoadingSpinner from "@/components/common/loading-spinner";
import prismatic from "@prismatic-io/embedded";
import { useEffect } from "react";
import usePrismaticAuth from "../hooks/use-prismatic";

export default function EmbeddediFrame({
  mode,
  integration,
}: {
  mode: "Marketplace" | "Integration" | "Designer" | "Dashboard" | "Logs";
  integration?: string;
}): JSX.Element {
  const { authenticated } = usePrismaticAuth();

  useEffect(() => {
    if (authenticated && mode === "Marketplace") {
      prismatic.showMarketplace({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#F7F8F9",
            color: "#F7F8F9",
          },
          marketplace: { configuration: "allow-details" },
          configurationWizard: {
            triggerDetailsConfiguration: "hidden",
          },
        },
      });
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
            background: "#F7F8F9",
            color: "#F7F8F9",
          },
          instance: {
            hideBackToMarketplace: true,
            hideTabs: ["Monitors"],
          },
        },
      });
    } else if (authenticated && mode === "Designer") {
      prismatic.showIntegrations({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#F7F8F9",
            color: "#F7F8F9",
          },
        },
      });
    } else if (authenticated && mode === "Dashboard") {
      prismatic.showDashboard({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#F7F8F9",
            color: "#F7F8F9",
          },
          dashboard: {
            hideTabs: ["Marketplace", "Integrations"],
          },
        },
      });
    } else if (authenticated && mode === "Logs") {
      prismatic.showLogs({
        theme: "LIGHT",
        selector: "#prismatic-embedded",
        screenConfiguration: {
          initializing: {
            background: "#F7F8F9",
            color: "#F7F8F9",
          },
          dashboard: {
            hideTabs: ["Marketplace", "Integrations"],
          },
        },
      });
    } else {
      null;
    }
  }, [authenticated, mode, integration]);

  return authenticated ? (
    <div className="h-full first-of-type" id="prismatic-embedded" />
  ) : (
    <LoadingSpinner />
  );
}
