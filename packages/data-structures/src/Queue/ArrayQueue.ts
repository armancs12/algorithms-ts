import DynamicArray from '../common/DynamicArray';
import { NoItemError } from '../exceptions';
import IQueue from './IQueue';

export default class ArrayQueue<T> implements IQueue<T> {
  length: number;
  private array: DynamicArray<T>;

  constructor() {
    this.length = 0;
    this.array = new DynamicArray(1);
  }

  enqueue(data: T): void {
    if (this.length == this.array.length)
      this.array.changeSize(this.array.length * 2);
    this.array.set(this.length++, data);
  }

  dequeue(): T {
    if (this.length == 0) throw new NoItemError();
    if (this.array.length > 1 && this.length < this.array.length / 2)
      this.array.changeSize(this.array.length / 2);

    const data = this.array.get(0);
    for (let i = 0; i < this.length; i++)
      this.array.set(i, this.array.get(i + 1));

    this.array.set(--this.length, undefined);
    return data;
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
    let print = '[ ';
    for (const data of this.array.array)
      if (data != undefined) print += `${data.toString()} `;
    return print + ']';
  }
}
