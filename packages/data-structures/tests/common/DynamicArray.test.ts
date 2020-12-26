import DynamicArray from '../../src/common/DynamicArray';
import { IndexOutOfRangeError } from '../../src/exceptions';

describe('DynamicArray', () => {
  let array: DynamicArray<number>;

  beforeEach(() => {
    array = new DynamicArray();
  });

  describe('length', () => {
    it('should initialized as 0', () => {
      expect(array.length).toEqual(0);
    });
  });

  describe('insertAt', () => {
    it('should throw error when index is out of range', () => {
      expect(() => {
        array.insertAt(1, 12);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should increase length by 1', () => {
      array.insertAt(0, 12);
      expect(array.length).toEqual(1);
    });
    it('should insert to the index (1)', () => {
      array.insertAt(0, 12);

      const returned = array.toString();
      expect(returned).toEqual('[ 12 ]');
    });

    it('should insert to the index (2)', () => {
      array.insertAt(0, 12);
      array.insertAt(1, 24);
      array.insertAt(2, 36);

      array.insertAt(1, 48);

      const returned = array.toString();
      expect(returned).toEqual('[ 12 48 24 36 ]');
    });

    it(`should increase static array size
       when length is equal to static array size`, () => {
      array.insertAt(0, 12);

      array.increaseSize = jest.fn(() => {
        return array.changeSize(array.length * 2);
      });
      array.insertAt(1, 24);

      expect(array.increaseSize).toHaveBeenCalledTimes(1);
    });
  });

  describe('removeAt', () => {
    it('should throw error when index is out of range', () => {
      expect(() => {
        array.removeAt(0);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should decrease length by 1', () => {
      array.insertAt(0, 12);

      array.removeAt(0);

      expect(array.length).toEqual(0);
    });
    it('should remove at the index (1)', () => {
      array.insertAt(0, 12);
      array.removeAt(0);

      const returned = array.toString();
      expect(returned).toEqual('[ ]');
    });

    it('should remove to the index (2)', () => {
      array.insertAt(0, 12);
      array.insertAt(1, 24);
      array.insertAt(2, 36);

      array.removeAt(1);

      const returned = array.toString();
      expect(returned).toEqual('[ 12 36 ]');
    });

    it(`should decrease static array size
       when length is half of static array size`, () => {
      array.insertAt(0, 12);
      array.insertAt(1, 24);

      array.decreaseSize = jest.fn();
      array.removeAt(1);

      expect(array.decreaseSize).toHaveBeenCalledTimes(1);
    });
  });

  describe('get', () => {
    it('should throw error when called right after initialization', () => {
      expect(() => {
        array.get(0);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should throw error when index out of range', () => {
      array.insertAt(0, 12);
      array.insertAt(1, 12);

      expect(() => {
        array.get(2);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should return data in the index (1)', () => {
      array.insertAt(0, 12);

      const returned = array.get(0);
      expect(returned).toEqual(12);
    });

    it('should return data in the index (1)', () => {
      array.insertAt(0, 12);
      array.insertAt(1, 24);
      array.insertAt(2, 36);

      const returned = array.get(1);
      expect(returned).toEqual(24);
    });
  });

  describe('set', () => {
    it('should throw error when called right after initialization', () => {
      expect(() => {
        array.set(0, 12);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should throw error when index out of range', () => {
      array.insertAt(0, 12);
      array.insertAt(1, 24);

      expect(() => {
        array.set(2, 36);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should set data in the index (1)', () => {
      array.insertAt(0, 12);

      array.set(0, 24);

      const returned = array.get(0);
      expect(returned).toEqual(24);
    });

    it('should set data in the index (2)', () => {
      array.insertAt(0, 12);
      array.insertAt(1, 24);
      array.insertAt(2, 36);

      array.set(1, 48);

      const returned = array.get(1);
      expect(returned).toEqual(48);
    });
  });
  describe('toString', () => {
    it('should return "[ ]" when array is empty', () => {
      const returned = array.toString();
      expect(returned).toEqual('[ ]');
    });
  });
});
