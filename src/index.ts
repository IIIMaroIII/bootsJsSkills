// import { TaskManager } from "./inheritance/TaskManager/level_0";

import validate from './Validator/Validator';

// import { IProduct, ProductManager } from './ArrayMethods/addDeleteMethods';
// const productManager = new ProductManager();
try {
  validate(2).even(23).getErrors();
  validate('2').maxLength(2).getErrors();
} catch (error) {}
