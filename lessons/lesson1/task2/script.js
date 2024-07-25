"use strict";

const num1 = parseInt(prompt('first num:'))
const num2 = parseInt(prompt('second num:'))

const sum = num1 + num2
const mult = num1 * num2
const fraction = num1 / num2

const table = document.querySelector('.table')

table.innerHTML = `
    <table>
        <tr>
            <th>operation</th>
            <th>result</th>
        </tr>
    
        <tr>
            <th>сума:</th>
            <td>${sum}</td>
        </tr>

        <tr>
            <th>добуток:</th>
            <td>${mult}</td>
        </tr>
        <tr>
            <th>частка:</th>
            <td>${fraction}</td>
        </tr>

    </table>
    `

