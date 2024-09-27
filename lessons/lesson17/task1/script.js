

"use strict";



function add() {
  let firstNum = parseFloat(document.querySelector(".firstNum").value);
  let secondNum = parseFloat(document.querySelector(".secondNum").value);
  document.querySelector(".result").innerText = firstNum + secondNum;
}

function subtract() {
  let firstNum = parseFloat(document.querySelector(".firstNum").value);
  let secondNum = parseFloat(document.querySelector(".secondNum").value);
  document.querySelector(".result").innerText = firstNum - secondNum;
}

function dividing() {
  let firstNum = parseFloat(document.querySelector(".firstNum").value);
  let secondNum = parseFloat(document.querySelector(".secondNum").value);
  document.querySelector(".result").innerText = firstNum / secondNum;
}

function multiplication() {
  let firstNum = parseFloat(document.querySelector(".firstNum").value);
  let secondNum = parseFloat(document.querySelector(".secondNum").value);
  document.querySelector(".result").innerText = firstNum * secondNum;
}

window.onload = function () {
  document.querySelector(".plus").onclick = add;
  document.querySelector(".minus").onclick = subtract;
  document.querySelector(".dividing").onclick = dividing;
  document.querySelector(".multiplication").onclick = multiplication;
};