"use strict";
let randomArrName = ["Olga", "Julia", "Vitya", "Petro", "Jhon", "ol"];

// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.




function findNameSort(arr) {
    let prevLastIndex = arr.length - 1;
    for (let i = 0; i <= prevLastIndex; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].length < arr[minIndex].length) {
                minIndex = j;
            }
        }
        
        if (i !== minIndex) {
            let acc = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = acc;
        }
    }
    return arr;
}

console.log(findNameSort(randomArrName));


function findName(arr, start, end) {
    if (start <= end) {
        const middle = Math.floor((start + end) / 2);
        if (arr[middle].length === 5) return middle;
        if (arr[middle].length < 5) return findName(arr, middle + 1, end);
        if (arr[middle].length > 5) return findName(arr, start, middle - 1);
    } else {
        return -1;
    }
}

console.log(findName(randomArrName, 0, randomArrName.length - 1));