export interface IProduct {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export interface IProductManager {
  products: IProduct[];
  success: boolean;
  error: string;
  addOneProduct(product: IProduct): this;
  addManyProducts(arr: IProduct[]): this;
  updateProduct(id: number, data: Partial<IProduct>): this;
  getProducts(): IProduct[];
}
