import Container from "@/components/common/container";

export default function Dashboard(): React.ReactNode {
  return (
    <Container>
      <div className="pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
            <svg
              className="absolute inset-0 h-full w-full stroke-gray-900/10"
              fill="none"
            >
              <defs>
                <pattern
                  height="10"
                  id="pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9"
                  patternUnits="userSpaceOnUse"
                  width="10"
                  x="0"
                  y="0"
                >
                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
                </pattern>
              </defs>
              <rect
                fill="url(#pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9)"
                height="100%"
                stroke="none"
                width="100%"
              />
            </svg>
          </div>
        </div>
      </div>
    </Container>
  );
}
