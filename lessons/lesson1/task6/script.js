"use strict";


const second = parseInt(prompt('second: '))

const minutes = second / 60
const hour = second / 600

const result = document.querySelector('.result')
result.innerHTML = `
<ul>
<li>minutes: ${minutes.toFixed(5)}</li>
<li>hour: ${hour.toFixed(5)}</li>
</ul>
`

