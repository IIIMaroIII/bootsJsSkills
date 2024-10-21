import { IConfig, IErrorHandler, IErrorObj, IProduct, IProductManager, IValidator } from './ProductManagerTypes';

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
    this.validator
      .checkObjectInArrayById(product, this.products)
      .checkStringsInObject(product)
      .checkNumbersInObject(product, { isEqualZero: false, isLessZero: false });
    const validationResult = this.validator.getResult();
    if (validationResult.errorMessages.length === 0) {
      this.products.push(product);
      return this;
    }
    throw this.validator.handleError(validationResult);
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }
}

class Validator implements IValidator {
  private result: IErrorObj;

  constructor() {
    this.result = { duplicate: false, errorMessages: [], index: 0 };
  }
  checkObjectInArrayById<T extends IProduct>(obj: T, arr: T[]): this {
    const { id, name } = obj;
    const index = arr.findIndex((prd) => id === prd.id);
    if (index !== -1) {
      this.result.duplicate = true;
      this.result.errorMessages.push(`Product ${name} with id ${id} is already exists!`);
      this.result.index = index;
      return this;
    }
    return this;
  }

  checkStringsInObject<T extends IProduct>(obj: T): this {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && !value.trim()) {
        const msg = `The '${key}' must not be empty`;
        this.result.errorMessages.push(msg);
      }
    }
    return this;
  }

  checkNumbersInObject<T extends IProduct, C extends IConfig>(obj: T, config?: C | undefined): this {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'number') {
        if (!config?.isEqualZero && value === 0) {
          const msg = `The '${key}' is set to '${value}' and must not be equal to zero!`;
          this.result.errorMessages.push(msg);
        }
        if (!config?.isLessZero && value < 0) {
          const msg = `The '${key}' is set to '${value}' and must be higher than zero!`;
          this.result.errorMessages.push(msg);
        }
      }
    }
    return this;
  }

  handleError<T extends IErrorObj>(err: T): IErrorHandler {
    const customError = new Error() as IErrorHandler;
    const { duplicate: exists, errorMessages, index } = err;
    customError.errorMessages = errorMessages;
    customError.index = index;
    customError.duplicate = exists;

    return customError;
  }
  getResult(): IErrorObj {
    return this.result;
  }
}

export default ProductManager;
