export default class EmptyStructureError extends Error {
  constructor() {
    super('The structure is empty!');
  }
}
