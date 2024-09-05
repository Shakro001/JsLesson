"use strict";

// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.*/
let randomArr = [
  12, 45, 78, 23, 56, 89, 34, 67, 90, 43, 22, 33, 44, 55, 32, 77, 88, 99, 10,
  20, 66, 40, 50, 55, 70, 80, 4, 92, 93, 94,
];
function mixingSort(arr){
    let leftIndex = 0, rightIndex = arr.length - 1;
    let comparisons = 0; // лічильник порівнянь
    let swaps = 0; // лічильник обмінів 
    while(leftIndex < rightIndex){
        for(let start = leftIndex; start<rightIndex; start++){
            comparisons++
            if(arr[start] > arr[start+1]){
                let acc = arr[start]
                arr[start] = arr[start+1]
                arr[start+1] = acc
                swaps++
            }
        }
        rightIndex--
        for(let end = rightIndex; end>leftIndex; end--){
            comparisons++
            if(arr[end] < arr[end-1]){
                let acc = arr[end]
                arr[end] = arr[end-1]
                arr[end-1] = acc
                swaps++
            }
            console.log(arr) // вивод етапу
        }
        leftIndex++
    }
    return [comparisons,swaps]
}
console.log(mixingSort(randomArr))