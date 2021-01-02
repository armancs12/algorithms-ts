import { IBinarySearchTree } from '..';

export default class BinarySearchTree<T> implements IBinarySearchTree<T> {
  length: number;
  insert(_data: T): void {
    throw new Error('Method not implemented.');
  }
  remove(_data: T): void {
    throw new Error('Method not implemented.');
  }
  contains(_data: T): boolean {
    throw new Error('Method not implemented.');
  }
  inOrderIter(_forEach: (data: T) => void): void {
    throw new Error('Method not implemented.');
  }
  preOrderIter(_forEach: (data: T) => void): void {
    throw new Error('Method not implemented.');
  }
  postOrderIter(_forEach: (data: T) => void): void {
    throw new Error('Method not implemented.');
  }
  toString(): string {
    throw new Error('Method not implemented.');
  }
}
