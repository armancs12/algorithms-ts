export type compareFunction<T> = (first: T, second: T) => number;

export const defaultCompareFunction = <T>(): compareFunction<T> => {
  return (first: T, second: T) => {
    if (first > second) return 1;
    else if (first < second) return -1;
    else return 0;
  };
};
