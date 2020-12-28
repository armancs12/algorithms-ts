import DynamicArray from '../common/DynamicArray';
import { NoItemError } from '../exceptions';
import IQueue from './IQueue';

export default class ArrayPriorityQueue<T> implements IQueue<T> {
  private array: DynamicArray<T>;
  private compare: (first: T, second: T) => 1 | 0 | -1;

  constructor(compareFunction?: (first: T, second: T) => 1 | 0 | -1) {
    this.array = new DynamicArray();
    this.compare =
      compareFunction ??
      ((first, second) => {
        if (first > second) return 1;
        else if (first < second) return -1;
        else return 0;
      });
  }

  get length(): number {
    return this.array.length;
  }

  enqueue(data: T): void {
    for (let i = 0; i < this.length; i++) {
      if (this.compare(data, this.array.get(i)) > 0) {
        this.array.insertAt(i, data);
        return;
      }
    }
    this.array.insertAt(this.length, data);
  }

  dequeue(): T {
    if (this.length == 0) throw new NoItemError();
    return this.array.removeAt(0);
  }

  front(): T {
    if (this.length == 0) throw new NoItemError();
    return this.array.get(0);
  }

  rear(): T {
    if (this.length == 0) throw new NoItemError();
    return this.array.get(this.length - 1);
  }

  toString(): string {
    return this.array.toString();
  }
}
