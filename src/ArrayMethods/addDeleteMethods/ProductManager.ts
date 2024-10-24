import { IConfig, IErrorHandler, IErrorObj, IProduct, IProductManager, IValidator } from './ProductManagerTypes';

class ProductManager implements IProductManager {
  private currentItems: IProduct[];
  private validator: IValidator;

  constructor() {
    this.validator = new Validator();
    this.currentItems = [
      { id: 4, name: 'Laptop', price: 1000, desc: 'Macos', ddd: 10 },
      { id: 5, name: 'Desktop', price: 1200, desc: 'Linux', ddd: '110' },
      { id: 6, name: 'Tablet', price: 1300, desc: 'iPad', ddd: 123123 },
    ];
  }
  addOneProduct(incomingItem: IProduct): this {
    this.validator
      .checkOneInArrayById(incomingItem, this.currentItems)
      .checkStringsInObject(incomingItem)
      .checkNumbersInObject(incomingItem, { isEqualZero: false, isLessZero: false });
    const validationResult = this.validator.getResult();
    if (validationResult.errorMessages.length === 0) {
      this.currentItems.push(incomingItem);
      return this;
    }
    throw this.validator.handleError(validationResult);
  }
  addManyProducts(incomingItems: IProduct[]): this {
    const res = this.validator
      .checkManyInArrayById(incomingItems, this.currentItems)
      .checkStringsInArray(incomingItems)
      .getResult();
    console.log('res', res);
    return this;
  }
  getAllProducts(): IProduct[] {
    return this.currentItems;
  }
}

class Validator implements IValidator {
  private result: IErrorObj;

  constructor() {
    this.result = { duplicate: false, errorMessages: [], index: [] };
  }
  checkOneInArrayById<T extends IProduct>(incomingItem: T, currentItems: T[]): this {
    const { id, name } = incomingItem;
    const index = currentItems.findIndex((prd) => id === prd.id);
    if (index !== -1) {
      this.result.duplicate = true;
      this.result.errorMessages.push(`Product ${name} with id ${id} is already exists!`);
      this.result.index.push(index);
      return this;
    }
    return this;
  }
  checkManyInArrayById<T extends IProduct>(incomingItems: T[], currentItems: T[]): this {
    incomingItems.filter((item, itemIndx) => {
      currentItems.forEach((curItem) => {
        if (item.id === curItem.id) {
          this.result.duplicate = true;
          this.result.errorMessages.push(`Product ${item.name} with id ${item.id} is already exists in!`);
          this.result.index.push(itemIndx);
        }
      });
    });
    return this;
  }

  checkStringsInObject<T extends IProduct>(incomingItem: T): this {
    for (const [key, value] of Object.entries(incomingItem)) {
      if (typeof value === 'string' && !value.trim()) {
        const msg = `The '${key}' must not be empty`;
        this.result.errorMessages.push(msg);
      }
    }
    return this;
  }

  checkNumbersInObject<T extends IProduct, C extends IConfig>(incomingItem: T, config?: C | undefined): this {
    for (const [key, value] of Object.entries(incomingItem)) {
      if (typeof value === 'number') {
        if (!config?.isEqualZero && value === 0) {
          this.result.errorMessages.push(`The '${key}' is set to '${value}' and must not be equal to zero!`);
        }
        if (!config?.isLessZero && value < 0) {
          this.result.errorMessages.push(`The '${key}' is set to '${value}' and must be higher than zero!`);
        }
        return this;
      }
      this.result.errorMessages.push(`The type in ${key} must be a number!`);
    }
    return this;
  }

  checkStringsInArray<T extends IProduct, C extends IConfig>(incomingItems: T[], config?: C | undefined): this {
    incomingItems.forEach((item, indx) => {
      if (typeof item !== 'object' && item === null) {
        this.result.errorMessages.push(`The type of incoming item must be an object!`);
        return this;
      }
      this.checkStringsInObject(item);
      console.log('item[indx]', incomingItems[indx]);
      return this;
    });
    return this;
  }

  handleError<T extends IErrorObj>(err: T): IErrorHandler {
    const customError = new Error() as IErrorHandler;
    const { duplicate, errorMessages, index } = err;
    customError.errorMessages = errorMessages;
    customError.index = index;
    customError.duplicate = duplicate;

    return customError;
  }
  getResult(): IErrorObj {
    return this.result;
  }
}

export default ProductManager;
