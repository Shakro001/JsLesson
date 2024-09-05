"use strict";

// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом

let randomArrName = ['Olga','Julia', 'Vitya', 'Petro','Jhon','ol']

function findNameSort(arr){
    
    let prevLastIndex = arr.length - 1;
    for(let i = 0; i<=prevLastIndex; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        
        if(i!==minIndex){
            let acc = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = acc
        }
    }
    return arr
}
console.log(findNameSort(randomArrName))
function findName(arr, searchEl, start, end) {
    if (start <= end) {
        const middle = Math.floor((start + end) / 2);
        if (arr[middle] === searchEl) return middle;
        if (arr[middle] < searchEl) return findName(arr, searchEl, middle + 1, end);
        if (arr[middle] > searchEl) return findName(arr, searchEl, start, middle - 1);
    } else {
        return -1;
    }
}

console.log(findName(randomArrName, 'Olga', 0, randomArrName.length - 1));