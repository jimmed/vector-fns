import { Vector } from "./types";

export const add = <T extends number>([head, ...rest]: Vector<T>[]): Vector<
  T
> =>
  // @ts-ignore
  rest.reduce((a, b) => a.map((x, i) => x + b[i]), head);
