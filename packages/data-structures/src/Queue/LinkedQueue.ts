import Node from '../common/Node';
import { NoItemError } from '../exceptions';
import IQueue from './IQueue';

export default class LinkedQueue<T> implements IQueue<T> {
  length: number;
  private head: Node<T>;

  constructor() {
    this.length = 0;
  }

  enqueue(data: T): void {
    if (this.head == null) {
      this.head = new Node(data);
    } else {
      let iter = this.head;
      while (iter.next != null) iter = iter.next;
      iter.next = new Node(data);
    }
    this.length++;
  }

  dequeue(): T {
    if (this.length == 0) throw new NoItemError();
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }

  front(): T {
    if (this.length == 0) throw new NoItemError();
    return this.head.data;
  }

  rear(): T {
    if (this.length == 0) throw new NoItemError();
    let iter = this.head;
    while (iter.next != null) iter = iter.next;
    return iter.data;
  }

  toString(): string {
    let print = '[ ';
    let iter = this.head;
    while (iter != null) {
      print += `${iter.data.toString()} `;
      iter = iter.next;
    }
    return print + ']';
  }
}
