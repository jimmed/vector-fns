import { scalarMultiply } from "../scalarMultiply";
import { zero } from "../zero";

describe("scalarMultiply", () => {
  describe("when called with a 0D vector", () => {
    const v = [];

    it("should return a 0D vector", () =>
      expect(scalarMultiply(v, 10)).toBe(v));
  });

  describe("when called with an arbitrary vector", () => {
    const v = [Math.random() * 200, Math.random() * 200];

    it("should return a 1D vector", () =>
      expect(scalarMultiply(v, 10)).toHaveLength(v.length));

    it("should not return the same vector", () =>
      expect(scalarMultiply(v, 10)).not.toBe(v));

    describe("when multiplied with 1", () =>
      it("should return the same vector", () =>
        expect(scalarMultiply(v, 1)).toBe(v)));

    describe("when multiplied by 0", () =>
      it("should return a zero vector", () =>
        expect(scalarMultiply(v, 0)).toBe(zero(v.length))));
  });

  it("should multiply all components of the vector by the scaling factor", () =>
    expect(scalarMultiply([1, 2, 3], 3)).toEqual([3, 6, 9]));
});
