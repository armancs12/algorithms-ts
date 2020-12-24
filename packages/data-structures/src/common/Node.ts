export default class Node<T> {
  data: T;
  next: Node<T>;
  constructor(data: T, next: Node<T> = null) {
    this.data = data;
    this.next = next;
  }
}
