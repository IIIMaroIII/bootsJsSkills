import { IProduct, ProductManager } from './ArrayMethods/addDeleteMethods';
// import { TaskManager } from "./inheritance/TaskManager/level_0";

try {
  const product1: IProduct = { id: 1, name: 'Laptop', price: 1200 };
  console.log('product1', product1);
  console.log(ProductManager.addOneProduct(product1).getProducts());

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
  console.error('Error:', error);
}
