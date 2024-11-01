export interface IValidator<T> {
  validate(v: T): IValidator<T>;
}

export interface IErrors extends Error {
  isValid: boolean;
  errorMessages: string[];
}
