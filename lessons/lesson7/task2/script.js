"use strict";


const checkResult = parseInt(prompt('хочете подивтитсь результат? 1 - так / 0 - ні'))

if(checkResult === 1){

const getNum = parseInt(prompt('скільки елементів?'))


let array = new Array(getNum)
let arrayNum = array.length / 2
array.fill(1, 0, arrayNum).fill(7, arrayNum);

document.write(array)
}

