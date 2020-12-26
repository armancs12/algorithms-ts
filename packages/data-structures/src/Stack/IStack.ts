export default interface IStack<T> {
  readonly length: number;

  push(data: T): void;
  pop(): T;
  peek(): T;
  toString(): string;
}
