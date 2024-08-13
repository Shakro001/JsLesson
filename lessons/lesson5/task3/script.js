"use strict";


function validWordDay(){
    const dayNum = parseInt(prompt('day num?: '))
    if(dayNum >= 1 && dayNum <= 5){
        document.write('its work day')
    }else{
        document.write('dont work day :(')
    }
}

validWordDay()