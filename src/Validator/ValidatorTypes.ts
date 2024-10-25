export interface IValidator {
  createError<T extends IErrors>(err: T): ICreateError;
  getErrors(): IErrors;
}
export interface IErrors {
  isValid: boolean;
  errorMessages: string[];
}

export interface IValidationRule<T> {
  (value: T, customMessage?: string): this;
}

export interface ICreateError extends Error, IErrors {}
