import { Vector } from "./types";

export const innerProduct = <T extends number>(
  a: Vector<T>,
  b: Vector<T>
): Vector<T> =>
  // @ts-ignore
  a.map((x, i) => x * b[i]);
