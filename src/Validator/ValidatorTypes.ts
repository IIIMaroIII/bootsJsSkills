export interface IValidator {
  getErrors(): string[] | undefined;
  getInfo(): IInfo;
}

export interface IInfo {
  isValid: boolean;
  errorMessages: string[];
  type: string | null;
}
