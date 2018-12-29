import { Vector } from "./types";

export const crossProduct = <T extends number>(
  [a1, a2, a3]: Vector<T>,
  [b1, b2, b3]: Vector<T>
): Vector<T> =>
  // @ts-ignore
  [a2 * b3 - a3 * b2, -(a1 * b3 - a3 * b1), a1 * b2 - a2 * b1];
