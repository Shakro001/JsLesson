"use strict";

const driveId = prompt('ваша котегорiя: ')

if(driveId === 'A'){
    document.write('ти можеш керувати Мотоциклом')
}else if(driveId === 'B'){
    document.write('ти можеш керувати Автомобілем')
}else if(driveId === 'C'){
    document.write('ти можеш керувати вантажним Автомобілем')
}else{
    document.write('не вірна категорія')
}

