export default class DuplicateDataError extends Error {
  constructor() {
    super('The structure already contains same data!');
  }
}
