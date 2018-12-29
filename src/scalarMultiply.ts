import { Vector } from "./types";
import { zero } from "./zero";

export const scalarMultiply = <T extends number>(
  v: Vector<T>,
  l: number
): Vector<T> => {
  if (!v.length || l === 1) {
    return v;
  }

  if (!l) {
    return zero(v.length);
  }

  // @ts-ignore
  return v.map(x => x * l);
};
