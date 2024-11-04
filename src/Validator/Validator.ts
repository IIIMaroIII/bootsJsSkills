import { IErrors, IValidator } from './ValidatorTypes';

class Validator implements IValidator {
  protected errors: IErrors;

  constructor() {
    this.errors = { isValid: true, errorMessages: [] };
  }
  addError(message: string): this {
    this.errors.isValid = false;
    this.errors.errorMessages.push(message);
    return this;
  }
  getErrors(): IErrors {
    console.log('this.errors', this.errors);
    return this.errors;
  }
}

class StringValidator<T> extends Validator {
  private value: T;

  constructor(value: T) {
    super();
    this.value = value;
  }

  minLength(v: number, message: string = `Min length is ${v} symbols`): this {
    console.log('this.errors', this.errors);
    console.log('this.value in min()', this.value);
    console.log('v parametr in min()', v);
    console.log('optional message parametr', message);
    return this;
  }
  maxLength(v: number, message: string = `Max length is ${v} symbols`): this {
    console.log('this.value in max()', this.value);
    console.log('v parametr in max()', v);
    console.log('optional message parametr in max()', message);
    return this;
  }
}

class NumberValidator<T> extends Validator {
  private value: T;

  constructor(value: T) {
    super();
    this.value = value;
  }

  odd(v: number, message: string = 'Must be odd'): this {
    console.log('this.errors in odd()', this.errors);
    console.log('this.value in odd()', this.value);
    console.log('v in odd()', v);
    console.log('message in odd()', message);
    return this;
  }
  even(v: number, message: string = 'Must be even'): this {
    console.log('this.errors in even()', this.errors);
    console.log('this.value in even()', this.value);
    console.log('v in even()', v);
    console.log('message in even()', message);
    return this;
  }
}

function validate(value: string): StringValidator<string>;
function validate(value: number): NumberValidator<number>;
function validate(value: unknown): StringValidator<string> | NumberValidator<number> | IErrors {
  if (typeof value === 'string') {
    return new StringValidator(value);
  }
  if (typeof value === 'number') {
    return new NumberValidator(value);
  }
  return new Validator().addError('Unsupported type').getErrors();
}
export default validate;
