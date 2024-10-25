export interface IProductManager {
  addOneProduct(incomingItem: IProduct): this;
  addManyProducts(incomingItems: IProduct[]): this;
  getAllProducts(): IProduct[];
}
export interface IProduct {
  id: number;
  name: string;
  price: number;
  [key: string]: string | number | boolean;
}
