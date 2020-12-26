export default class Node<T> {
  data: T;
  next: Node<T>;
  constructor(data: T, next: Node<T> = null) {
    this.data = data;
    this.next = next;
  }

  iter(forEach: (data: T) => void): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let iter: Node<T> = this;
    while (iter != null) {
      forEach(iter.data);
      iter = iter.next;
    }
  }

  getLast(): Node<T> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let iter: Node<T> = this;
    while (iter.next != null) iter = iter.next;
    return iter;
  }

  getLastBefore(): Node<T> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let iter: Node<T> = this;
    let prev: Node<T>;
    while (iter.next != null) {
      prev = iter;
      iter = iter.next;
    }
    return prev ?? iter;
  }

  toString(): string {
    let print = '[ ';
    this.iter((data) => (print += `${data} `));
    return print + ']';
  }
}
