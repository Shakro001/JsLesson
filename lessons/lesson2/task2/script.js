"use strict";

const priceItem = parseInt(prompt('цiна товару:'))
const balance = parseInt(prompt('баланс:'))

if(balance >= priceItem){
    document.write('дякую за покупку')
}else{
    document.write('бажаєте лотерею?')
}