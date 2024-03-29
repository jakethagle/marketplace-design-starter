import Container from "@/components/common/container";
import EmptyState from "@/components/application/empty-state";

export default function Dashboard(): React.ReactNode {
  return (
    <Container>
      <div className="pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Welcome Back!
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 bg-background drop-shadow-xl">
            <EmptyState />
          </div>
        </div>
      </div>
    </Container>
  );
}
