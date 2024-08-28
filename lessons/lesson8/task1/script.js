"use strict";

let array = [];

for (let i = 0; i < 3; i++) {
  array.push(Math.floor(Math.random() * 10000) + 1);
}

// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

let array1 = array.filter((el) => el > 1000);
console.log(array1);

//  2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

let array2 = array.reduce((acc, item, index, arr) => {
  if (item > 1000) {
    acc.push(index);
  }
  return acc;
}, []);

// console.log(array2)

// 3)Сформувати список з тих цін, які більші за попереднє значення

let array3 = array.filter((el, index, arr) => el > array[index - 1]);
console.log(array3);

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

let maxNumArr = Math.max(...array);

let array4 = array.map((el, index, arr) => (el / maxNumArr) * 100);

console.log(`% - ${array4}`);

// 5)Підрахувати кількість змін цін

let array5 = array.reduce((accumulator, el, index, arr) => {
  if (el !== arr[index - 1]) accumulator.push(el);
  return accumulator;
}, []);

console.log(array5);

// 6)Визначити, чи є ціна, що менше 1000

let array6 = array.some((el) => el < 1000);
console.log(array6);

// 7)Визначати, чи усі ціни більше за 1000

let array7 = array.every((el) => el > 1000);
console.log(array7);

// 8)Підрахувати кількість цін, що більше за 1000

let array8 = array.reduce((accumulator, el, index, arr) => {
  if (el > 1000) accumulator += 1;
  return accumulator;
}, 0);
console.log(array8);

// 9)Підрахувати суму цін, що більше за 1000

let array9 = array.reduce((accumulator, el) => {
  if (el > 1000) return (accumulator += el);
  return 0;
}, 0);

console.log(array9);

// 10 )Знайти першу ціну, що більше за 1000

let array10 = array.find((el) => el > 1000);
console.log(array10);

//  11)Знайти індекс першої ціни, що більше за 1000
let array11 = array.findIndex((el) => el > 1000);
console.log(array11);

// 12)Знайти останню ціну, що більше за 1000
let array12 = array.findLast((el) => el > 1000);
console.log(array12);

// 13)Знайти індекс останньої ціни, що більше за 1000
let array13 = array.findLastIndex((el) => el > 1000);
console.log(array13);
