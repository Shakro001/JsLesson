"use strict";
if(confirm('почати?') !== 0){

class ShootGame {
  constructor() {
    this.tir = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
  }

  randomMeshes() {
    for (let i = 0; i < this.tir.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.tir[i].length);
      this.tir[i][randomIndex] = 1;
    }
  }

  shooting() {
    let count = 4;
    do {
      const shootToX = parseInt(prompt("Куди стріляємо? x"));
      const shootToY = parseInt(prompt("Куди стріляємо? y"));
      if (this.tir[shootToX][shootToY] === 1) {
        alert("попав!!!");
        this.tir[shootToX][shootToY] = 0;
        count--;
      } else {
        alert("спробуй ще раз");
      }
    } while (count >= 1);
  }
}

let game = new ShootGame();
game.randomMeshes();
console.log(game)
game.shooting();


  
}
