"use strict";

let arrGame = [
  [0, 0, 0, 0, 0, 0], // 0 (1)
  [0, 0, 0, 0, 0, 0], // 1
  [0, 0, 0, 0, 0, 0], // 2
  [0, 0, 0, 0, 0, 0], // 3
  [0, 0, 0, 0, 0, 0], // 4
  [0, 0, 0, 0, 0, 0], // 5 (6)
];

function generatorRandom(arrGame) {
  for (let i = 0; i < 3; i++) {
    let randomX = Math.floor(Math.random() * 6); 
    let randomY = Math.floor(Math.random() * 6); 
    arrGame[randomX][randomY] = 1;
  }
  return arrGame;
}

function game(arrGame) {
  let counter = 4;
  while (counter > 0) {
    let tryOneX = parseInt(prompt("Куди стріляємо по X?: "));
    let tryOneY = parseInt(prompt("Куди стріляємо по Y?: "));
    if (arrGame[tryOneX][tryOneY] === 1) {
      alert("ПОПАВ!!");
      arrGame[tryOneX][tryOneY] = 0;
      counter--;
    } else {
      alert("Не попав. Спробуй ще раз");
    }
  }
  return arrGame;
}

if(confirm('почати гру?')){
console.log(generatorRandom(arrGame));
console.log(game(arrGame));
}


