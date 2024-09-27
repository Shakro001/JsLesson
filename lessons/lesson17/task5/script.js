"use strict";

function createInput() {
  let inputNum = document.querySelector(".priceNum").value;
  const tr = document.querySelector(".tr");

  for (let i = 0; i < inputNum; i++) {
    let td = document.createElement("td");
    let input = document.createElement("input");
    td.appendChild(input);
    tr.appendChild(td);
  }
}

function middleNum() {
  const inputs = document.querySelectorAll(".tr input");
  let count = 0;

  inputs.forEach((input) => {
    count += parseFloat(input.value)
  });

  let average = count / inputs.length;
  document.querySelector(".res").innerText = average
}

document.querySelector(".getTable").onclick = createInput;
document.querySelector(".middleEl").onclick = middleNum;
