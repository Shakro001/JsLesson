"use strict";

const centimeters = parseInt(prompt('centimeters:'))

const meters = centimeters / 100;
const kilometers = centimeters / 100000;


const translate = document.querySelector('.translate')

translate.innerHTML = `
<ul>
<li>meters: ${meters}</li>
<li>kilometers: ${kilometers}</li>
</ul>
`