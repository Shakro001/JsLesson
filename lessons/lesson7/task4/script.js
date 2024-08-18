"use strict";

const checkResult = parseInt(prompt('хочете подивтитсь результат? 1 - так / 0 - ні'))

if(checkResult === 1){

const list = [1, 500, 2, 300, 143, 234, 23, 6]

for ( const el of list ){
    if(el > 100){
        document.write(`${el} <br>`)
    }
}



}