import { LinkedList } from '../../src';

describe('LinkedList', () => {
  describe('length', () => {
    it('should initialize with 0', () => {
      let linkedList = new LinkedList();
      expect(linkedList.length).toEqual(0);
    });

    it('should increment by 1 when push method called', () => {
      let linkedList = new LinkedList();
      linkedList.push(0);
      expect(linkedList.length).toEqual(1);
    });

    it('should increment by 1 when pushFront method called', () => {
      let linkedList = new LinkedList();
      linkedList.pushFront(0);
      expect(linkedList.length).toEqual(1);
    });

    it('should decrement by 1 when pop method called', () => {
      let linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.pop();

      expect(linkedList.length).toEqual(0);
    });

    it('should increment by 1 when popFront method called', () => {
      let linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.popFront();

      expect(linkedList.length).toEqual(0);
    });

    it('should decrement by 1 when removeAt method called', () => {
      let linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.removeAt(0);

      expect(linkedList.length).toEqual(0);
    });
  });

  describe('push', () => {});

  describe('pushFront', () => {});

  describe('pop', () => {
    it('should throw error when called right after initialized', () => {
      let linkedList = new LinkedList();

      expect(() => {
        linkedList.pop();
      }).toThrowError('There is no element to pop');
    });

    it('should return last pushed item', () => {
      let linkedList = new LinkedList<number>();
      linkedList.push(12);
      linkedList.push(24);

      let returned = linkedList.pop();

      expect(returned).toEqual(24);
    });

    it('should throw error when no element left to pop', () => {
      let linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.pop();

      expect(() => {
        linkedList.pop();
      }).toThrowError('There is no element to pop');
    });
  });

  describe('popFront', () => {
    it('should throw error when called right after initialized', () => {
      let linkedList = new LinkedList();

      expect(() => {
        linkedList.popFront();
      }).toThrowError('There is no element to pop');
    });

    it('should return first pushed item', () => {
      let linkedList = new LinkedList<number>();
      linkedList.push(12);
      linkedList.push(24);

      let returned = linkedList.popFront();

      expect(returned).toEqual(12);
    });

    it('should throw error when no element left to pop', () => {
      let linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.pop();

      expect(() => {
        linkedList.popFront();
      }).toThrowError('There is no element to pop');
    });
  });

  describe('get', () => {
    it('should throw error when called right after initialization', () => {
      let linkedList = new LinkedList();

      expect(() => {
        linkedList.get(0);
      }).toThrowError('Index out of list range!');
    });

    it('should return data in the index (1)', () => {
      let linkedList = new LinkedList();
      linkedList.push(12);

      let returned = linkedList.get(0);
      expect(returned).toEqual(12);
    });

    it('should return data in the index (2)', () => {
      let linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.push(24);

      let returned = linkedList.get(1);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      let linkedList = new LinkedList();
      linkedList.push(12);

      expect(() => {
        linkedList.get(1);
      }).toThrowError('Index out of list range!');
    });
  });

  describe('removeAt', () => {
    it('should throw error when called right after initialization', () => {
      let linkedList = new LinkedList();

      expect(() => {
        linkedList.removeAt(0);
      }).toThrowError('Index out of list range!');
    });

    it('should return data in the index (1)', () => {
      let linkedList = new LinkedList();
      linkedList.push(12);

      let returned = linkedList.removeAt(0);
      expect(returned).toEqual(12);
    });

    it('should return data in the index (2)', () => {
      let linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.push(24);

      let returned = linkedList.removeAt(1);
      expect(returned).toEqual(24);
    });

    it('should throw error when index is out of list range', () => {
      let linkedList = new LinkedList();
      linkedList.push(12);

      expect(() => {
        linkedList.removeAt(1);
      }).toThrowError('Index out of list range!');
    });
  });

  describe('toString', () => {
    it('should return "[ ]" when called right after initialization', () => {
      let linkedList = new LinkedList();
      let returned = linkedList.toString();
      expect(returned).toEqual('[ ]');
    });

    it('should print the list (1)', () => {
      let linkedList = new LinkedList();
      linkedList.push(0);
      linkedList.push(12);

      let returned = linkedList.toString();

      expect(returned).toEqual('[ 0 12 ]');
    });

    it('should print the list (2)', () => {
      let linkedList = new LinkedList();
      linkedList.push(12);
      linkedList.pushFront(24);
      linkedList.pushFront(36);
      linkedList.push(48);
      linkedList.push(60);

      let returned = linkedList.toString();

      expect(returned).toEqual('[ 36 24 12 48 60 ]');
    });
  });
});
