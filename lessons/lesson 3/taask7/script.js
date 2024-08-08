"use strict"


const randomUserNum = parseInt(prompt('загадайте число (від 1 до 3): '))


for(let i = 2; i >= 0; i--){
    const tryNum = Math.floor(Math.random()*3)+1
    const result = confirm(`це число ${tryNum}`)
    if(result){
        document.write(`ура я вгадав! ваше число ${randomUserNum}`)
        break
    }else{
        alert(`нажаль я не вгадав. у мене залишилось ${i} спроб`)
    }
}
