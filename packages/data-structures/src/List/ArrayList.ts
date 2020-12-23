import IList from './IList';

export default class ArrayList<T> implements IList<T> {
  length: number;

  push(_data: T): void {
    throw new Error('Method not implemented.');
  }

  pushFront(_data: T): void {
    throw new Error('Method not implemented.');
  }

  pop(): T {
    throw new Error('Method not implemented.');
  }

  popFront(): T {
    throw new Error('Method not implemented.');
  }

  get(_index: number): T {
    throw new Error('Method not implemented.');
  }

  removeAt(_index: number): T {
    throw new Error('Method not implemented.');
  }

  toString(): string {
    throw new Error('Method not implemented.');
  }
}
