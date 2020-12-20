import IList from './IList';

export default class LinkedList<T> implements IList<T> {
  length: number;
  
  push(data: T): void {
    throw new Error('Method not implemented.');
  }
  pushFront(data: T): void {
    throw new Error('Method not implemented.');
  }
  pop(): T {
    throw new Error('Method not implemented.');
  }
  popFront(): T {
    throw new Error('Method not implemented.');
  }
  get(index: number): T {
    throw new Error('Method not implemented.');
  }
  removeAt(index: number): T {
    throw new Error('Method not implemented.');
  }
  toString(): string {
    throw new Error('Method not implemented.');
  }
}
