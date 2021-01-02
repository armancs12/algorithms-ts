export default class BinaryNode<T> {
  data: T;
  left: BinaryNode<T>;
  right: BinaryNode<T>;

  constructor(
    data: T,
    left: BinaryNode<T> = null,
    right: BinaryNode<T> = null
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
