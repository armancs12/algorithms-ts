import { ArrayList } from '../../src';
import {
  EmptyStructureError,
  IndexOutOfRangeError,
} from '../../src/exceptions';

describe('ArrayList', () => {
  describe('length', () => {
    it('should initialize with 0', () => {
      const arrayList = new ArrayList();
      expect(arrayList.length).toEqual(0);
    });

    it('should increment by 1 when push method called', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      expect(arrayList.length).toEqual(1);
    });

    it('should increment by 1 when pushFront method called', () => {
      const arrayList = new ArrayList();
      arrayList.pushFront(0);
      expect(arrayList.length).toEqual(1);
    });

    it('should decrement by 1 when pop method called', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      arrayList.pop();

      expect(arrayList.length).toEqual(0);
    });

    it('should increment by 1 when popFront method called', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      arrayList.popFront();

      expect(arrayList.length).toEqual(0);
    });

    it('should decrement by 1 when removeAt method called', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      arrayList.removeAt(0);

      expect(arrayList.length).toEqual(0);
    });

    it('should increment by 1 when insertAt method called', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      arrayList.insertAt(0, 24);

      expect(arrayList.length).toEqual(2);
    });
  });

  //describe('push', () => {});

  //describe('pushFront', () => {});

  describe('pop', () => {
    it('should throw error when called right after initialized', () => {
      const arrayList = new ArrayList();

      expect(() => {
        arrayList.pop();
      }).toThrowError(EmptyStructureError);
    });

    it('should return last pushed item', () => {
      const arrayList = new ArrayList<number>();
      arrayList.push(12);
      arrayList.push(24);

      const returned = arrayList.pop();

      expect(returned).toEqual(24);
    });

    it('should throw error when no element left to pop', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      arrayList.pop();

      expect(() => {
        arrayList.pop();
      }).toThrowError(EmptyStructureError);
    });
  });

  describe('popFront', () => {
    it('should throw error when called right after initialized', () => {
      const arrayList = new ArrayList();

      expect(() => {
        arrayList.popFront();
      }).toThrowError(EmptyStructureError);
    });

    it('should return first pushed item', () => {
      const arrayList = new ArrayList<number>();
      arrayList.push(12);
      arrayList.push(24);

      const returned = arrayList.popFront();

      expect(returned).toEqual(12);
    });

    it('should throw error when no element left to pop', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      arrayList.pop();

      expect(() => {
        arrayList.popFront();
      }).toThrowError(EmptyStructureError);
    });
  });

  describe('get', () => {
    it('should throw error when called right after initialization', () => {
      const arrayList = new ArrayList();

      expect(() => {
        arrayList.get(0);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should return data in the index (1)', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);

      const returned = arrayList.get(0);
      expect(returned).toEqual(12);
    });

    it('should return data in the index (2)', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);
      arrayList.push(24);

      const returned = arrayList.get(1);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);

      expect(() => {
        arrayList.get(1);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('set', () => {
    it('should throw error when called right after initialization', () => {
      const arrayList = new ArrayList();

      expect(() => {
        arrayList.set(0, 12);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should set data in the index', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);
      arrayList.set(0, 24);

      const returned = arrayList.get(0);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      const arrayList = new ArrayList();

      expect(() => {
        arrayList.set(1, 12);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('removeAt', () => {
    it('should throw error when called right after initialization', () => {
      const arrayList = new ArrayList();

      expect(() => {
        arrayList.removeAt(0);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should return data in the index (1)', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);

      const returned = arrayList.removeAt(0);
      expect(returned).toEqual(12);
    });

    it('should return data in the index (2)', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);
      arrayList.push(24);

      const returned = arrayList.removeAt(1);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);

      expect(() => {
        arrayList.removeAt(1);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('insertAt', () => {
    it('should throw error when called right after initialization', () => {
      const arrayList = new ArrayList();

      expect(() => {
        arrayList.insertAt(0, 12);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should insert in the index', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);
      arrayList.push(24);
      arrayList.push(36);

      arrayList.insertAt(1, 48);

      expect(arrayList.toString()).toEqual('[ 12 48 24 36 ]');
    });

    it('should throw error when index is out of list range', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);
      arrayList.push(24);

      expect(() => {
        arrayList.insertAt(3, 36);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('toString', () => {
    it('should return "[ ]" when called right after initialization', () => {
      const arrayList = new ArrayList();
      const returned = arrayList.toString();
      expect(returned).toEqual('[ ]');
    });

    it('should print the list (1)', () => {
      const arrayList = new ArrayList();
      arrayList.push(0);
      arrayList.push(12);

      const returned = arrayList.toString();

      expect(returned).toEqual('[ 0 12 ]');
    });

    it('should print the list (2)', () => {
      const arrayList = new ArrayList();
      arrayList.push(12);
      arrayList.pushFront(24);
      arrayList.pushFront(36);
      arrayList.push(48);
      arrayList.push(60);

      const returned = arrayList.toString();

      expect(returned).toEqual('[ 36 24 12 48 60 ]');
    });
  });
});
