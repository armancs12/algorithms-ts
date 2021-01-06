/**
 * I tried to emulate a static array since
 * built-in array is already dynamic
 */
export default class StaticArray<T> {
  private array: Array<T>;

  constructor(size: number) {
    this.array = new Array<T>(size);
  }

  size(): number {
    return this.array.length;
  }

  get(index: number): T {
    return this.array[index];
  }

  set(index: number, data: T): void {
    this.array[index] = data;
  }
}
