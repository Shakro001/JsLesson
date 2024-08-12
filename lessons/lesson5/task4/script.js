"use strict";


const numOne = parseInt(prompt("first num: "))
const numTwo = parseInt(prompt("second num: "))
const numThree = parseInt(prompt("Threed num: "))
const numFourth = parseInt(prompt("Fourth num: "))

function sum(){
    return numOne + numTwo + numThree + numFourth
}
document.write(`сума: ${sum()} <br>`)

function multiplication(){
    return numOne * numTwo * numThree * numFourth
}
document.write(`добуток: ${multiplication()} <br>`)

function average(){
    return ( numOne + numTwo + numThree + numFourth ) / 4
}
document.write(`cереднє: ${average()} <br>`)

function minNum(){
    return Math.min(numOne, numTwo, numThree, numFourth)
}
document.write(`мінімальне: ${minNum()} <br>`)

