import { IProductManager } from './ProductManagerTypes';

const ProductManager: IProductManager = {
  products: [],
  success: false,
  error: '',

  addOneProduct(product) {
    return this;
  },
  addManyProducts(arr) {
    console.log(arr);
    return this;
  },
  updateProduct(id, data) {
    console.log(id, data);
    return this;
  },
  getProducts() {
    return this.products;
  },
};

export default ProductManager;
