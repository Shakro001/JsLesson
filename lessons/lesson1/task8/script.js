"use strict";

let monthNum = Math.ceil(Math.random() * 12)

let daysNum = Math.ceil(Math.random() * 6)

const sum = monthNum + daysNum

let sumDiv = document.querySelector('.sum')


sumDiv.innerHTML = `
<table>
        <tr>
            <td>month num</td>
            <td>${monthNum}</td>
        </tr>

        <tr>
            <td>days num</td>
            <td>${daysNum}</td>
        </tr>
        <tr>
            <td>sum all</td>
            <td>${sum}</td>
        </tr>
</table>
`

