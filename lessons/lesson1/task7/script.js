"use strict";

const itemOne = parseInt(prompt('цiна товар 1:'))
const itemOneNum = parseInt(prompt('кiлькiсть:'))
const itemOneSum = itemOne * itemOneNum

const itemTwo = parseInt(prompt('цiна товар 2:'))
const itemTwoNum = parseInt(prompt('кiлькiсть:'))
const itemTwoSum = itemTwo * itemTwoNum

const itemThree = parseInt(prompt('цiна товар 3:'))
const itemThreeNum = parseInt(prompt('кiлькiсть:'))
const itemThreeSum = itemThree * itemThreeNum

const sumCheck = itemOneSum + itemTwoSum + itemThreeSum


const check = document.querySelector('.check')

check.innerHTML = `
    <table>
    <thead>
        <tr>
            <th>цiна</th>
            <th>кiлькiсть</th>
            <th>сума</th>
        </tr>
    </thead>
        <tr>
            <td>${itemOne}$</td>
            <td>${itemOneNum}</td>
            <td>${itemOneSum}$</td>
        </tr>

        <tr>
            <td>${itemTwo}$</td>
            <td>${itemTwoNum}</td>
            <td>${itemTwoSum}$</td>
        </tr>
        <tr>
            <td>${itemThree}$</td>
            <td>${itemThreeNum}</td>
            <td>${itemThreeSum}$</td>
        </tr>
        <tr>
            <td>сума чека:</td>
            <td>${sumCheck}$</td>
        </tr>

    </table>
    `