import BinaryHeap from './BinaryHeap';

export default class MaxBinaryHeap<T> extends BinaryHeap<T> {
  protected hasHigherPriority(first: number, second: number): boolean {
    return this.compare(this.array.get(first), this.array.get(second)) > 0;
  }
}
