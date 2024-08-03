"use strict";

const weekDays = parseInt(prompt('Введіть день від 1 до 7: '))

if (weekDays >= 1 || weekDays <= 7) {
    if (weekDays === 1) document.write('понеділок')
    if (weekDays === 2) document.write('вівторок')
    if (weekDays === 3) document.write('Середа')
    if (weekDays === 4) document.write('Четвер')
    if (weekDays === 5) document.write(`П'ятниця `)
    if (weekDays === 6) document.write('Субота')
    if (weekDays === 7) document.write('Неділя')
}else{
    document.write('невірне число')
}

