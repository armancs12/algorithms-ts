import IStack from './IStack';

export default class ArrayStack<T> implements IStack<T> {
  length: number;
  private arrayLength: number;
  private array: Array<T>;

  constructor() {
    this.length = 0;
    this.arrayLength = 1;
    this.array = new Array(1);
  }

  private increaseArray() {
    this.arrayLength = this.arrayLength * 2;
    const newArray = new Array(this.arrayLength);
    for (let i = 0; i < this.length; i++) newArray[i] = this.array[i];
    this.array = newArray;
  }

  private decreaseArray() {
    this.arrayLength = this.arrayLength / 2;
    const newArray = new Array(this.arrayLength);
    for (let i = 0; i < this.length; i++) newArray[i] = this.array[i];
    this.array = newArray;
  }

  push(data: T): void {
    if (this.length == this.arrayLength) this.increaseArray();
    this.array[this.length++] = data;
  }

  pop(): T {
    if (this.length == 0) throw new Error('No item to pop!');
    const data = this.array[this.length - 1];
    this.array[--this.length] = undefined;
    if (this.arrayLength > 1 && this.length < this.arrayLength / 2)
      this.decreaseArray();
    return data;
  }

  peek(): T {
    if (this.length == 0) throw new Error('No item to peek!');
    return this.array[this.length - 1];
  }

  toString(): string {
    let print = '[ ';
    for (const data of this.array)
      if (data != undefined) print += `${data.toString()} `;
    return print + ']';
  }
}
