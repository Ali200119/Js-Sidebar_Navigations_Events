"use strict"

let sidebar = document.querySelector("#sidebar");
let hamburger = document.querySelector("#sidebar .icons").firstElementChild;
let hide = document.querySelector("#sidebar .icons").lastElementChild;

hamburger.addEventListener("click", function() {
    this.style.display = "none";
    hide.style.display = "inline";
    sidebar.style.transform = "unset";
})

hide.addEventListener("click", function() {
    this.style.display = "none";
    hamburger.style.display = "inline";
    sidebar.style.transform = "translate(-205px)";
})