"use strict"

// задача вивести рандомне число стільки раз, скільки віли в prompt
let numPrint = parseInt(prompt('скільки вивести?'))
let result = ``;
result += `<ul>`
while(numPrint>=0){
    const randomNum = Math.round(Math.random()*100)+1
    result += `<li>${randomNum}</li>`
    numPrint -= 1
}
result += `</ul>`

document.write(`${result}`)

// for(let i = 0; i<=numPrint; i++){
//     const randomNum = Math.round(Math.random()*100)+1
//     document.write(`<li>${randomNum}</li>`)
// }