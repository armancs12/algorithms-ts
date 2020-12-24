import { LinkedStack } from '../../src';

describe('LinkedStack', () => {
  describe('length', () => {
    it('should initialize with 0', () => {
      const linkedStack = new LinkedStack();
      expect(linkedStack.length).toEqual(0);
    });

    it('should increment by one when push method called', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);

      expect(linkedStack.length).toEqual(1);
    });

    it('should decrement by one when pop method called', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);
      linkedStack.pop();

      expect(linkedStack.length).toEqual(0);
    });
  });

  describe('push', () => {
    it('should push to the stack', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);
      linkedStack.push(24);

      expect(linkedStack.toString()).toEqual('[ 12 24 ]');
    });
  });

  describe('pop', () => {
    it('should throw error when called right after initialized', () => {
      const linkedStack = new LinkedStack();

      expect(() => {
        linkedStack.pop();
      }).toThrowError('No item to pop');
    });

    it('should remove from stack', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);
      linkedStack.push(24);
      linkedStack.pop();

      expect(linkedStack.toString()).toEqual('[ 12 ]');
    });

    it('should return last pushed item', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);
      linkedStack.push(24);

      const returned = linkedStack.pop();
      expect(returned).toEqual(24);
    });

    it('should throw error when there is no item to pop', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);
      linkedStack.push(24);
      linkedStack.pop();
      linkedStack.pop();

      expect(() => {
        linkedStack.pop();
      }).toThrowError('No item to pop');
    });
  });

  describe('peek', () => {
    it('should throw error when called right after initialized', () => {
      const linkedStack = new LinkedStack();

      expect(() => {
        linkedStack.peek();
      }).toThrowError('No item to peek');
    });

    it('should return last pushed item', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);
      linkedStack.push(24);

      const returned = linkedStack.peek();
      expect(returned).toEqual(24);
    });

    it('should throw error when there is no item to peek', () => {
      const linkedStack = new LinkedStack();

      linkedStack.push(12);
      linkedStack.push(24);
      linkedStack.pop();
      linkedStack.pop();

      expect(() => {
        linkedStack.peek();
      }).toThrowError('No item to peek');
    });
  });

  describe('toString', () => {
    it("should return '[ ]' when called right after initialization", () => {
      const linkedStack = new LinkedStack();
      const returned = linkedStack.toString();
      expect(returned).toEqual('[ ]');
    });
  });
});
