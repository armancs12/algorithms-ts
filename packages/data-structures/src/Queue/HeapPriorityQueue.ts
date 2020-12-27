import IQueue from './IQueue';

export default class HeapPriorityQueue<T> implements IQueue<T> {
  get length(): number {
    throw new Error('Method not implemented.');
  }

  enqueue(_data: T): void {
    throw new Error('Method not implemented.');
  }

  dequeue(): T {
    throw new Error('Method not implemented.');
  }

  front(): T {
    throw new Error('Method not implemented.');
  }

  rear(): T {
    throw new Error('Method not implemented.');
  }

  toString(): string {
    throw new Error('Method not implemented.');
  }
}
