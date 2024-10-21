export interface IValidator {
  checkObjectInArrayById<T extends IProduct>(obj: T, arr: T[]): this;
  checkStringsInObject<T extends IProduct, C extends IConfig>(obj: T, config?: C | undefined): this;
  checkNumbersInObject<T extends IProduct, C extends IConfig>(obj: T, config?: C | undefined): this;
  handleError<T extends IErrorObj>(err: T): IErrorHandler;
  getResult(): IErrorObj;
}
export interface IProductManager {
  addOneProduct(product: IProduct): this | IErrorHandler;
  getAllProducts(): IProduct[];
}

export interface IErrorObj {
  duplicate: boolean;
  errorMessages: string[];
  index: number | null;
}

export interface IErrorHandler extends Error, IErrorObj {}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  [key: string]: string | number | boolean;
}

export interface IConfig {
  maxLength?: number;
  minLength?: number;
  regex?: RegExp;
  isEqualZero?: boolean;
  isLessZero?: boolean;
}
