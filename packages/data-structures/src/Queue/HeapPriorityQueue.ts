import MaxBinaryHeap from '../Heap/MaxBinaryHeap';
import { EmptyStructureError } from '../exceptions';
import IQueue from './IQueue';
import { compareFunction } from '../common/compareFunction';

export default class HeapPriorityQueue<T> implements IQueue<T> {
  heap: MaxBinaryHeap<T>;

  constructor(compareFunction?: compareFunction<T>) {
    this.heap = new MaxBinaryHeap(compareFunction);
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
    const newHeap = new MaxBinaryHeap<T>();
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
    const newHeap = new MaxBinaryHeap<T>();
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
