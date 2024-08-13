"use strict";


function tempNum(){
    const tempOne = parseInt(prompt('температура 1: '))
    const tempTwo = parseInt(prompt('температура 2: '))
    const tempThree = parseInt(prompt('температура 3: '))

    return ( tempOne + tempTwo + tempThree) / 3
}

document.write(`середнє число ${tempNum()}`)



    