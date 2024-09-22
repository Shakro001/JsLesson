"use strict";

// 1. Створити клас TBankomat, який моделює роботу банкомата.
// 2.  Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень.
// 3. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

class TBankomat {
  #bills
  constructor() {
    this.#bills = {
      5: 3,
      10: 1,
      20: 1,
      50: 1,
      100: 1,
      200: 1,
    };
  }

  maxSum() {
    let sum = 0;
    Object.entries(this.#bills).forEach(([key, value]) => {
      sum += key * value;
    });
    return sum;
  }

  minSum() {
    let moneyArray = [];

    Object.entries(this.#bills).forEach(([key, el]) => {
      if (key * el !== 0) moneyArray.push(key * el);
    });

    let minSum = Math.min(...moneyArray);
    return minSum;
  }

  cashingOut(sumCashingOut) {
    if (sumCashingOut > this.maxSum()) {
      return "Недостатньо коштів в банкоматі.";
    }

    let billsToDispense = {};

    for (let bill of [200, 100, 50, 20, 10, 5]) {
      if (sumCashingOut >= bill && this.#bills[bill] > 0) {
        let count = Math.min(
          Math.floor(sumCashingOut / bill),
          this.#bills[bill]
        );
        if (count > 0) {
          billsToDispense[bill] = count;
          sumCashingOut -= bill * count;
          this.#bills[bill] -= count;
        }
      }
    }

    return this.#bills;
  }
}

let obj = new TBankomat();
console.log(obj);
console.log(obj.cashingOut(235));
