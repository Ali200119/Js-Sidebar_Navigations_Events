"use strict"

let num1 = document.querySelector("main .inputs").firstElementChild;
let num2 = num1.nextElementSibling;

let sum = document.querySelector("main .operators").firstElementChild;
let subtraction = sum.nextElementSibling;
let multiple = subtraction.nextElementSibling;
let divide = multiple.nextElementSibling;

let result = document.querySelector("main .output").firstElementChild;

sum.addEventListener("click", function() {
    if (!isNaN(num1.value) && !isNaN(num2.value)) {
        result.value = parseInt(num1.value) + parseInt(num2.value);
    }

    num1.value = "";
    num2.value = "";
})

subtraction.addEventListener("click", function() {
    if (!isNaN(num1.value) && !isNaN(num2.value)) {
        result.value = parseInt(num1.value) - parseInt(num2.value);
    }

    num1.value = "";
    num2.value = "";
})

multiple.addEventListener("click", function() {
    if (!isNaN(num1.value) && !isNaN(num2.value)) {
        result.value = parseInt(num1.value) * parseInt(num2.value);
    }

    num1.value = "";
    num2.value = "";
})

divide.addEventListener("click", function() {
    if (!isNaN(num1.value) && !isNaN(num2.value)) {
        result.value = parseInt(num1.value) / parseInt(num2.value);
    }

    num1.value = "";
    num2.value = "";
})