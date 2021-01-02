import { LinkedList } from '../../src';
import {
  IndexOutOfRangeError,
  EmptyStructureError,
} from '../../src/exceptions';

describe('LinkedList', () => {
  describe('length', () => {
    it('should initialize with 0', () => {
      const linkedList = new LinkedList();
      expect(linkedList.length).toEqual(0);
    });

    it('should increment by 1 when push method called', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      expect(linkedList.length).toEqual(1);
    });

    it('should increment by 1 when pushFront method called', () => {
      const linkedList = new LinkedList();
      linkedList.pushFront(0);
      expect(linkedList.length).toEqual(1);
    });

    it('should decrement by 1 when pop method called', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.pop();

      expect(linkedList.length).toEqual(0);
    });

    it('should increment by 1 when popFront method called', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.popFront();

      expect(linkedList.length).toEqual(0);
    });

    it('should decrement by 1 when removeAt method called', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.removeAt(0);

      expect(linkedList.length).toEqual(0);
    });

    it('should increment by 1 when insertAt method called', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.insertAt(0, 24);

      expect(linkedList.length).toEqual(2);
    });
  });

  //describe('push', () => {});

  //describe('pushFront', () => {});

  describe('pop', () => {
    it('should throw error when called right after initialized', () => {
      const linkedList = new LinkedList();

      expect(() => {
        linkedList.pop();
      }).toThrowError(EmptyStructureError);
    });

    it('should return last pushed item', () => {
      const linkedList = new LinkedList<number>();
      linkedList.push(12);
      linkedList.push(24);

      const returned = linkedList.pop();

      expect(returned).toEqual(24);
    });

    it('should throw error when no element left to pop', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.pop();

      expect(() => {
        linkedList.pop();
      }).toThrowError(EmptyStructureError);
    });
  });

  describe('popFront', () => {
    it('should throw error when called right after initialized', () => {
      const linkedList = new LinkedList();

      expect(() => {
        linkedList.popFront();
      }).toThrowError(EmptyStructureError);
    });

    it('should return first pushed item', () => {
      const linkedList = new LinkedList<number>();
      linkedList.push(12);
      linkedList.push(24);

      const returned = linkedList.popFront();

      expect(returned).toEqual(12);
    });

    it('should throw error when no element left to pop', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.pop();

      expect(() => {
        linkedList.popFront();
      }).toThrowError(EmptyStructureError);
    });
  });

  describe('get', () => {
    it('should throw error when called right after initialization', () => {
      const linkedList = new LinkedList();

      expect(() => {
        linkedList.get(0);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should return data in the index (1)', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);

      const returned = linkedList.get(0);
      expect(returned).toEqual(12);
    });

    it('should return data in the index (2)', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.push(24);

      const returned = linkedList.get(1);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);

      expect(() => {
        linkedList.get(1);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('set', () => {
    it('should throw error when called right after initialization', () => {
      const linkedList = new LinkedList();

      expect(() => {
        linkedList.set(0, 12);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should set data in the index', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.set(0, 24);

      const returned = linkedList.get(0);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      const linkedList = new LinkedList();

      expect(() => {
        linkedList.set(1, 12);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('removeAt', () => {
    it('should throw error when called right after initialization', () => {
      const linkedList = new LinkedList();

      expect(() => {
        linkedList.removeAt(0);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should return data in the index (1)', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);

      const returned = linkedList.removeAt(0);
      expect(returned).toEqual(12);
    });

    it('should return data in the index (2)', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.push(24);

      const returned = linkedList.removeAt(1);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);

      expect(() => {
        linkedList.removeAt(1);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('insertAt', () => {
    it('should throw error when called right after initialization', () => {
      const linkedList = new LinkedList();

      expect(() => {
        linkedList.insertAt(0, 12);
      }).toThrowError(IndexOutOfRangeError);
    });

    it('should insert in the index', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.push(24);
      linkedList.push(36);

      linkedList.insertAt(1, 48);

      expect(linkedList.toString()).toEqual('[ 12 48 24 36 ]');
    });

    it('should throw error when index is out of list range', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.push(24);

      expect(() => {
        linkedList.insertAt(3, 36);
      }).toThrowError(IndexOutOfRangeError);
    });
  });

  describe('toString', () => {
    it('should return "[ ]" when called right after initialization', () => {
      const linkedList = new LinkedList();
      const returned = linkedList.toString();
      expect(returned).toEqual('[ ]');
    });

    it('should print the list (1)', () => {
      const linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.push(12);

      const returned = linkedList.toString();

      expect(returned).toEqual('[ 0 12 ]');
    });

    it('should print the list (2)', () => {
      const linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.pushFront(24);
      linkedList.pushFront(36);
      linkedList.push(48);
      linkedList.push(60);

      const returned = linkedList.toString();

      expect(returned).toEqual('[ 36 24 12 48 60 ]');
    });
  });
});
