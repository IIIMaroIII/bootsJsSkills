export interface IValidator {
  addError(message: string): this;
  getErrors(): IErrors;
}

export interface IErrors {
  isValid: boolean;
  errorMessages: string[];
}

export interface IStringValidator extends IValidator {
  minLength(v: number, message?: string): this;
  maxLength(v: number, message?: string): this;
}

export interface INumberValidator extends IValidator {
  odd(v: number, message: string): this;
  even(v: number, message: string): this;
}
