"use strict";

const checkResult = parseInt(
  prompt("хочете подивтитсь результат? 1 - так / 0 - ні")
);

if (checkResult === 1) {

const priceList = [100, 1000, 2345, 3458, 43, 656]

const priceTaxList = priceList.map((el) => Math.round(el * 0.2));

document.write(priceTaxList);


}


