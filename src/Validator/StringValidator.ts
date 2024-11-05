import Validator from './Validator';

class StringValidator<T> extends Validator {
  private value: T;

  constructor(value: T) {
    super();
    this.value = value;
    this.info.type = 'string';
  }

  minLength(v: number, message: string = `Min length is ${v} symbols`): this {
    return this;
  }
  maxLength(v: number, message: string = `Max length is ${v} symbols`): this {
    return this;
  }
}

export default StringValidator;
