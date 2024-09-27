"use strict";


"use strict";

// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, 
// кількість входжень деякого числа - ??? (статичні методи)

class MathOperation {
  static array = [-2, 3, 4, -1, 2, 3];
  static findPosotiveElement() {
    return MathOperation.array.reduce((acc, el) => (el >= 0 ? ++acc : acc), 0);
  }
  static findNegativeElement() {
    return MathOperation.array.reduce((acc, el) => (el <= 0 ? ++acc : acc), 0);
  }
}

console.log(
  MathOperation.findPosotiveElement()
);
console.log(
  MathOperation.findNegativeElement()
);