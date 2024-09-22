"use strict";

// 1. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. 
// 2. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, 
// 3. Курс долара зберігати в окремому полі. 


// при якому сума у гривнях збільшиться на 100. - ???
class TMoney {
  #money
  constructor(money, course) {
    this.#money = money;
    this.course = course
  }

  set AdditionMoney(uah) {
    if(uah < 0) throw new Error("помилка");
    this.#money += uah / this.course;
    
  }

  set MoneyMinus(uah){
    if (uah / this.course > this.#money) {
      throw new Error('помилка')
    }
      this.#money -= uah / this.course;
     
  }

  toString() {
    return ` dollars: ${this.#money.toFixed(2)}$ `;
  }
}

let moneyObj = new TMoney(20,40);
moneyObj.AdditionMoney = -1;
console.log(moneyObj.toString());