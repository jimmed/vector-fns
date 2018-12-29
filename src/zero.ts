import { Vector } from "./types";

const zeroes = [];

export const makeZero = <T extends number>(length: T): Vector<T> =>
  // @ts-ignore
  Array(length).fill(0);

export const zero = <T extends number>(length: T): Vector<T> => {
  if (!zeroes[length]) {
    zeroes[length] = makeZero(length);
  }
  return zeroes[length];
};
