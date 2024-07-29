"use strict";

const month = parseInt(prompt('номер місяця: '))


if (month >= 1 || month <= 12) {
    if (month <= 2 || month === 12) document.write('зима')
    if (month <= 5) document.write('весна')
    if (month <= 8) document.write('літо')
    if (month <= 11) document.write('осінь')

} else {
    document.write('введено невірне число')
}