import { Vector } from "./types";

export const greaterThan = <T extends number>(
  a: Vector<T>,
  b: Vector<T>
): boolean => a.every((x, i) => x > b[i]);
