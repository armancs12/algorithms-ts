import IStack from './IStack';
import DynamicArray from '../common/DynamicArray';
import { EmptyStructureError } from '../exceptions';

export default class ArrayStack<T> implements IStack<T> {
  private array: DynamicArray<T>;

  constructor() {
    this.array = new DynamicArray();
  }

  get length(): number {
    return this.array.length;
  }

  push(data: T): void {
    this.array.insertAt(this.length, data);
  }

  pop(): T {
    if (this.length == 0) throw new EmptyStructureError();
    return this.array.removeAt(this.length - 1);
  }

  peek(): T {
    if (this.length == 0) throw new EmptyStructureError();
    return this.array.get(this.length - 1);
  }

  toString(): string {
    return this.array.toString();
  }
}
