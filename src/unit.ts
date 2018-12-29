import { Vector } from "./types";
import { magnitude } from "./magnitude";

export const unit = <T extends number>(v: Vector<T>): Vector<T> => {
  const m = magnitude(v);

  // @ts-ignore number[] !== Vector<T>
  return m === 1 ? v : v.map(x => x / m);
};
