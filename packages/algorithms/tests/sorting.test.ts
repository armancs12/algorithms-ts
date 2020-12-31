import { ArrayList, IList, LinkedList } from 'data-structures';
import { bubbleSort, insertionSort, selectionSort, quickSort } from '../src';

type sortFunc = <T>(
  list: IList<T>,
  compare?: (first: T, second: T) => number
) => IList<T>;

describe(
  'sorting',
  sortingTest([bubbleSort, selectionSort, insertionSort, quickSort])
);

function sortingTest(funcs: sortFunc[]) {
  return () => {
    for (const func of funcs) {
      describe(func.name, () => {
        const Lists: IList<number>[] = [new ArrayList(), new LinkedList()];
        for (const List of Lists) {
          it(`should sort the ${List.constructor.name}`, () => {
            const list = List;

            list.push(12);
            list.push(-12);
            list.push(48);
            list.push(36);
            list.push(72);
            list.push(-24);

            func(list);
            expect(list.toString()).toEqual('[ -24 -12 12 36 48 72 ]');
          });
        }
      });
    }
  };
}
