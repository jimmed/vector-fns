import { crossProduct } from "../crossProduct";

describe("crossProduct", () => {
  describe("when called with two 3D vectors", () =>
    it("should return the cross product", () =>
      expect(crossProduct([3, -3, 1], [4, 9, 2])).toEqual([-15, -2, 39])));
});
