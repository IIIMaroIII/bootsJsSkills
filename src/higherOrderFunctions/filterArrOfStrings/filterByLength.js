/* eslint-disable no-undef */
/**
 *Цель: Написать функцию, которая принимает массив строк и другую функцию.
  Эта функция должна проверять, подходит ли строка под заданное условие (например, длина строки).
  Основная функция должна возвращать новый массив, состоящий только из тех строк, которые соответствуют критериям.

Шаги:

Создайте функцию filterStrings, которая принимает два параметра:
 - Массив строк.
 - Функцию обратного вызова, которая принимает строку и возвращает true или false.
Внутри функции создайте новый массив для хранения строк, которые соответствуют критериям.
Переберите массив строк с помощью цикла.
Для каждой строки вызовите функцию обратного вызова:
Если функция возвращает true, добавьте строку в новый массив.
Верните новый массив в качестве результата функции.

const words = ["apple", "banana", "kiwi", "grapefruit"];
const minLength = 5;
const longWords = filterByLength(words, minLength); // Вывод: ["banana", "grapefruit"]
*/

const words = ['apple', 'banana', 'kiwi', 'grapefruit'];
const minLength = 3;

const filterByLength = (strArr, length) => {
  let output = [];

  for (let i = 0; i <= strArr.length - 1; i++) {
    if (strArr[i].length > length) {
      output.push(strArr[i]);
    }
  }

  return output;
};

const longWords = filterByLength(words, minLength); // Вывод: ["banana", "grapefruit"]

console.log('longWords', longWords);
