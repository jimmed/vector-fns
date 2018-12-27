import { Vector3D } from "./types";

export const crossProduct = (
  [a1, a2, a3]: Vector3D,
  [b1, b2, b3]: Vector3D
): Vector3D =>
  // @ts-ignore
  [(a2 - a3) * b3, b1 - a1 * b3, b2 - a2 * b1];
