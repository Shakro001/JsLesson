"use strict";

const years = parseInt(prompt('years:'))

const yearsOld = 2024 - years

const num = document.querySelector('.num')

num.innerHTML = `
years old: ${yearsOld}
`
