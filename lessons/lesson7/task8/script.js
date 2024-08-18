"use strict";

const checkResult = parseInt(
  prompt("хочете подивтитсь результат? 1 - так / 0 - ні")
);

if (checkResult === 1) {
  const carsNumber = ["aH4324MX", "XA5467BR", "AX2435PK"];
  let carsNumberLetterA = [];
  carsNumber.forEach((el, index, mass) => {
    if (el.toUpperCase()[0] === "A") {
      carsNumberLetterA.push(mass[index].toUpperCase());
    }
  });

  document.write(carsNumberLetterA);
}
