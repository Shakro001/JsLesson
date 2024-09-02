"use strict";
let arrMarket = [
  [435, 345, 12, 76, 34, 65, 3], // магазин 1
  [412, 78, 98, 34, 6, 3, 4], // магаntзин 2
  [87, 34, 6, 1, 8, 2, 4], // магазин 3
  [8, 1, 23, 6, 8, 0, 4], // магазин 4
  [6, 2, 8, 1, 3, 4, 5], // магазин 5
  [76, 234, 76, 234, 98, 34, 1], //магазин 6
  [7, 2003, 4, 5, 1, 5, 200], //магазин 7
];
// 1) загальний прибуток кожного масиву за тиждень;

let profitOfEachArray = [];

function totalProfitOfEachArray(arrMarket, profitOfEachArray) {
  let sum = 0;
  for (let i = 0; i < arrMarket.length; i++) {
    for (let j = 0; j < arrMarket[i].length; j++) sum += arrMarket[i][j];
    profitOfEachArray.push(sum);
  }
  return profitOfEachArray;
}
console.log(totalProfitOfEachArray(arrMarket, profitOfEachArray));

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
let profitDaysOnTheWeek = [];
function totalProfitDaysOnTheWeek(arrMarket, profitDaysOnTheWeek) {
  for (let i = 0; i < arrMarket.length; i++) {
    let sum = 0;
    for (let j = 0; j < arrMarket[i].length; j++) {
      sum += arrMarket[j][i];
    }
    profitDaysOnTheWeek.push(sum);
  }

  return profitDaysOnTheWeek;
}
console.log(totalProfitDaysOnTheWeek(arrMarket, profitDaysOnTheWeek));

// 3) загальний прибуток за робочі дні
let profitWorkingDays = [];
function profitForWorkingDays(arrMarket, profitWorkingDays) {
  let sum = 0;
  for (let i = 0; i < arrMarket.length; i++) {
    for (let j = 0; j < arrMarket[i].length - 2; j++) {
      sum += arrMarket[i][j];
    }
    profitWorkingDays.push(sum);
  }
  return profitWorkingDays;
}
console.log(profitForWorkingDays(arrMarket, profitWorkingDays));

// 4) загальний прибуток за вихідні дні

let profitNotWorkingDays = [];
function profitForNotWorkingDays(arrMarket, profitNotWorkingDays) {
  for (let i = 0; i < arrMarket.length; i++) {
    profitNotWorkingDays.push(arrMarket[i][5] + arrMarket[i][6]);
  }

  return profitNotWorkingDays;
}
console.log(profitForNotWorkingDays(arrMarket, profitNotWorkingDays));

// 5) максимальний прибуток за середу
let maxProfitWednesday = 0;
function profitForWednesday(arrMarket, maxProfitWednesday) {
  for (let i = 0; i < arrMarket.length; i++) {
    if (arrMarket[i][2] !== undefined) {
      if (arrMarket[i][2] > maxProfitWednesday) {
        maxProfitWednesday = arrMarket[i][2];
      }
    }
  }
  return maxProfitWednesday;
}
console.log(profitForWednesday(arrMarket, maxProfitWednesday));

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
let twoHundredArr = [];
function addTwoHundredArr(arrMarket, twoHundredArr) {
  for (let i = 0; i < arrMarket.length; i++) {
    for (let j = 0; j < arrMarket[i].length; j++) {
      if (arrMarket[i][j] >= 200) twoHundredArr.push(arrMarket[i][j]);
    }
  }
  return twoHundredArr;
}
console.log(addTwoHundredArr(arrMarket, twoHundredArr));

// 7) відсортувати кожен тиждень за зростанням
function sortAllDays(arrMarket) {
  for (let i = 0; i < arrMarket.length; i++) {
    arrMarket[i].sort((a, b) => a - b);
  }
  return arrMarket;
}
console.log(sortAllDays(arrMarket));

// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
console.log("-----------------------------");
function sortWeeks(arrMarket) {
  return arrMarket.sort((a, b) => Math.max(...b) - Math.max(...a));
}
console.log(sortWeeks(arrMarket));

