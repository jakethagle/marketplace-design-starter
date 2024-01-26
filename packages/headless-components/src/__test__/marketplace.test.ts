import { marketplace } from "../marketplace";

describe("marketplace", () => {
  it("should create a marketplace", () => {
    const m = marketplace<{ id: string; name: string }>([
      { id: "1", name: "Test" },
    ]);
    expect(m.listings.length).toEqual(1);
  });

  it("should return listings", () => {
    const m = marketplace<{ id: string; name: string }>([
      { id: "1", name: "Test" },
    ]);
    expect(m.getListings()).toEqual([{ data: { id: "1", name: "Test" } }]);
  });

  it("should filter listings", () => {
    const m = marketplace<{ id: string; name: string }>(
      [{ id: "1", name: "Test" }],
      {
        filterFn(data) {
          return data.name.includes("foo");
        },
      }
    );
    expect(m.getListings()).toEqual([]);
  });
});
