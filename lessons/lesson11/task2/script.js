"use strict";


// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
function yearsCalculator({ day, month, year }, n) {
  return Math.floor((month + n - 1) / 12) + year;
}

let dateObj = {
  day: 5,
  month: 12,
  year: 2001,
};

console.log(yearsCalculator(dateObj, 20));

