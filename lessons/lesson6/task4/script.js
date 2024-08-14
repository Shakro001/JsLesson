"use strict";

const schoolGrades = [2, 5, 3, 4, 4, 2, 4, 5, 5, 5];
let twoGrades = 0;
let mediumGrades = 0;
let goodGrades = 0;

  for (let i = 0; i < schoolGrades.length; i++) {
    switch (schoolGrades[i]) {
      case 2:
        twoGrades += 1;
        break;
      case 3:
        mediumGrades += 1;
        break;
      case 4:
      case 5:
        goodGrades += 1;
        break;
    }
  }


document.write(
    `
    двійок ${twoGrades} <br>
    хороших ${mediumGrades} <br>
    відмінних ${goodGrades}
    `
    );