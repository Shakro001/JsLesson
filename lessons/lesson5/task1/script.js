"use strict";



function sezonMonth(){
    const monthNum = parseInt(prompt('який місяць?'))

    if(monthNum <= 2 || monthNum === 12){
        document.write('зима')
    }else if(monthNum <= 5){
        document.write('весна')
    }else if(monthNum <= 8){
        document.write('літо')
    }else{
        document.write('осінь')
    }
}

sezonMonth()