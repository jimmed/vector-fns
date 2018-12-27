import { Vector } from "./types";

export const equals = <T extends number>(a: Vector<T>, b: Vector<T>): boolean =>
  a.every((x, i) => x === b[i]);
