import { add } from "../add";

describe("add", () => {
  it("should add together two vectors", () =>
    expect(add([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]));

  it("should add together 3 vectors", () =>
    expect(add([1, 2], [3, 4], [5, 6])).toEqual([9, 12]));
});
