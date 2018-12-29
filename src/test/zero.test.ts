import { zero } from "../zero";

describe("zero", () => {
  describe("when called with 0", () =>
    it("should return an empty array", () => expect(zero(0)).toEqual([])));

  describe("when called with 1", () =>
    it("should return an array with a single zero", () =>
      expect(zero(1)).toEqual([0])));

  [2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i =>
    describe(`when called with ${i}`, () => {
      let result: number[];
      beforeEach(() => {
        result = zero(i);
      });

      it(`should return an array of length ${i}`, () =>
        expect(result).toHaveLength(i));

      it("should return an array filled with zeroes", () =>
        result.forEach(item => expect(item).toBe(0)));

      it("should return the same array for successive calls", () =>
        expect(result).toBe(zero(i)));
    })
  );
});
