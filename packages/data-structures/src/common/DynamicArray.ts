import { IndexOutOfRangeError } from '../exceptions';
import StaticArray from './StaticArray';

export default class DynamicArray<T> {
  private array: StaticArray<T>;
  private len: number;

  constructor() {
    this.len = 0;
    this.array = new StaticArray<T>(1);
  }

  get length(): number {
    return this.len;
  }

  get(index: number): T {
    if (index < 0 || index >= this.len) throw new IndexOutOfRangeError();
    return this.array.get(index);
  }

  set(index: number, data: T): void {
    if (index < 0 || index >= this.len) throw new IndexOutOfRangeError();
    this.array.set(index, data);
  }

  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.len) throw new IndexOutOfRangeError();
    if (this.len == this.array.size()) this.array = this.increaseSize();

    for (let i = this.len; i > index; i--)
      this.array.set(i, this.array.get(i - 1));
    this.array.set(index, data);
    this.len++;
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.len) throw new IndexOutOfRangeError();

    const data = this.array.get(index);

    for (let i = index; i < this.len; i++)
      this.array.set(i, this.array.get(i + 1));
    this.array.set(--this.len, undefined);

    if (this.array.size() > 1 && this.len <= this.array.size() / 2)
      this.array = this.decreaseSize();
    return data;
  }

  changeSize(length: number): StaticArray<T> {
    const newArray = new StaticArray<T>(this.len);
    const minLen = length > this.array.size() ? this.array.size() : length;
    for (let i = 0; i < minLen; i++) newArray.set(i, this.array.get(i));
    return newArray;
  }

  increaseSize(): StaticArray<T> {
    return this.changeSize(this.len * 2);
  }

  decreaseSize(): StaticArray<T> {
    return this.changeSize(this.len / 2);
  }

  toString(): string {
    let print = '[ ';
    for (let i = 0; i < this.len; i++) print += `${this.array.get(i)} `;
    return print + ']';
  }
}
