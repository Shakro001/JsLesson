"use strict";

const checkResult = parseInt(prompt('хочете подивтитсь результат? 1 - так / 0 - ні'))

if(checkResult === 1){
const getNum = parseInt(prompt("скільки елементів?"));

let array = new Array(getNum);
array.fill(1, 0, 5).fill(7, 5);

document.write(array);

}

