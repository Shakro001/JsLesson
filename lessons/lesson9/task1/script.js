"use strict";

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12, 1],
  [13, 14, 15, 16, 4],
  [17, 18, 19, 20],
];

// номери рядків від 0 до половини, стовпці від 0 до половини
function task1(arr) {
  let sum = 0;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    for (let j = 0; j < Math.floor(arr[i].length / 2); j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
console.log(task1(arr));

// номери рядків від 0 до половини, стовпці від половини до кінця
function task2(arr) {
  let sum = 0;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    for (let j = Math.floor(arr[i].length / 2); j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
console.log(task2(arr));

// номери рядків від половини до кінця, стовпці від 0 до половини
function task3(arr) {
  let sum = 0;
  for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
    for (let j = 0; j < Math.floor(arr[i].length / 2); j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
console.log(task3(arr));

// номери рядків від половини до кінця, стовпці від половини до кінця
function task4(arr) {
  let sum = 0;
  for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
    for (let j = Math.floor(arr[i].length / 2); j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
console.log(task4(arr));

// Суму парних рядків
function task5(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}
console.log(task5(arr));

// Суму непарних стовпців
function task6(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 !== 0) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}
console.log(task6(arr));

// У парних рядках – непарні стовпці, у непарних – парні.
function task7(arr) {
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i % 2 === 0) {
        if (j % 2 !== 0) sum += arr[i][j]; 
      } else {
        if (j % 2 === 0) sum2 += arr[i][j]; 
      }
    }
  }
  return [sum, sum2];
}
console.log(task7(arr));
