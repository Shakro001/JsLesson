"use strict";

let names;
let nameList = [];
let ivanName = 0;

function getNameToList(names, nameList) {
  for (let i = 0; i < 5; i++) {
    names = prompt(`iм'я учня ${i + 1}: `);
    nameList.push(names.toLowerCase());
  }
}
getNameToList(names, nameList);
console.log(nameList);

function searchNameIvan(nameList, ivanName) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === "ivan") {
      ++ivanName;
    }
  }
  return ivanName;
}

document.write(`name ivan : ${searchNameIvan(nameList, ivanName)}ivan`);
