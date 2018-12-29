import { unit } from "../unit";

describe("unit", () => {
  describe("when called with a 0D vector", () =>
    it("should return a 0D vector", () => expect(unit([])).toEqual([])));

  describe("when called with a 1D unit vector", () => {
    const unitVector = [1];

    it("should return that unit vector", () =>
      expect(unit(unitVector)).toBe(unitVector));
  });

  describe("when called with any 1D vector", () =>
    it("should return [1]", () =>
      expect(unit([Math.random() * 200])).toEqual([1])));

  describe("when called with a 2D unit vector", () => {
    const unitVector = [1, 0];

    it("should return that unit vector", () =>
      expect(unit(unitVector)).toBe(unitVector));
  });

  describe("when called with another 2D vector", () => {
    const x = Math.random() * 200;
    const v = [x, x];
    it("should return a new vector", () => expect(unit(v)).not.toBe(v));
    it("should return a unit vector", () => {
      expect(unit(v)[0]).toBeCloseTo(Math.SQRT2 / 2);
      expect(unit(v)[1]).toBeCloseTo(Math.SQRT2 / 2);
    });
  });

  describe("when called with a random vector", () => {
    const v = [Math.random() * 200, Math.random() * 200];
    it("should return a new vector", () => expect(unit(v)).not.toBe(v));
    it("should return a vector whose components are <= 1", () =>
      unit(v).forEach(i => expect(i).toBeLessThanOrEqual(1)));
    it("should return a vector whose components are >= 0", () =>
      unit(v).forEach(i => expect(i).toBeGreaterThanOrEqual(0)));
  });
});
