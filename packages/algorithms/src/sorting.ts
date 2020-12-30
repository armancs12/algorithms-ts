import { IList } from 'data-structures';

type sortFunc = <T>(list: IList<T>) => IList<T>;

export const bubbleSort: sortFunc = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list.get(j) > list.get(j + 1)) {
        //Swap
        const data = list.get(j);
        list.set(j, list.get(j + 1));
        list.set(j + 1, data);
      }
    }
  }
  return list;
};

export const selectionSort: sortFunc = <T>(list: IList<T>) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < list.length; j++) {
      if (list.get(minIndex) > list.get(j)) {
        minIndex = j;
      }
    }
    const data = list.get(i);
    list.set(i, list.get(minIndex));
    list.set(minIndex, data);
  }
  return list;
};
