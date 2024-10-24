export interface IValidator {
  checkOneInArrayById<T extends IProduct>(incomingItem: T, currentItems: T[]): this;
  checkManyInArrayById<T extends IProduct>(incomingItems: T[], currentItems: T[]): this;
  checkStringsInObject<T extends IProduct, C extends IConfig>(incomingItem: T, config?: C | undefined): this;
  checkNumbersInObject<T extends IProduct, C extends IConfig>(incomingItem: T, config?: C | undefined): this;
  checkStringsInArray<T extends IProduct, C extends IConfig>(incomingItems: T[], config?: C | undefined): this;

  handleError<T extends IErrorObj>(err: T): IErrorHandler;
  getResult(): IErrorObj;
}
export interface IProductManager {
  addOneProduct(incomingItem: IProduct): this;
  addManyProducts(incomingItems: IProduct[]): this;
  getAllProducts(): IProduct[];
}

export interface IErrorObj {
  duplicate: boolean;
  errorMessages: string[];
  index: number[];
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
