"use strict";


function sumVal(){



  let sum = 0;

  sum += parseInt(document.querySelector('#auto').value)

  document.querySelectorAll('input[type="checkbox"]:checked').forEach(el =>{
    sum += parseInt(el.value)
  })

const selectedRadio = document.querySelector('input[type="radio"]:checked');
    if (selectedRadio) {
        sum += parseFloat(selectedRadio.value);
    }

    document.querySelector('.res').innerText = ` Sum: ${sum}`;


}

window.onload = function(){
    document.querySelector('.sum').onclick = sumVal
}