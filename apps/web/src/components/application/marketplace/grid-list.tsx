export function GridList({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <ul className="grid gap-x-6 gap-y-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 ">
      {children}
    </ul>
  );
}
