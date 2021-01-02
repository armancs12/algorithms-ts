import BinaryHeap from '../common/BinaryHeap';
import { EmptyStructureError } from '../exceptions';
import IQueue from './IQueue';

export default class HeapPriorityQueue<T> implements IQueue<T> {
  heap: BinaryHeap<T>;

  constructor(compareFunction?: (first: T, second: T) => 1 | 0 | -1) {
    this.heap = new BinaryHeap(compareFunction);
  }

  get length(): number {
    return this.heap.length;
  }

  enqueue(data: T): void {
    this.heap.push(data);
  }

  dequeue(): T {
    return this.heap.pop();
  }

  front(): T {
    return this.heap.peek();
  }

  rear(): T {
    //TODO: find a better solution
    if (this.length == 0) throw new EmptyStructureError();
    const newHeap = new BinaryHeap<T>();
    let data: T;
    while (this.length != 0) {
      data = this.heap.pop();
      newHeap.push(data);
    }
    this.heap = newHeap;
    return data;
  }

  toString(): string {
    //TODO: find a better solution
    const newHeap = new BinaryHeap<T>();
    let data: T;
    let print = '[ ';
    while (this.length != 0) {
      data = this.heap.pop();
      print += `${data} `;
      newHeap.push(data);
    }
    this.heap = newHeap;
    return print + ']';
  }
}
