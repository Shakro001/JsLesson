"use strict";

let randomArr = [12, 45, 78, 23, 56, 89, 34, 67, 90, 43, 22, 33, 44, 55, 32, 77, 88, 99, 10, 20, 66, 40, 50, 55, 70, 80, 4, 92, 93, 94];

// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

function bubleSort(arr){
    let comparisons = 0; // лічильник порівнянь
    let swaps = 0; // лічильник обмінів 
    for(let i = 0; i<arr.length - 1; i++){
        for(let j = 0; j<arr.length - 1; j++){
            comparisons++
            if(arr[j] > arr[j+1]){
                let acc = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = acc
                 swaps++
            }
            
        }
        console.log(arr) // вивод етапу
    }    
    return [comparisons, swaps]
}
console.log(bubleSort(randomArr))