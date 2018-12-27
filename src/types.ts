export interface Vector<T extends number> extends Array<number> {
  length: T;
}

export interface Vector2D extends Vector<2> {}
export interface Vector3D extends Vector<3> {}
