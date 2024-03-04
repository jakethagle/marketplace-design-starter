import Tabs from "@/components/application/settings-tabs";
import LoadingSpinner from "@/components/common/loading-spinner";
import { Suspense } from "react";

export default function SettingsPage(): JSX.Element {
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
