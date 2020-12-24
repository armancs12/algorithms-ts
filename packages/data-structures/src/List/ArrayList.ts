import IList from './IList';
import Array from '../common/DynamicArray';
import { IndexOutOfRangeError, NoItemError } from '../exceptions';
export default class ArrayList<T> implements IList<T> {
  length: number;
  private array: Array<T>;

  constructor() {
    this.length = 0;
    this.array = new Array<T>(1);
  }

  push(data: T): void {
    if (this.length == this.array.length)
      this.array.changeSize(this.array.length * 2);
    this.array.set(this.length++, data);
  }

  pushFront(data: T): void {
    if (this.length == this.array.length)
      this.array.changeSize(this.array.length * 2);

    for (let i = this.length; i > 0; i--)
      this.array.set(i, this.array.get(i - 1));

    this.array.set(0, data);
    this.length++;
  }

  pop(): T {
    if (this.length == 0) throw new NoItemError();
    const data = this.array.get(this.length - 1);
    this.array.set(--this.length, undefined);
    if (this.array.length > 1 && this.length < this.array.length / 2)
      this.array.changeSize(this.array.length / 2);
    return data;
  }

  popFront(): T {
    if (this.length == 0) throw new NoItemError();
    const data = this.array.get(0);

    for (let i = 0; i < this.length; i++)
      this.array.set(i, this.array.get(i + 1));

    this.array.set(--this.length, undefined);
    if (this.array.length > 1 && this.length < this.array.length / 2)
      this.array.changeSize(this.array.length / 2);
    return data;
  }

  get(index: number): T {
    if (index < 0 || index >= this.length)
      throw new IndexOutOfRangeError();
    return this.array.get(index);
  }

  set(index: number, data: T): void {
    if (index < 0 || index >= this.length)
      throw new IndexOutOfRangeError();

    this.array.set(index, data);
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.length)
      throw new IndexOutOfRangeError();

    const data = this.array.get(index);
    for (let i = index; i < this.length; i++)
      this.array.set(i, this.array.get(i + 1));

    this.array.set(--this.length, undefined);
    return data;
  }

  insertAt(index: number, data: T): void {
    if (index < 0 || index >= this.length)
      throw new IndexOutOfRangeError();

    for (let i = this.length; i > index; i--)
      this.array.set(i, this.array.get(i - 1));

    this.array.set(index, data);
    this.length++;
  }

  toString(): string {
    let print = '[ ';
    for (const data of this.array.array)
      if (data != undefined) print += `${data.toString()} `;
    return print + ']';
  }
}
