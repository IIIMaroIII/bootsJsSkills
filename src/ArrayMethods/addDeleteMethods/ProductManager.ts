import Validator from '../../Validator/Validator';
import { IValidator } from '../../Validator/ValidatorTypes';
import { IProduct, IProductManager } from './ProductManagerTypes';

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
    return this;
  }
  addManyProducts(incomingItems: IProduct[]): this {
    return this;
  }
  getAllProducts(): IProduct[] {
    return this.currentItems;
  }
}

export default ProductManager;
