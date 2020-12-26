export default interface IList<T> {
  readonly length: number;

  push(data: T): void;
  pushFront(data: T): void;
  pop(): T;
  popFront(): T;
  get(index: number): T | undefined;
  set(index: number, data: T): void;
  removeAt(index: number): T | undefined;
  insertAt(index: number, data: T): void;
  toString(): string;
}
