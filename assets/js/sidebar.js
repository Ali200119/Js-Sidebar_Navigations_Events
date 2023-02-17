"use strict"

let sidebar = document.querySelector("#sidebar");
let hamburger = document.querySelector("#sidebar .hamburger-hide .hamburger");
let hide = document.querySelector("#sidebar .hamburger-hide .hide");
let space = document.querySelector("#space");

hamburger.addEventListener("click", function() {
    this.style.display = "none";
    hide.style.display = "inline";
    sidebar.style.transform = "none";
})

hide.addEventListener("click", function() {
    this.style.display = "none";
    hamburger.style.display = "inline";
    sidebar.style.transform = "translateY(-255px)";
})

space.addEventListener("click", function() {
    hide.style.display = "none";
    hamburger.style.display = "inline";
    sidebar.style.transform = "translateY(-255px)";
})