import BinaryNode from '../common/BinaryNode';

export default class BinaryTree<T> {
  root: BinaryNode<T>;
  protected _length: number;
  protected _height: number;

  constructor() {
    this._length = 0;
    this._height = 0;
  }

  get length(): number {
    return this._length;
  }

  get height(): number {
    return this._height;
  }

  inOrderIter(forEach: (data: T) => void): void {
    function iter(forEach: (data: T) => void, node: BinaryNode<T>) {
      if (node == null) return;
      iter(forEach, node.left);
      forEach(node.data);
      iter(forEach, node.right);
    }
    iter(forEach, this.root);
  }

  preOrderIter(forEach: (data: T) => void): void {
    function iter(forEach: (data: T) => void, node: BinaryNode<T>) {
      if (node == null) return;
      forEach(node.data);
      iter(forEach, node.left);
      iter(forEach, node.right);
    }
    iter(forEach, this.root);
  }

  postOrderIter(forEach: (data: T) => void): void {
    function iter(forEach: (data: T) => void, node: BinaryNode<T>) {
      if (node == null) return;
      iter(forEach, node.left);
      iter(forEach, node.right);
      forEach(node.data);
    }
    iter(forEach, this.root);
  }

  toString(): string {
    let string = '[ ';
    this.inOrderIter((data) => {
      string += `${data} `;
    });
    return string + ']';
  }
}
