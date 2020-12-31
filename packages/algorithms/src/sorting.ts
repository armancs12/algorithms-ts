import { IList } from 'data-structures';

type sortFunc = <T>(
  list: IList<T>,
  compare?: (first: T, second: T) => number
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
