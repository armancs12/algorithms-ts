import IBinarySearchTree from './IBinarySearchTree';
import BinaryTree from './BinaryTree';
import BinaryNode from '../common/BinaryNode';
import { EmptyStructureError, NonExistingDataError } from '../exceptions';

export default class BinarySearchTree<T>
  extends BinaryTree<T>
  implements IBinarySearchTree<T> {
  insert(data: T): void {
    function insert(data: T, node: BinaryNode<T>) {
      if (node == null) return new BinaryNode(data);
      else {
        if (data > node.data) node.right = insert(data, node.right);
        else node.left = insert(data, node.left);
        return node;
      }
    }
    this.root = insert(data, this.root);
    this._length++;
  }

  remove(data: T): void {
    if (this.length == 0) throw new EmptyStructureError();
    this.root = this.removeFrom(data, this.root);
    this._length--;
  }

  contains(data: T): boolean {
    let contains = false;
    this.inOrderIter((value) => {
      if (data === value) contains = true;
    });
    return contains;
  }

  private getNextInOrder(node: BinaryNode<T>): BinaryNode<T> {
    if (node == null) throw new NonExistingDataError();
    let iter = node.right;
    while (iter.left != null) {
      iter = iter.left;
    }
    return iter;
  }

  private removeFrom(data: T, node: BinaryNode<T>): BinaryNode<T> {
      if (node == null) throw new NonExistingDataError();
      if (data > node.data) node.right = this.removeFrom(data, node.right);
      else if (data < node.data) node.left = this.removeFrom(data, node.left);
      else {
        if (node.right == null) return node.left;
        if (node.left == null) return node.right;
        else {
          const next = this.getNextInOrder(node);
          node.data = next.data;
          node.right = this.removeFrom(data, node.right);
          return node;
        }
      }
      return node;
    }
}
