import { ICreateError, IErrors, IValidator } from './ValidatorTypes';

class Validator implements IValidator {
  private errors: IErrors;

  constructor() {
    this.errors = { isValid: true, errorMessages: [] };
  }

  createError<T extends IErrors>(err: T): ICreateError {
    const customError = new Error() as ICreateError;
    const { isValid, errorMessages } = err;
    customError.errorMessages = errorMessages;
    customError.isValid = isValid;

    return customError;
  }
  getErrors(): IErrors {
    return this.errors;
  }
}

export default Validator;
