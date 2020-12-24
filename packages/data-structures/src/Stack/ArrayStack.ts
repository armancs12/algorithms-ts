import IStack from './IStack';
import Array from '../common/DynamicArray';

export default class ArrayStack<T> implements IStack<T> {
  length: number;
  private array: Array<T>;

  constructor() {
    this.length = 0;
    this.array = new Array(1);
  }

  push(data: T): void {
    if (this.length == this.array.length)
      this.array.changeSize(this.array.length * 2);
    this.array.set(this.length++, data);
  }

  pop(): T {
    if (this.length == 0) throw new Error('No item to pop!');
    const data = this.array.get(this.length - 1);
    this.array.set(--this.length, undefined);
    if (this.array.length > 1 && this.length < this.array.length / 2)
      this.array.changeSize(this.array.length * 2);
    return data;
  }

  peek(): T {
    if (this.length == 0) throw new Error('No item to peek!');
    return this.array.get(this.length - 1);
  }

  toString(): string {
    let print = '[ ';
    for (const data of this.array.array)
      if (data != undefined) print += `${data.toString()} `;
    return print + ']';
  }
}
