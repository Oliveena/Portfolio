"use strict";

// debug JS load
console.log("1"); //https://stackoverflow.com/questions/25962958/calling-a-javascript-function-in-another-js-file 
// I'm not comfortable with export/import yet, for this projet
// adding current year to footer 

document.getElementById('our-year').textContent = new Date().getFullYear();