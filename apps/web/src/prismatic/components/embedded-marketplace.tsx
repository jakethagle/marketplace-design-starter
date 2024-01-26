"use client";
import prismatic from "@prismatic-io/embedded";
import { useEffect } from "react";
import usePrismaticAuth from "../hooks/use-prismatic";

export default function Marketplace({
  mode,
}: {
  mode: "Marketplace" | "Integration" | "Designer" | "Dashboard";
}): React.ReactNode {
  const { authenticated } = usePrismaticAuth();

  useEffect(() => {
    prismatic.init();
  }, []);

  useEffect(() => {
    if (authenticated && mode === "Marketplace") {
      prismatic.showMarketplace({
        theme: "LIGHT",
        selector: "#prismatic-embedded-marketplace",
        screenConfiguration: {
          isInPopover: true,
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
          configurationWizard: {
            isInModal: true,
          },
          instance: {
            hideBackToMarketplace: true,
            hideTabs: ["Test", "Executions", "Logs", "Monitors"],
          },
          marketplace: { configuration: "disallow-details" },
        },
      });
    } else if (authenticated && mode === "Integration") {
      prismatic.configureIntegration({
        integrationName: "Salesforce",
        theme: "LIGHT",
        selector: "#prismatic-embedded-marketplace",
        screenConfiguration: {
          isInPopover: true,
          initializing: {
            background: "#FFFFFF",
            color: "#000000",
          },
          configurationWizard: {
            isInModal: true,
          },
          instance: {
            hideBackToMarketplace: true,
            hideTabs: ["Test", "Executions", "Logs", "Monitors"],
          },
          marketplace: { configuration: "disallow-details" },
        },
      });
    } else {
      null;
    }
  }, [authenticated, mode]);

  return <div className="h-full" id="prismatic-embedded-marketplace" />;
}
