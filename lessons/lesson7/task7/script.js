"use strict";

const checkResult = parseInt(prompt('хочете подивтитсь результат? 1 - так / 0 - ні'))

if(checkResult === 1){


let list = [500, 100, 1110, 564, 5000, 2300]


list.forEach((el, index, mass) =>{
    if(el > 1000){
        mass[index] = el - el * 0.3
    }
})

document.write(list)


}

