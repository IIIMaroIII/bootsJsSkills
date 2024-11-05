import { IValidator } from './ValidatorTypes';

export interface INumberValidator extends IValidator {
  odd(message: string): this;
  even(message: string): this;
}
