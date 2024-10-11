/* eslint-disable no-undef */

/**
 * 1) Создать функцию doMath которая принимает первым параметром массив чисел произ длины, вторым callback - инструкцию
 * 2) Callback параметром принимает 1 число и чтото с ним делает
 * 3) doMath в теле функции создает новый массив перебирает его и применяет callback к каждому элементу массива и возвращает новый массив
 */

const numbers = [1, 2, 3, 4];
const numbers2 = [14, 2, -5, -6];

function doMath(arr, callback = () => {}) {
  let output = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    output.push(callback(arr[i]));
  }

  return output;
}

function inSquare(num) {
  return num ** 2;
}

const arrInSquare = doMath(numbers, inSquare);
const arrInSquare2 = doMath(numbers2, inSquare);

console.log(arrInSquare);
console.log(arrInSquare2);
