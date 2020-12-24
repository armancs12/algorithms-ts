import IStack from './IStack';
import Node from '../common/Node';

export default class LinkedStack<T> implements IStack<T> {
  length: number;
  private head: Node<T>;

  constructor() {
    this.length = 0;
  }

  push(data: T): void {
    if (this.length == 0) this.head = new Node(data);
    else {
      let iter = this.head;
      while (iter.next != null) iter = iter.next;
      iter.next = new Node(data);
    }
    this.length++;
  }

  pop(): T {
    if (this.length == 0) throw new Error('No item to pop');
    if (this.length == 1) {
      const data = this.head.data;
      this.head = null;
      this.length = 0;
      return data;
    } else {
      let iter = this.head;
      let prev = iter;
      while (iter.next != null) {
        prev = iter;
        iter = iter.next;
      }
      const data = prev.next.data;
      prev.next = null;
      this.length--;
      return data;
    }
  }

  peek(): T {
    if (this.length == 0) throw new Error('No item to peek');
    let iter = this.head;
    while (iter.next != null) iter = iter.next;
    return iter.data;
  }

  toString(): string {
    let print = '[ ';
    let iter = this.head;
    while (iter != null) {
      print += `${iter.data} `;
      iter = iter.next;
    }
    return print + ']';
  }
}
