// import { TaskManager } from "./inheritance/TaskManager/level_0";

import { IProduct, ProductManager } from './ArrayMethods/addDeleteMethods';

const productManager = new ProductManager();
try {
  const product1: IProduct = { id: 2, name: 'Desktop', price: 1200 };
  console.log(productManager.addOneProduct(product1).getAllProducts());

  //   const product2: IProduct = { id: 2, name: 'Smartphone', price: 800 };
  //   ProductManager.addOneProduct(product2);

  //   ProductManager.addManyProducts([
  //     { id: 3, name: 'Tablet', price: 400 },
  //     { id: 4, name: 'Smartwatch', price: 200 },
  //   ]);

  //   ProductManager.updateProduct(2, { price: 750 });

  //   console.log('Current products:', ProductManager.getProducts());

  //   // Пробуем обновить несуществующий продукт
  //   ProductManager.updateProduct(10, { name: 'New Product' });
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
