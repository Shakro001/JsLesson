"use strict";

let sum = 0;
let count = 0;

while(sum < 100){
    let num = parseInt(prompt('скільки хочете покласти?'))
    sum += num
    count++
}


document.write(count)
