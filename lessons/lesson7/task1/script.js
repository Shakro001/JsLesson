"use strict";

const checkResult = parseInt(prompt('хочете подивтитсь результат? 1 - так / 0 - ні'))

if(checkResult === 1){


const quantityNum = parseInt(prompt('скільки добавити в список?'))

function getQuantity(lenghtList){
return new Array(lenghtList).fill(0);
}


document.write(getQuantity(quantityNum))

















}

