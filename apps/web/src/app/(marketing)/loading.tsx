import LoadingSpinner from "@/components/common/loading-spinner";

export default function Loading(): React.ReactElement {
  return (
    <div className="grid min-h-full place-items-center py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <LoadingSpinner />
      </div>
    </div>
  );
}
