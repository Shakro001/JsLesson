"use strict";


const createCellsY = parseInt(prompt('клітинок Y:'))
const quantityShipsNum = parseInt(prompt("коріблів:"));
let battlefieldShipsGame = []
let hitsShip = 0;

function shipsGame(createCellsY, quantityShipsNum, battlefieldShipsGame, hitsShip){
    let shootShipsNum = 0;
    for (let i = 0; i < createCellsY; i++) {
      battlefieldShipsGame.push(0);
    }
    let placedShips = 0;
    while (placedShips < quantityShipsNum) {
      let randomIndex = Math.floor(Math.random() * createCellsY);

      if (battlefieldShipsGame[randomIndex] === 0) {
        battlefieldShipsGame[randomIndex] = 1;
        placedShips += 1;
      }
    }
    while(hitsShip < quantityShipsNum){
        shootShipsNum = parseInt(prompt("клітинка куди стріляємо?:"));
        if(battlefieldShipsGame[shootShipsNum] === 1){
            alert("є пробиття! -1");
            battlefieldShipsGame[shootShipsNum] = 0;
            hitsShip += 1;
            if(hitsShip === quantityShipsNum){
                alert('всіх потопив. перемога!')
                break
            }
        }else{
            alert("промах спробуй ще раз!!")
        }
        
    }

}

shipsGame(createCellsY, quantityShipsNum, battlefieldShipsGame, hitsShip)

