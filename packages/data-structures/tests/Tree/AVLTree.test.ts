import { IBinarySearchTree, AVLTree } from '../../src';
import {
  EmptyStructureError,
  NonExistingDataError,
  DuplicateDataError,
} from '../../src/exceptions';

describe('AVLTree', () => {
  let tree: IBinarySearchTree<number>;

  beforeEach(() => {
    tree = new AVLTree();
  });

  describe('length', () => {
    it('should initialize as 0', () => {
      expect(tree.length).toEqual(0);
    });
  });

  describe('insert', () => {
    it('should insert to the tree', () => {
      tree.insert(12);
      tree.insert(24);
      const string = tree.toString();

      expect(string).toEqual('[ 12 24 ]');
    });

    it('should throw error when contains same data', () => {
      tree.insert(12);

      expect(() => {
        tree.insert(12);
      }).toThrowError(DuplicateDataError);
    });

    it('should increase length by 1', () => {
      tree.insert(12);
      expect(tree.length).toEqual(1);
    });

    it('should balance the tree (left-left case)', () => {
      tree.insert(36);
      tree.insert(24);
      tree.insert(12);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });

    it('should balance the tree (left-right case)', () => {
      tree.insert(36);
      tree.insert(12);
      tree.insert(24);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });

    it('should balance the tree (right-right case)', () => {
      tree.insert(12);
      tree.insert(24);
      tree.insert(36);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });

    it('should balance the tree (right-left case)', () => {
      tree.insert(12);
      tree.insert(36);
      tree.insert(24);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });
  });

  describe('contains', () => {
    it('should return false when data is not present (1)', () => {
      const bool = tree.contains(12);
      expect(bool).toEqual(false);
    });

    it('should return false when data is not present (2)', () => {
      tree.insert(24);
      const bool = tree.contains(12);
      expect(bool).toEqual(false);
    });

    it('should return true when data is present', () => {
      tree.insert(12);
      const bool = tree.contains(12);
      expect(bool).toEqual(true);
    });
  });

  describe('remove', () => {
    it('should throw EmptyStructureError when called right after initialization', () => {
      expect(() => {
        tree.remove(12);
      }).toThrowError(EmptyStructureError);
    });

    it('should remove from the tree', () => {
      tree.insert(12);
      tree.insert(24);
      tree.remove(12);

      const string = tree.toString();
      expect(string).toEqual('[ 24 ]');
    });

    it('should decrease length by one', () => {
      tree.insert(12);
      tree.remove(12);

      expect(tree.length).toEqual(0);
    });

    it('should throw EmptyStructureError when tree is empty', () => {
      tree.insert(12);
      tree.remove(12);
      expect(() => {
        tree.remove(24);
      }).toThrowError(EmptyStructureError);
    });

    it('should throw NoDataError when try to remove non-existing data', () => {
      tree.insert(12);
      expect(() => {
        tree.remove(24);
      }).toThrowError(NonExistingDataError);
    });

    it('should balance the tree (left-left case)', () => {
      tree.insert(36);
      tree.insert(48);
      tree.insert(24);
      tree.insert(12);

      tree.remove(48);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });

    it('should balance the tree (left-right case)', () => {
      tree.insert(36);
      tree.insert(48);
      tree.insert(12);
      tree.insert(24);

      tree.remove(48);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });

    it('should balance the tree (right-right case)', () => {
      tree.insert(12);
      tree.insert(-12);
      tree.insert(24);
      tree.insert(36);

      tree.remove(-12);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });

    it('should balance the tree (right-left case)', () => {
      tree.insert(12);
      tree.insert(-12);
      tree.insert(36);
      tree.insert(24);

      tree.remove(-12);

      const values: number[] = [];
      tree.preOrderIter((value) => {
        values.push(value);
      });

      expect(values[0]).toEqual(24);
      expect(values[1]).toEqual(12);
      expect(values[2]).toEqual(36);
    });
  });

  describe('inOrderIter', () => {
    it('should not call forEach function when tree is empty', () => {
      const forEach = jest.fn();
      tree.inOrderIter(forEach);
      expect(forEach).toHaveBeenCalledTimes(0);
    });

    it('should iterate each data in order', () => {
      tree.insert(24);
      tree.insert(12);
      tree.insert(-12);
      tree.insert(36);
      tree.insert(-24);
      tree.insert(72);

      const array: number[] = [];
      tree.inOrderIter((data) => {
        array.push(data);
      });

      expect(array.length).toEqual(6);
      expect(array[0]).toEqual(-24);
      expect(array[1]).toEqual(-12);
      expect(array[2]).toEqual(12);
      expect(array[3]).toEqual(24);
      expect(array[4]).toEqual(36);
      expect(array[5]).toEqual(72);
    });
  });

  describe('preOrderIter', () => {
    it('should not call forEach function when tree is empty', () => {
      const forEach = jest.fn();
      tree.preOrderIter(forEach);
      expect(forEach).toHaveBeenCalledTimes(0);
    });

    it('should iterate each data pre order', () => {
      tree.insert(24);
      tree.insert(12);
      tree.insert(-12);
      tree.insert(36);
      tree.insert(-24);
      tree.insert(72);

      const array: number[] = [];
      tree.preOrderIter((data) => {
        array.push(data);
      });

      expect(array.length).toEqual(6);
      expect(array[0]).toEqual(12);
      expect(array[1]).toEqual(-12);
      expect(array[2]).toEqual(-24);
      expect(array[3]).toEqual(36);
      expect(array[4]).toEqual(24);
      expect(array[5]).toEqual(72);
    });
  });

  describe('postOrderIter', () => {
    it('should not call forEach function when tree is empty', () => {
      const forEach = jest.fn();
      tree.postOrderIter(forEach);
      expect(forEach).toHaveBeenCalledTimes(0);
    });

    it('should iterate each data post order', () => {
      tree.insert(24);
      tree.insert(12);
      tree.insert(-12);
      tree.insert(36);
      tree.insert(-24);
      tree.insert(72);

      const array: number[] = [];
      tree.postOrderIter((data) => {
        array.push(data);
      });

      expect(array.length).toEqual(6);
      expect(array[0]).toEqual(-24);
      expect(array[1]).toEqual(-12);
      expect(array[2]).toEqual(24);
      expect(array[3]).toEqual(72);
      expect(array[4]).toEqual(36);
      expect(array[5]).toEqual(12);
    });
  });

  describe('toString', () => {
    it('should return "[]" when tree is empty', () => {
      const string = tree.toString();
      expect(string).toEqual('[ ]');
    });

    it('should return tree data in order', () => {
      tree.insert(24);
      tree.insert(12);
      tree.insert(-12);
      tree.insert(36);
      tree.insert(-24);
      tree.insert(72);

      const string = tree.toString();
      expect(string).toEqual('[ -24 -12 12 24 36 72 ]');
    });
  });
});
