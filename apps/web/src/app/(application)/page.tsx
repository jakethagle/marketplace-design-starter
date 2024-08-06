import EmptyState from "@/components/application/empty-state";
import FakeStats from "@/components/application/fake-stats";

export default function Dashboard() {
  return (
    <div className="h-full">
      <div className="px-6 sm:px-8 lg:px-10 py-6">
        <h1 className="text-3xl font-semibold text-foreground leading-8">
          Welcome Back!
        </h1>
      </div>
      <div className="flex w-full py-8 px:10 sm:px-12 flex-col gap-y-14">
        <div>
          <FakeStats />
        </div>

        <div>
          <div className="border-b border-gray-200 pb-5">
            <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
              <h3 className="ml-2 mt-2 text-base font-semibold leading-6 text-foreground">
                Recent Projects
              </h3>
            </div>
          </div>
          <div className="h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 bg-background max-w-full mx-auto w-full mt-4">
            <EmptyState />
          </div>
        </div>
      </div>
    </div>
  );
}
