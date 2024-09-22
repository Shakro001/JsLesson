"use strict";

// 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”.
// 2. Реалізувати методи збільшення/зменшення дати на певну кількість днів

class TDate {
  constructor(days, month, years) {
    (this.days = days), (this.month = month), (this.years = years);
  }

  magnificationDays(numAdd) {
    this.days += numAdd;

    while (this.days >= 30) {
      this.days -= 30;
      this.month += 1;

      if (this.month >= 12) {
        this.month -= 12;
        this.years += 1;
      }
    }
  }

  reductionDays(numAdd) {
    this.days -= numAdd;

    while (this.days <= 0) {
      this.days += 30;
      this.month -= 1;

      if (this.month <= 0) {
        this.month += 12;
        this.years -= 1;
      }
    }
  }

  toString() {
    return `${this.days}.${this.month}.${this.years}`;
  }
}

let date = new TDate(10, 5, 2010);
date.reductionDays(11);
date.magnificationDays(10);
console.log(date.toString());
