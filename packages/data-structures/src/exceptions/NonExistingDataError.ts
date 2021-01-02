export default class NonExistingDataError extends Error {
  constructor() {
    super('The data does not exist in the structure!');
  }
}
