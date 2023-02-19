"use strict"

let header = document.querySelector("main .header h1");
let input = document.querySelector("main .input input");
let button = document.querySelector("main button");
let list = document.querySelector("main .list ul");

input.addEventListener("keyup", function () {
    header.innerText = input.value;
})

button.addEventListener("click", function () {
    if (input.value != "") {
        let items = document.querySelectorAll("main .list ul li span");

        for (const item of items) {
            if (item.innerText.toLowerCase() == input.value.toLowerCase()) {
                return;
            }
        }

        // let li = document.createElement("li");
        // li.innerText = input.value;
        // list.append(li);

        // list.innerHTML += `<li>${input.value}</li>`;

        let li = document.createElement("li");
        li.innerHTML = `<span>${input.value}</span>` + `<i class="fa-solid fa-circle-xmark"></i>`;
        list.append(li);
        input.value = "";
        
        let listElements = document.querySelectorAll("main .list ul li");
        deleteElement(listElements);
    }
})

function deleteElement(list) {
    for (const li of list) {
        li.lastElementChild.addEventListener("click", function() {
            li.remove();
        })
    }
}