import { IErrorHandler, IExistsObj, IProduct, IProductManager, IValidator } from './ProductManagerTypes';

class ProductManager implements IProductManager {
  private products: IProduct[];
  private validator: IValidator;

  constructor() {
    this.validator = new Validator();
    this.products = [
      { id: 1, name: 'Laptop', price: 1200 },
      { id: 2, name: 'Desktop', price: 1300 },
      { id: 3, name: 'Tablet', price: 1500 },
    ];
  }
  addOneProduct(product: IProduct): this {
    const isValid = this.validator.objectInArray(product, this.products) as IExistsObj;
    if (!isValid.exists) {
      this.products.push(product);
      return this;
    }
    throw this.validator.handleError(isValid);
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }
}

class Validator implements IValidator {
  private result: IExistsObj;

  constructor() {
    this.result = { exists: false, errorMessage: '', index: 0 };
  }
  objectInArray<T extends IProduct>(obj: T, arr: T[]): IExistsObj | this {
    const { id, name } = obj;
    const index = arr.findIndex((prd) => id === prd.id);

    if (index !== -1) {
      this.result.exists = true;
      this.result.errorMessage = `Product ${name} with id ${id} is already exists!`;
      this.result.index = index;
      return this.result;
    }
    return this;
  }
  handleError<T extends IExistsObj>(err: T): IErrorHandler {
    const customError = new Error() as IErrorHandler;
    const { exists, errorMessage, index } = err;
    customError.message = errorMessage;
    customError.index = index;
    customError.exists = exists;

    return customError;
  }
}

export default ProductManager;
