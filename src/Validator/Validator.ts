import { IErrors, IValidator } from './ValidatorTypes';

class Validator<T> implements IValidator<T> {
  private errors: IErrors;

  constructor() {
    this.errors = { isValid: true, errorMessages: [] };
  }
}
export default Validator;
