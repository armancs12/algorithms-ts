import { BinarySearchTree } from '..';
import BinaryNode from '../common/BinaryNode';
import {
  DuplicateDataError,
  EmptyStructureError,
  NonExistingDataError,
} from '../exceptions';

class AVLNode<T> extends BinaryNode<T> {
  left: AVLNode<T>;
  right: AVLNode<T>;
  height: number;
  balanceFactor: number;
}

export default class AVLTree<T> extends BinarySearchTree<T> {
  root: AVLNode<T>;

  insert(data: T): void {
    this.root = this.insertToAVL(data, this.root);
    this._length++;
  }

  remove(data: T): void {
    if (this.length == 0) throw new EmptyStructureError();
    this.root = this.removeFromAVL(data, this.root);
    this._length--;
  }

  private insertToAVL(data: T, node: AVLNode<T>): AVLNode<T> {
    if (node == null) node = new AVLNode(data);
    else {
      if (this.compare(data, node.data) < 0)
        node.left = this.insertToAVL(data, node.left);
      else if (this.compare(data, node.data) > 0)
        node.right = this.insertToAVL(data, node.right);
      else throw new DuplicateDataError();
    }
    node = this.balance(node);
    return node;
  }

  private removeFromAVL(data: T, node: AVLNode<T>): AVLNode<T> {
    if (node == null) throw new NonExistingDataError();
    if (this.compare(data, node.data) > 0)
      node.right = this.removeFromAVL(data, node.right);
    else if (this.compare(data, node.data) < 0)
      node.left = this.removeFromAVL(data, node.left);
    else {
      if (node.right == null) return node.left;
      if (node.left == null) return node.right;
      else {
        const next = this.getNextInOrder(node);
        node.data = next.data;
        node.right = this.removeFromAVL(data, node.right);
        return node;
      }
    }
    node = this.balance(node);
    return node;
  }

  private balance(node: AVLNode<T>): AVLNode<T> {
    node = this.update(node);

    if (node.balanceFactor < -1) {
      const rightBF = node.right.balanceFactor;
      if (rightBF <= 0) {
        // Right-Right Case
        node = this.rotateToLeft(node);
      } else {
        // Right-Left Case
        node.right = this.rotateToRight(node.right);
        node = this.rotateToLeft(node);
      }
    } else if (node.balanceFactor > 1) {
      const leftBF = node.left ? node.left.balanceFactor : 0;
      if (leftBF >= 0) {
        //Left-Left Case
        node = this.rotateToRight(node);
      } else {
        //Left-Right Case
        node.left = this.rotateToLeft(node.left);
        node = this.rotateToRight(node);
      }
    }
    return node;
  }

  private update(node: AVLNode<T>): AVLNode<T> {
    const leftHeight = node.left ? node.left.height : -1;
    const rightHeight = node.right ? node.right.height : -1;

    node.height = Math.max(leftHeight, rightHeight) + 1;
    node.balanceFactor = leftHeight - rightHeight;

    return node;
  }

  private rotateToLeft(node: AVLNode<T>): AVLNode<T> {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    this.update(node);
    this.update(newRoot);
    return newRoot;
  }

  private rotateToRight(node: AVLNode<T>): AVLNode<T> {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    this.update(node);
    this.update(newRoot);
    return newRoot;
  }
}
