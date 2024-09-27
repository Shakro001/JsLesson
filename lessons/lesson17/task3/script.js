"use strict";



function howYears(){
    const now = parseInt(new Date().getFullYear());
    document.querySelector('.res').innerText = now - document.querySelector(".years").value

}

window.onload = function () {
  document.querySelector(".years").oninput = howYears;
};