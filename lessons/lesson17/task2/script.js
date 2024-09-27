
"use strict";

function convert() {
    const euroCourse = 43;
    const dollCourse = 40;
  const grnSum = parseFloat(document.querySelector(".grnValue").value);
  document.querySelector(".euroRes").innerText = (grnSum / euroCourse).toFixed(2);
  document.querySelector(".dolRes").innerText = (grnSum / dollCourse).toFixed(2);
}

window.onload = function () {
  document.querySelector(".convertButton").onclick = convert;
};
