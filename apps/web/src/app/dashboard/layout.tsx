import Navbar from "@/components/nav-bar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <nav className="border-b border-border">
        <Navbar />
      </nav>
      <main className="h-[calc(100%_-_6rem)]">{children}</main>
    </>
  );
}
