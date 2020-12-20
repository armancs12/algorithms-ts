export default interface IList<T> {
  length: number;

  push(data: T): void;
  pushFront(data: T): void;
  pop(): T;
  popFront(): T;
  get(index: number): T | undefined;
  removeAt(index: number): T | undefined;
  toString(): string;
}
