import IList from './IList';
import Node from '../common/Node';
export default class LinkedList<T> implements IList<T> {
  length = 0;

  private head: Node<T> = null;

  push(data: T): void {
    if (this.length == 0) {
      this.head = new Node(data);
    } else {
      let iter = this.head;
      while (iter.next != null) iter = iter.next;
      iter.next = new Node(data);
    }
    this.length++;
  }

  pushFront(data: T): void {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
  }

  pop(): T {
    if (this.length == 0) throw new Error('There is no element to pop');
    if (this.length == 1) {
      const data = this.head.data;
      this.head = null;
      this.length = 0;
      return data;
    }

    let prev: Node<T>;
    let iter = this.head;
    while (iter.next != null) {
      prev = iter;
      iter = iter.next;
    }
    const data = iter.data;
    prev.next = null;
    this.length--;
    return data;
  }

  popFront(): T {
    if (this.length == 0) throw new Error('There is no element to pop');

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }

  get(index: number): T {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of list range!');

    let iter = this.head;
    for (let i = 0; i < index; i++) iter = iter.next;
    return iter.data;
  }

  set(index: number, data: T): void {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of list range!');
    let iter = this.head;
    for (let i = 0; i < index; i++) iter = iter.next;
    iter.data = data;
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of list range!');

    let prev: Node<T> = this.head;
    let iter = this.head;
    for (let i = 0; i < index; i++) {
      prev = iter;
      iter = iter.next;
    }
    const data = iter.data;
    prev.next = iter.next;
    this.length--;
    return data;
  }

  insertAt(index: number, data: T): void {
    if (index < 0 || index >= this.length)
      throw new Error('Index out of list range!');

    let prev: Node<T> = this.head;
    let iter = this.head;
    for (let i = 0; i < index; i++) {
      prev = iter;
      iter = iter.next;
    }
    prev.next = new Node(data, iter);
    this.length++;
  }

  toString(): string {
    let print = '[ ';
    let iter = this.head;
    while (iter != null) {
      print += `${iter.data.toString()} `;
      iter = iter.next;
    }
    print += ']';
    return print;
  }
}
