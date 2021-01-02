import DynamicArray from '../common/DynamicArray';
import { EmptyStructureError } from '../exceptions';
import IQueue from './IQueue';

export default class ArrayQueue<T> implements IQueue<T> {
  private array: DynamicArray<T>;

  constructor() {
    this.array = new DynamicArray();
  }

  get length(): number {
    return this.array.length;
  }

  enqueue(data: T): void {
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
