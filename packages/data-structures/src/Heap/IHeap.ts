export default interface IHeap<T> {
  readonly length: number;

  push(data: T): void;
  pop(): T;
  peek(): T;
}
