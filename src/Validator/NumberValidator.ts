import Validator from './Validator';

class NumberValidator<T> extends Validator {
  private value: T;

  constructor(value: T) {
    super();
    this.value = value;
    this.info.type = 'number';
  }

  odd(message: string = 'Must be odd'): this {
    console.log('typeof this.value', typeof this.value);
    return this;
  }
  even(message: string = 'Must be even'): this {
    return this;
  }
}

export default NumberValidator;
