import {
  compareFunction,
  defaultCompareFunction,
} from '../common/compareFunction';
import DynamicArray from '../common/DynamicArray';
import { EmptyStructureError } from '../exceptions';
import IQueue from './IQueue';

export default class ArrayPriorityQueue<T> implements IQueue<T> {
  private array: DynamicArray<T>;
  private compare: compareFunction<T>;

  constructor(compareFunction?: compareFunction<T>) {
    this.array = new DynamicArray();
    this.compare = compareFunction ?? defaultCompareFunction<T>();
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
    if (this.length == 0) throw new EmptyStructureError();
    return this.array.removeAt(0);
  }

  front(): T {
    if (this.length == 0) throw new EmptyStructureError();
    return this.array.get(0);
  }

  rear(): T {
    if (this.length == 0) throw new EmptyStructureError();
    return this.array.get(this.length - 1);
  }

  toString(): string {
    return this.array.toString();
  }
}
