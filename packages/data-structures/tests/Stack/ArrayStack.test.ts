import { ArrayStack } from '../../src';
import { EmptyStructureError } from '../../src/exceptions';

describe('ArrayStack', () => {
  describe('length', () => {
    it('should initialize with 0', () => {
      const arrayStack = new ArrayStack();
      expect(arrayStack.length).toEqual(0);
    });

    it('should increment by one when push method called', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);

      expect(arrayStack.length).toEqual(1);
    });

    it('should decrement by one when pop method called', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);
      arrayStack.pop();

      expect(arrayStack.length).toEqual(0);
    });
  });

  describe('push', () => {
    it('should push to the stack', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);
      arrayStack.push(24);

      expect(arrayStack.toString()).toEqual('[ 12 24 ]');
    });
  });

  describe('pop', () => {
    it('should throw error when called right after initialized', () => {
      const arrayStack = new ArrayStack();

      expect(() => {
        arrayStack.pop();
      }).toThrowError(EmptyStructureError);
    });

    it('should remove from stack', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);
      arrayStack.push(24);
      arrayStack.pop();

      expect(arrayStack.toString()).toEqual('[ 12 ]');
    });

    it('should return last pushed item', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);
      arrayStack.push(24);

      const returned = arrayStack.pop();
      expect(returned).toEqual(24);
    });

    it('should throw error when there is no item to pop', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);
      arrayStack.push(24);
      arrayStack.pop();
      arrayStack.pop();

      expect(() => {
        arrayStack.pop();
      }).toThrowError(EmptyStructureError);
    });
  });

  describe('peek', () => {
    it('should throw error when called right after initialized', () => {
      const arrayStack = new ArrayStack();

      expect(() => {
        arrayStack.peek();
      }).toThrowError(EmptyStructureError);
    });

    it('should return last pushed item', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);
      arrayStack.push(24);

      const returned = arrayStack.peek();
      expect(returned).toEqual(24);
    });

    it('should throw error when there is no item to peek', () => {
      const arrayStack = new ArrayStack();

      arrayStack.push(12);
      arrayStack.push(24);
      arrayStack.pop();
      arrayStack.pop();

      expect(() => {
        arrayStack.peek();
      }).toThrowError(EmptyStructureError);
    });
  });

  describe('toString', () => {
    it("should return '[ ]' when called right after initialization", () => {
      const arrayStack = new ArrayStack();
      const returned = arrayStack.toString();
      expect(returned).toEqual('[ ]');
    });
  });
});
