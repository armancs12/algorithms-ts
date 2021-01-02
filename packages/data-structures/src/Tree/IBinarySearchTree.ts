export default interface IBinarySearchTree<T> {
  readonly length: number;

  insert(data: T): void;
  remove(data: T): void;
  contains(data: T): boolean;

  inOrderIter(forEach: (data: T) => void): void;
  preOrderIter(forEach: (data: T) => void): void;
  postOrderIter(forEach: (data: T) => void): void;

  toString(): string;
}
