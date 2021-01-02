import IList from './IList';
import DynamicArray from '../common/DynamicArray';
import { IndexOutOfRangeError, EmptyStructureError } from '../exceptions';
export default class ArrayList<T> implements IList<T> {
  private array: DynamicArray<T>;

  constructor() {
    this.array = new DynamicArray<T>();
  }

  get length(): number {
    return this.array.length;
  }

  push(data: T): void {
    this.array.insertAt(this.length, data);
  }

  pushFront(data: T): void {
    this.array.insertAt(0, data);
  }

  pop(): T {
    if (this.length == 0) throw new EmptyStructureError();
    return this.removeAt(this.length - 1);
  }

  popFront(): T {
    if (this.length == 0) throw new EmptyStructureError();
    return this.removeAt(0);
  }

  get(index: number): T {
    return this.array.get(index);
  }

  set(index: number, data: T): void {
    this.array.set(index, data);
  }

  removeAt(index: number): T {
    return this.array.removeAt(index);
  }

  insertAt(index: number, data: T): void {
    if (index == this.length) throw new IndexOutOfRangeError();
    this.array.insertAt(index, data);
  }

  toString(): string {
    return this.array.toString();
  }
}
