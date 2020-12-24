export default class DynamicArray<T> {
  length: number;
  array: Array<T>;

  constructor(length: number) {
    this.length = length;
    this.array = new Array<T>(length);
  }

  copyArray(length: number): Array<T> {
    const newArray = new Array<T>(length);
    const minLen = length > this.array.length ? this.array.length : length;
    for (let i = 0; i < minLen; i++) newArray[i] = this.array[i];
    return newArray;
  }

  changeSize(length: number): void {
    this.array = this.copyArray(length);
  }

  get(index: number): T {
    return this.array[index];
  }

  set(index: number, data: T): void {
    this.array[index] = data;
  }
}
