import IStack from './IStack';
import Node from '../common/Node';
import { NoItemError } from '../exceptions';

export default class LinkedStack<T> implements IStack<T> {
  private len: number;
  private head: Node<T>;

  constructor() {
    this.len = 0;
  }

  get length(): number {
    return this.len;
  }

  push(data: T): void {
    if (this.length == 0) this.head = new Node(data);
    else this.head.getLast().next = new Node(data);
    this.len++;
  }

  pop(): T {
    if (this.len == 0) throw new NoItemError();
    if (this.len == 1) {
      const data = this.head.data;
      this.head = null;
      this.len = 0;
      return data;
    }
    const last = this.head.getLastBefore();
    const data = last.next.data;
    last.next = null;
    this.len--;
    return data;
  }

  peek(): T {
    if (this.len == 0) throw new NoItemError();
    return this.head.getLast().data;
  }

  toString(): string {
    if (this.head == null) return '[ ]';
    return this.head.toString();
  }
}
