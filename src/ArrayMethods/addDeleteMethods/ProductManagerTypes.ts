export interface IValidator {
  objectInArray<T extends IProduct>(obj: T, arr: T[]): IExistsObj | this;
  handleError<T extends IExistsObj>(err: T): IErrorHandler;
}
export interface IProductManager {
  addOneProduct(product: IProduct): this | IErrorHandler;
  getAllProducts(): IProduct[];
}

export interface IExistsObj {
  exists: boolean;
  errorMessage: string;
  index: number | null;
}

export interface IErrorHandler extends Error, IExistsObj {}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  [key: string]: string | number | boolean | [{ [key: string]: string | number | boolean }];
}
