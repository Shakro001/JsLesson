"use strict";


const price = parseInt(prompt('цiна: '))
const quantity = parseInt(prompt('кол-во: '))

const sum = price * quantity
const procent = Math.round(( sum ) * 0.05)
const finalSum = sum + procent

const save = document.querySelector('.price')

save.innerHTML = `
<ul> 
<li>Сума: ${sum}$</li>
<li>ПДВ: ${procent}$</li>
<li>Цiна: ${finalSum}$</li>
</ul>
`