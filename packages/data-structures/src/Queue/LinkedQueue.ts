import Node from '../common/Node';
import { EmptyStructureError } from '../exceptions';
import IQueue from './IQueue';

export default class LinkedQueue<T> implements IQueue<T> {
  len: number;
  private head: Node<T>;

  constructor() {
    this.len = 0;
  }

  get length(): number {
    return this.len;
  }

  enqueue(data: T): void {
    if (this.head == null) this.head = new Node(data);
    else this.head.getLast().next = new Node(data);
    this.len++;
  }

  dequeue(): T {
    if (this.len == 0) throw new EmptyStructureError();
    const data = this.head.data;
    this.head = this.head.next;
    this.len--;
    return data;
  }

  front(): T {
    if (this.len == 0) throw new EmptyStructureError();
    return this.head.data;
  }

  rear(): T {
    if (this.len == 0) throw new EmptyStructureError();
    return this.head.getLast().data;
  }

  toString(): string {
    if (this.head == null) return '[ ]';
    return this.head.toString();
  }
}
