"use strict";
let randomArr = [
  12, 45, 78, 23, 56, 89, 34, 67, 90, 43, 22, 33, 44, 55, 32, 77, 88, 99, 10,
  20, 66, 40, 50, 55, 70, 80, 4, 92, 93, 94,
];
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.

function inclusionSort(arr){
    let comparisons = 0; // лічильник порівнянь
    let swaps = 0; // лічильник обмінів 
    for(let i = 0; i<arr.length; i++){
            const currEl = arr[i]
    let prevIndex = i - 1
    comparisons++
    while(prevIndex >= 0 && arr[prevIndex] > currEl){
        arr[i+1] = currEl
        prevIndex = prevIndex - 1
        swaps++
    }
    console.log(arr) // вивод етапу
    arr[prevIndex+1] = currEl
    }

    return [comparisons, swaps]
}
console.log(inclusionSort(randomArr))
