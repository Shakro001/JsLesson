"use strict";


function tempMinus(){
    const tempOne = parseInt(prompt('температура 1: '))
    const tempTwo = parseInt(prompt('температура 2: '))
    const tempThree = parseInt(prompt('температура 3: '))
    let temperatResult = 0;

    if(tempOne < 0){
        temperatResult += 1;
    }
    if(tempTwo < 0){
        temperatResult += 1;
    }
    if(tempThree < 0){
        temperatResult += 1;
    }
    return temperatResult

}
document.write( `від'ємний чисел: ${tempMinus()}`)

