import { magnitude } from "../magnitude";

describe("magnitude", () => {
  describe("when called with a 0D vector", () =>
    it("should return null", () => expect(magnitude([])).toEqual(null)));

  describe("when called with a 1D vector", () => {
    const x = Math.random() * 200;
    const v = [x];

    it("should return the first component", () =>
      expect(magnitude(v)).toEqual(x));
  });
});
