"use strict";


const checkResult = parseInt(prompt('хочете подивтитсь результат? 1 - так / 0 - ні'))

if(checkResult === 1){


let list = [100, -234, -234, 65, -1, 2, 2]
let sumList = 1;

for(const el of list){
    if(el>0){
        sumList *= el
    }
}
document.write(sumList)





}

