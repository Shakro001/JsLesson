"use strict";


// Задача 3. Розробити клас MultChecker для перевірки таблиці множення




class MultChecker {
  constructor(firstNum) {
    this.firstNum = firstNum;
    this.randomNum = null; 
    this.valid = 0;
    this.notValid = 0;
  }

  generationRandomNum() {
    this.randomNum = Math.floor(Math.random() * 9 + 1);
  }

  validResult() {
    let result;
    do {
      result = parseInt(prompt(`${this.firstNum} * ${this.randomNum} = ?:`));
      if (result === this.firstNum * this.randomNum) {
        this.valid = 1;
      } else {
        this.notValid += 1;
      }
    } while (result !== this.firstNum * this.randomNum);
  }

  render() {
    if (this.valid === 1) {
      console.log(`res: ${this.firstNum * this.randomNum}`);
    } else {
      console.log("відповідь не вірна");
    }
  }
}

let obj = new MultChecker(10);
console.log(obj);
obj.generationRandomNum();
obj.validResult();
obj.render();

