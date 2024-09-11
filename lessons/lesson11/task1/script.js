"use strict";

let obj = [
  {
    nameOfCompany: "Company A",
    ownerOfCompany: "Ivan Ivanov",
    sponsors: [
      {
        lastName: "Petrov",
        firstName: "Alexander",
        investmentAmount: 100000,
      },
      {
        lastName: "Sidorov",
        firstName: "Nikolai",
        investmentAmount: 50000,
      },
    ],
    releaseYear: 2005,
    websiteCost: 20000,
  },
  {
    nameOfCompany: "Company B",
    ownerOfCompany: "Maria Petrova",
    sponsors: [
      {
        lastName: "Kovalenko",
        firstName: "Andrey",
        investmentAmount: 75000,
      },
      {
        lastName: "Lysenko",
        firstName: "Olena",
        investmentAmount: 60000,
      },
    ],
    releaseYear: 2005,
    websiteCost: 1500,
  },
  {
    nameOfCompany: "Company C",
    ownerOfCompany: "Oleg Sidorov",
    sponsors: [
      {
        lastName: "Gritsenko",
        firstName: "Irina",
        investmentAmount: 90000,
      },
      {
        lastName: "Melnik",
        firstName: "Victor",
        investmentAmount: 80000,
      },
    ],
    releaseYear: 2022,
    websiteCost: 18000,
  },
];

// 1) загальну вартість усіх сайтів
function allSumWebSite(obj) {
  let priceAllWebSite = obj.reduce((acc, el) => (acc += el.websiteCost), 0);
  console.log(priceAllWebSite);
  return priceAllWebSite;
}
allSumWebSite(obj);

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
function webSiteYearFilter(obj){
let countYears = obj.reduce(
  (acc, el) =>
    el.releaseYear <= 2009 && el.releaseYear >= 2005 ? acc + 1 : acc + 0,
  0
);
return countYears;
}
webSiteYearFilter(obj);



// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
function sponsorFilterSum(obj){
let sumInvest = [];

for (let i = 0; i < obj.length; i++) {
  let totalInvestment = 0;
  for (let j = 0; j < obj[i].sponsors.length; j++) {
    totalInvestment += obj[i].sponsors[j].investmentAmount;
  }
  sumInvest.push(totalInvestment);
}

return Math.max(...sumInvest);
}
 sponsorFilterSum(obj);


// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

function listAllNameSponsors(obj){
let nameSponsors = [];
for (let i = 0; i < obj.length; i++) {
  for (let j = 0; j < obj[i].sponsors.length; j++) {
    nameSponsors.push(
      `${obj[i].sponsors[j].firstName} ${obj[i].sponsors[j].lastName}`
    );
  }
}
return nameSponsors;
}



// 5) знайти рік, коли прибуток був найбільшим
function greatestProfit(obj){
let websiteCost = [];

for (let i = 0; i < obj.length; i++) {
  websiteCost.push(obj[i].websiteCost);
}
return Math.max(...websiteCost);
}
greatestProfit(obj);

// 6) упорядкувати список за спаданням прибутку

function sortProfit(obj){
let websiteCostSort = [];
for (let i = 0; i < obj.length; i++) {
  websiteCostSort.push(obj[i].websiteCost);
}
return websiteCostSort.sort((a, b) => a - b);

}
sortProfit(obj);

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

function sortPriceSite(obj){
    let websiteCost1000 = [];
    let websiteCost1 = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].websiteCost >= 10000) websiteCost1000.push(obj[i].websiteCost);
      else websiteCost1.push(obj[i].websiteCost);
    }
    return [
websiteCost1000,
websiteCost1
    ]
}

