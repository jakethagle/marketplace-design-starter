"use client";
import type { Filters, Translation } from "@prismatic-io/embedded";
import prismatic, { TermOperator } from "@prismatic-io/embedded";
import { useEffect } from "react";
import usePrismaticAuth from "@/prismatic/hooks/use-prismatic";

export default function EmbeddediFrame({
  mode,
  integration,
  filters,
  translations,
  useModal = false,
  show = true,
}: {
  mode:
    | "Marketplace"
    | "Integration"
    | "Designer"
    | "Dashboard"
    | "Logs"
    | "Instance";
  integration?: string;
  filters?: Filters;
  translations?: Translation;
  useModal?: boolean;
  show?: boolean;
}): JSX.Element {
  const { authenticated, loading } = usePrismaticAuth();

  useEffect(() => {
    if (authenticated && mode === "Marketplace") {
      prismatic.showMarketplace({
        filters,
        translation: translations,
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
    } else if (authenticated && mode === "Instance" && show) {
      if (!integration) {
        throw new Error("Integration must be specified");
      }
      prismatic.configureInstance({
        theme: "LIGHT",
        ...(useModal
          ? { selector: "#prismatic-embedded-modal" }
          : { usePopover: true }),
        instanceId: integration,
        skipRedirectOnRemove: true,
        screenConfiguration: {
          configureInstance: {
            configuration: "disallow-details",
          },
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
    } else if (authenticated && mode === "Integration") {
      if (!integration) {
        throw new Error("Integration must be specified");
      }
      prismatic.configureIntegration({
        integrationName: integration,
        skipRedirectOnRemove: true,
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
        translation: {},
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
        filters: {
          marketplace: {
            filterQuery: [TermOperator.equal, "name", integration],
          },
        },
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
    }
  }, [
    authenticated,
    mode,
    integration,
    show,
    loading,
    filters,
    translations,
    useModal,
  ]);

  return <div className="min-h-full h-full" id="prismatic-embedded" />;
}
