"use strict";


function cmToInhes(){
    const cm = parseInt(prompt('cm num: '))
    const inhes = cm / 2.54
    return document.write(`см в дюйми: ${Math.round(inhes)} <br>`)
}
cmToInhes()


function kgToFunt(){
    const kg = parseInt(prompt('kg num: '))
    const funt = kg * 2.2046
    return document.write(`кг в фунти: ${Math.round(funt)} <br> `)
}
kgToFunt()

function kmToMil(){
    const km = parseInt(prompt('km num: '))
    const mil = km  * 0.62137
    return document.write(`км в мілі: ${Math.round(mil)}`)
}
kmToMil()
