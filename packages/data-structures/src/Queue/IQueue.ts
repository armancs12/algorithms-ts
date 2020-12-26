export default interface IQueue<T> {
  length: number;

  enqueue(data: T): void;
  dequeue(): T;
  front(): T;
  rear(): T;
  toString(): string;
}
