import IList from './IList';

export default class ArrayList<T> implements IList<T> {
  length: number;
  private array: Array<T>;
  private arrayLength: number;

  constructor() {
    this.length = 0;
    this.array = new Array<T>(1);
    this.arrayLength = 1;
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

  pushFront(data: T): void {
    if (this.length == this.arrayLength) this.increaseArray();
    for (let i = this.length; i > 0; i--) this.array[i] = this.array[i - 1];
    this.array[0] = data;
    this.length++;
  }

  pop(): T {
    if (this.length == 0) throw new Error('There is no element to pop');
    const data = this.array[this.length - 1];
    this.array[--this.length] = undefined;
    if (this.arrayLength > 1 && this.length < this.arrayLength / 2)
      this.decreaseArray();
    return data;
  }

  popFront(): T {
    if (this.length == 0) throw new Error('There is no element to pop');
    const data = this.array[0];
    for (let i = 0; i < this.length; i++) this.array[i] = this.array[i + 1];
    this.array[--this.length] = undefined;
    if (this.arrayLength > 1 && this.length < this.arrayLength / 2)
      this.decreaseArray();
    return data;
  }

  get(index: number): T {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of list range!');
    return this.array[index];
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of list range!');
    const data = this.array[index];
    for (let i = index; i < this.length; i++) this.array[i] = this.array[i + 1];
    this.array[--this.length] = undefined;
    return data;
  }

  toString(): string {
    let print = '[ ';
    for (const data of this.array)
      if (data != undefined) print += `${data.toString()} `;
    return print + ']';
  }
}
