import { NoItemError } from '../exceptions';
import StaticArray from './StaticArray';

export default class BinaryHeap<T> {
  private array: StaticArray<T>;
  private compare = (first: T, second: T): 1 | 0 | -1 => {
    if (first > second) return 1;
    else if (first < second) return -1;
    else return 0;
  };

  private _length = 0;
  private increaseCount = 0;

  constructor(compareFunction?: (first: T, second: T) => 1 | 0 | -1) {
    this.compare = compareFunction ?? this.compare;
    this.array = new StaticArray(1);
  }

  get length(): number {
    return this._length;
  }

  push(data: T): void {
    if (this.length == this.array.size()) this.increaseSize();
    this.array.set(this.length, data);
    this._length++;
    this.shiftUp();
  }

  pop(): T {
    if (this.length == 0) throw new NoItemError();
    const data = this.array.get(0);
    this.array.set(0, this.array.get(this.length - 1));
    this.array.set(--this._length, undefined);
    this.shiftDown();
    if (this.length <= this.array.size() - Math.pow(2, this.increaseCount))
      this.decreaseSize();
    return data;
  }

  peek(): T {
    if (this.length == 0) throw new NoItemError();
    return this.array.get(0);
  }

  private shiftUp(): void {
    let index = this.length - 1;
    while (this.hasParent(index)) {
      if (this.isGreaterThan(index, this.parent(index))) {
        this.swap(index, this.parent(index));
        index = this.parent(index);
      } else return;
    }
  }

  private shiftDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      const child = this.getGreatestChild(index);
      if (this.isGreaterThan(index, child)) return;
      else {
        this.swap(index, child);
        index = child;
      }
    }
  }

  private swap(first: number, second: number) {
    const temp = this.array.get(first);
    this.array.set(first, this.array.get(second));
    this.array.set(second, temp);
  }

  private isGreaterThan(first: number, second: number) {
    return this.compare(this.array.get(first), this.array.get(second)) > 0;
  }

  private getGreatestChild(index: number): number {
    if (
      this.hasRightChild(index) &&
      this.isGreaterThan(this.rightChild(index), this.leftChild(index))
    ) {
      return this.rightChild(index);
    } else return this.leftChild(index);
  }

  private copyArray(newSize: number): StaticArray<T> {
    const minSize = this.array.size() < newSize ? this.array.size() : newSize;
    const newArray = new StaticArray<T>(newSize);
    for (let i = 0; i < minSize; i++) {
      newArray.set(i, this.array.get(i));
    }
    return newArray;
  }

  private increaseSize(): void {
    const newSize = this.array.size() + Math.pow(2, ++this.increaseCount);
    this.array = this.copyArray(newSize);
  }

  private decreaseSize(): void {
    const newSize = this.array.size() - Math.pow(2, this.increaseCount--);
    this.array = this.copyArray(newSize);
  }

  private parent = (index: number): number => Math.floor((index - 1) / 2);
  private hasParent = (index: number): boolean => this.parent(index) >= 0;

  private leftChild = (index: number): number => index * 2 + 1;
  private hasLeftChild = (index: number): boolean =>
    this.leftChild(index) < this.length;

  private rightChild = (index: number): number => index * 2 + 2;
  private hasRightChild = (index: number): boolean =>
    this.rightChild(index) < this.length;
}
