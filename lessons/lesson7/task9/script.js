"use strict";

const checkResult = parseInt(
  prompt("хочете подивтитсь результат? 1 - так / 0 - ні")
);

if (checkResult === 1) {
  const listName = ["Jack", "John", "Julia", "Ilon", "Mark"];
  const firstLetterName = listName.map((el) => el[0]);
  document.write(firstLetterName)
}
