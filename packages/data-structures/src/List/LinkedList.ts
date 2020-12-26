import IList from './IList';
import Node from '../common/Node';
import { IndexOutOfRangeError, NoItemError } from '../exceptions';
export default class LinkedList<T> implements IList<T> {
  private head: Node<T>;
  private len: number;

  constructor() {
    this.len = 0;
  }

  get length(): number {
    return this.len;
  }

  push(data: T): void {
    if (this.len == 0) this.head = new Node(data);
    else this.head.getLast().next = new Node(data);
    this.len++;
  }

  pushFront(data: T): void {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
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
    last.next.data = null;
    this.len--;
    return data;
  }

  popFront(): T {
    if (this.len == 0) throw new NoItemError();

    const data = this.head.data;
    this.head = this.head.next;
    this.len--;
    return data;
  }

  get(index: number): T {
    if (index < 0 || index >= this.len) throw new IndexOutOfRangeError();

    let iter = this.head;
    for (let i = 0; i < index; i++) iter = iter.next;
    return iter.data;
  }

  set(index: number, data: T): void {
    if (index < 0 || index >= this.len) throw new IndexOutOfRangeError();
    let iter = this.head;
    for (let i = 0; i < index; i++) iter = iter.next;
    iter.data = data;
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.len) throw new IndexOutOfRangeError();

    let prev: Node<T> = this.head;
    let iter = this.head;
    for (let i = 0; i < index; i++) {
      prev = iter;
      iter = iter.next;
    }
    const data = iter.data;
    prev.next = iter.next;
    this.len--;
    return data;
  }

  insertAt(index: number, data: T): void {
    if (index < 0 || index >= this.len) throw new IndexOutOfRangeError();

    let prev: Node<T> = this.head;
    let iter = this.head;
    for (let i = 0; i < index; i++) {
      prev = iter;
      iter = iter.next;
    }
    prev.next = new Node(data, iter);
    this.len++;
  }

  toString(): string {
    if (this.head == null) return '[ ]';
    return this.head.toString();
  }
}
