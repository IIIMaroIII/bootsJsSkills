import { IValidator } from './ValidatorTypes';

export interface IStringValidator extends IValidator {
  minLength(v: number, message?: string): this;
  maxLength(v: number, message?: string): this;
}
