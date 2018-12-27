import { Vector } from "./types";
import { greaterThanOrEquals } from "./greaterThanOrEquals";

export const lessThanOrEquals = <T extends number>(
  a: Vector<T>,
  b: Vector<T>
): boolean => greaterThanOrEquals<T>(b, a);
