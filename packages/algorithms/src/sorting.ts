import { ArrayList, IList, MinBinaryHeap } from 'data-structures';

type sortFunc = <T>(
  list: IList<T>,
  compare?: <T>(first: T, second: T) => number
) => IList<T>;

function compareDefaultFunc<T>(first: T, second: T): number {
  if (first > second) return 1;
  if (first == second) return 0;
  else return -1;
}

export const bubbleSort: sortFunc = (list, compare = compareDefaultFunc) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (compare(list.get(j), list.get(j + 1)) > 0) {
        //Swap
        const data = list.get(j);
        list.set(j, list.get(j + 1));
        list.set(j + 1, data);
      }
    }
  }
  return list;
};

export const selectionSort: sortFunc = (list, compare = compareDefaultFunc) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < list.length; j++) {
      if (compare(list.get(minIndex), list.get(j)) > 0) {
        minIndex = j;
      }
    }
    const data = list.get(i);
    list.set(i, list.get(minIndex));
    list.set(minIndex, data);
  }
  return list;
};

export const insertionSort: sortFunc = (list, compare = compareDefaultFunc) => {
  for (let i = 0; i < list.length; i++) {
    const data = list.get(i);
    let pre = i - 1;
    while (pre >= 0 && compare(list.get(pre), data) > 0) {
      list.set(pre + 1, list.get(pre));
      pre--;
    }
    list.set(pre + 1, data);
  }
  return list;
};

export const quickSort: sortFunc = (list, compare = compareDefaultFunc) => {
  /**
   * Chooses last element of list as pivot
   * And returns it's correct index in the list
   */
  function getPivotIndex(low: number, high: number): number {
    const pivot = list.get(high);
    let correctIndex = low;

    for (let i = low; i < high; i++) {
      //If it's smaller, put it before pivot
      if (compare(list.get(i), pivot) < 0) {
        const data = list.get(correctIndex);
        list.set(correctIndex, list.get(i));
        list.set(i, data);

        correctIndex++;
      }
    }
    //Found the correct index, now put pivot there
    list.set(high, list.get(correctIndex));
    list.set(correctIndex, pivot);

    return correctIndex;
  }

  function sort(low: number, high: number): void {
    if (low >= high) return;
    const pIndex = getPivotIndex(low, high);
    sort(low, pIndex - 1);
    sort(pIndex + 1, high);
  }

  sort(0, list.length - 1);
  return list;
};

export const mergeSort: sortFunc = (list, compare = compareDefaultFunc) => {
  function merge<T>(left: IList<T>, right: IList<T>): IList<T> {
    const length = left.length + right.length;
    const list = new ArrayList<T>();

    let leftIndex = 0;
    let rightIndex = 0;

    for (let i = 0; i < length; i++) {
      if (left.length == leftIndex) {
        list.push(right.get(rightIndex++));
      } else if (right.length == rightIndex) {
        list.push(left.get(leftIndex++));
      } else {
        const leftData = left.get(leftIndex);
        const rightData = right.get(rightIndex);
        if (compare(leftData, rightData) < 0) {
          list.push(leftData);
          leftIndex++;
        } else {
          list.push(rightData);
          rightIndex++;
        }
      }
    }

    return list;
  }

  function sort<T>(list: IList<T>): IList<T> {
    if (list.length <= 1) return list;

    const middle = Math.floor(list.length / 2);

    let left: IList<T> = new ArrayList();
    for (let i = 0; i < middle; i++) left.push(list.get(i));
    left = sort(left);

    let right: IList<T> = new ArrayList();
    for (let i = middle; i < list.length; i++) right.push(list.get(i));
    right = sort(right);

    return merge(left, right);
  }

  const sorted = sort(list);
  for (let i = 0; i < list.length; i++) list.set(i, sorted.get(i));
  return list;
};

export const heapSort: sortFunc = <T>(
  list: IList<T>,
  compare = compareDefaultFunc
) => {
  const heap = new MinBinaryHeap<T>(compare);
  while (list.length != 0) heap.push(list.pop());
  while (heap.length != 0) list.push(heap.pop());
  return list;
};
