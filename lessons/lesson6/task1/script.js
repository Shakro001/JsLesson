"use strict";

let bagsWigthList = [];
let WightBags = 0;

const bagsNum = parseInt(prompt("скільки сумок?"));
let bagsWeight = 0;

function getBagsNum(bagsNum, bagsWeight) {
  for (let i = 0; i < bagsNum; i++) {
    bagsWeight = parseFloat(prompt(`вага сумки ${i + 1}: `));
    bagsWigthList.push(bagsWeight);
  }
}

function getWeightBags(bagsWigthList, WightBags) {
  for (let i = 0; i < bagsWigthList.length; i++) {
    if (bagsWigthList[i] >= 100) {
      WightBags += bagsWigthList[i];
    }
  }
  return WightBags;
}

getBagsNum(bagsNum, bagsWeight);
console.log(bagsWigthList);
document.write(getWeightBags(bagsWigthList, bagsWeight));
