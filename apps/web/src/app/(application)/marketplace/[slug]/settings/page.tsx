import LoadingSpinner from "@/components/loading-spinner";
import Tabs from "@/components/settings-tabs";
import { Suspense } from "react";

export default function SettingsPage(): React.ReactNode {
  return (
    <>
      <h2 className="text-2xl font-semibold leading-7 capitalize ">
        Manage Integration
      </h2>
      <Suspense fallback={<LoadingSpinner />}>
        <Tabs />
      </Suspense>
    </>
  );
}
