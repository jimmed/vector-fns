import { Vector } from "./types";

export const magnitude = <T extends number>(v: Vector<T>): number =>
  v.reduce((a, b) => a + b ** 2, 0) ** 0.5;
