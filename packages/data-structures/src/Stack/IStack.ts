export default interface IStack<T> {
  length: number;
  push(data: T): void;
  pop(): T;
  peek(): T;
  toString(): string;
}
