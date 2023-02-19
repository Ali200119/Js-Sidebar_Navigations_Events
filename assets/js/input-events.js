"use strict"

let input = document.querySelector("main input");
let button = document.querySelector("main button");

// input.addEventListener("blur", function() {
//     alert("Blur");
//     this.value = "";
// })

// input.addEventListener("focus", function() {
//     console.log("Focus");
// })

// input.addEventListener("change", function() {
//     console.log('Changed');
// })

// input.addEventListener("keyup", function() {
//     console.log('Keyup');
// })

// input.addEventListener("keydown", function() {
//     console.log('Keydown');
// })

// input.addEventListener("keypress", function() {
//     console.log('Keypress');
// })

input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
})

button.addEventListener("click", function() {
    alert("Clicked");
})