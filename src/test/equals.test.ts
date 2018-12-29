import { equals } from "../equals";

describe("equals", () => {
  it("should return true if all components of both vectors are the same", () =>
    expect(equals([1, 2, 3], [1, 2, 3])).toBe(true));
  it("should return false if any components of both vectors are not the same", () =>
    expect(equals([1, 2, 3], [1, 2, 4])).toBe(false));

  it("should return true for two 0D vectors", () =>
    expect(equals([], [])).toBe(true));
});
