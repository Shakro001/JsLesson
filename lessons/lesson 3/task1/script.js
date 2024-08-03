"use strict";

let evenNum = 0;
let noEvenNum = 0;
for (let i = 1; i <= 100; i++) {
    const randomNum = Math.round(Math.random() * 1000) + 1
    if (randomNum % 2 === 0) {
        evenNum++
    } else {
        noEvenNum++
    }
}
document.write(`
    Парних чисел: ${evenNum},
    Не парних: ${noEvenNum}
    . <br>`)
if(evenNum > noEvenNum){
    document.write('парних чисел більше!')
}else if(evenNum === noEvenNum){
    document.write('парних і не парних однаково!')
}else{
    document.write('не парних більше')
}

