"use strict";

const a = parseInt(prompt('a?'))
const b = parseInt(prompt('b?'))
const c = parseInt(prompt('c?'))

const firstSum = a + 12 + b
const secondSum = Math.sqrt((a + b) / 2 * a).toFixed(4)
const threeSum = Math.cbrt((a + b) * c).toFixed(4)
const fourSum = Math.sin(a / -b).toFixed(4)

let taskClass = document.querySelector('.task');
taskClass.innerHTML = `
    <ol>
        <li>${firstSum}</li>
        <li>${secondSum}</li>
        <li>${threeSum}</li>
        <li>${fourSum}</li>
    </ol>
`;

