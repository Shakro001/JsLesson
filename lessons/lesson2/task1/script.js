"use strict";

const kidOne = prompt('name kid one:')
const candiesForOne = parseInt(prompt('first candies '))


const kidTwo = prompt('name kid two:')
const candiesForTwo = parseInt(prompt('second candies: '))

if(candiesForOne>candiesForTwo){
    document.write(`<p>${kidOne}</p>`)
}else if(candiesForOne===candiesForTwo){
    document.write(`однакова`)
}else{
    document.write(`<p>${kidTwo}</p>`)
}