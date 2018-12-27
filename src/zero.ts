import { Vector } from "./types";

export const zero = <T extends number>(length: T): Vector<T> =>
  // @ts-ignore
  Array(length).fill(0);
