export default class NoItemError extends Error {
  constructor() {
    super('No item in the structure!');
  }
}
