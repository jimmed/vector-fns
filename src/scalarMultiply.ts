import { Vector } from "./types";

export const scalarMultiply = <T extends number>(
  v: Vector<T>,
  l: number
): Vector<T> =>
  // @ts-ignore
  v.map(x => x * l);
