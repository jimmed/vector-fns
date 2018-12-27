import { Vector } from "./types";
import { greaterThan } from "./greaterThan";

export const lessThan = <T extends number>(
  a: Vector<T>,
  b: Vector<T>
): boolean => greaterThan<T>(b, a);
