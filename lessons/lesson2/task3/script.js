"use strict";

const randomNum = Math.round(Math.random() * 5) + 1
console.log(randomNum)
const TryNum = parseInt(prompt('вгадай число: '))


if (TryNum === randomNum) {
    document.write('ви вгадали!')
} else {
    TryNum = parseInt(prompt('спробуйте ще раз!'))
    if (TryNum === randomNum) {
        document.write('ви вгадали!')
    }else{
        document.write('не правильно!')
    }
}