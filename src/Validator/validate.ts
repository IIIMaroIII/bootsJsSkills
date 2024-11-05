import NumberValidator from './NumberValidator';
import StringValidator from './StringValidator';

function validate(value: string): StringValidator<string>;
function validate(value: number): NumberValidator<number>;
function validate(value: unknown): StringValidator<string> | NumberValidator<number> {
  if (typeof value === 'string') {
    return new StringValidator(value);
  }
  if (typeof value === 'number') {
    return new NumberValidator(value);
  }
  throw new Error('Unsupported type');
}
export default validate;
