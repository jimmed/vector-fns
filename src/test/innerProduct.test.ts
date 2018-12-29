import { innerProduct } from "../innerProduct";

describe("innerProduct", () => {
  describe("when called with two vectors", () => {
    it("should multiply together respective components from each vector", () =>
      expect(innerProduct([1, 2, 3], [4, 5, 6])).toEqual([4, 10, 18]));
  });
});
