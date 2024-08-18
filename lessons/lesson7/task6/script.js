"use strict";


const checkResult = parseInt(prompt('хочете подивтитсь результат? 1 - так / 0 - ні'))

if(checkResult === 1){

let list = [14, 12, 45, 59, 0, 4, 34]

list.forEach((el, index, mass) =>{

    if(el > mass[0]){
        mass[index] = el *2;
    }

})

document.write(list)


}

