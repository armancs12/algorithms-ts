import IQueue from '../../src/Queue/IQueue';
import { ArrayQueue } from '../../src';
import { NoItemError } from '../../src/exceptions';

describe('ArrayQueue', () => {
  let queue: IQueue<number>;

  beforeEach(() => {
    queue = new ArrayQueue();
  });

  describe('length', () => {
    it('should initialized with 0', () => {
      expect(queue.length).toEqual(0);
    });
  });

  describe('enqueue', () => {
    it('should increase length by 1', () => {
      queue.enqueue(12);
      expect(queue.length).toEqual(1);
    });

    it('should push to the queue', () => {
      queue.enqueue(12);
      queue.enqueue(24);

      const returned = queue.toString();
      expect(returned).toEqual('[ 12 24 ]');
    });
  });

  describe('dequeue', () => {
    it('should throw an NoItemError when called right after initialization', () => {
      expect(() => {
        queue.dequeue();
      }).toThrowError(NoItemError);
    });

    it('should decrease length by 1', () => {
      queue.enqueue(12);
      queue.dequeue();

      expect(queue.length).toEqual(0);
    });

    it('should return the front of the queue', () => {
      queue.enqueue(12);
      queue.enqueue(24);

      const returned = queue.dequeue();
      expect(returned).toEqual(12);
    });

    it('should pop the front from the queue', () => {
      queue.enqueue(12);
      queue.enqueue(24);
      queue.dequeue();

      const returned = queue.toString();
      expect(returned).toEqual('[ 24 ]');
    });

    it('should throw an NoItemError when queue is empty', () => {
      queue.enqueue(12);
      queue.enqueue(24);
      queue.dequeue();
      queue.dequeue();

      expect(() => {
        queue.dequeue();
      }).toThrowError(NoItemError);
    });
  });

  describe('front', () => {
    it('should throw an NoItemError when called right after initialization', () => {
      expect(() => {
        queue.front();
      }).toThrowError(NoItemError);
    });

    it('should return the front of the queue', () => {
      queue.enqueue(12);
      queue.enqueue(24);

      const returned = queue.front();
      expect(returned).toEqual(12);
    });

    it('should throw an NoItemError when queue is empty', () => {
      queue.enqueue(12);
      queue.enqueue(24);
      queue.dequeue();
      queue.dequeue();

      expect(() => {
        queue.front();
      }).toThrowError(NoItemError);
    });
  });

  describe('rear', () => {
    it('should throw an NoItemError when called right after initialization', () => {
      expect(() => {
        queue.rear();
      }).toThrowError(NoItemError);
    });

    it('should return the rear of the queue', () => {
      queue.enqueue(12);
      queue.enqueue(24);

      const returned = queue.rear();
      expect(returned).toEqual(24);
    });

    it('should throw an NoItemError when queue is empty', () => {
      queue.enqueue(12);
      queue.enqueue(24);
      queue.dequeue();
      queue.dequeue();

      expect(() => {
        queue.rear();
      }).toThrowError(NoItemError);
    });
  });

  describe('toString', () => {
    it('should return "[ ]" when called from empty queue', () => {
      const returned = queue.toString();
      expect(returned).toEqual('[ ]');
    });
  });
});
