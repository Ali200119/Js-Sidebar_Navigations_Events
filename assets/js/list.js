"use strict"

let header = document.querySelector("main .header h1");
let input = document.querySelector("main .input input");
let button = document.querySelector("main button");
let list = document.querySelector("main .list ul");


// Create and delete li

// input.addEventListener("keyup", function () {
//     header.innerText = input.value;
// })

// button.addEventListener("click", function () {
//     if (input.value == "") {
//         alert("Don't empty");
//         return;
//     }

//     let items = document.querySelectorAll("main .list ul li span");

//         for (const item of items) {
//             if (item.innerText.toLowerCase() == input.value.toLowerCase()) {
//                 return;
//             }
//         }

//         // let li = document.createElement("li");
//         // li.innerText = input.value;
//         // list.append(li);

//         // list.innerHTML += `<li>${input.value}</li>`;

//         let li = document.createElement("li");
//         li.innerHTML = `<span>${input.value}</span>` + `<i class="fa-solid fa-circle-xmark"></i>`;
//         list.append(li);
//         input.value = "";

//         let listElements = document.querySelectorAll("main .list ul li");
//         deleteElement(listElements);
// })

// function deleteElement(list) {
//     for (const li of list) {
//         li.lastElementChild.addEventListener("click", function() {
//             li.remove();
//         })
//     }
// }








// Create li by input's value number

button.addEventListener("click", function () {
    let items = document.querySelectorAll("main .list ul li");
    
    for (const item of items) {
        item.remove();
    }
    
    if (input.value == "") {
        return alert("Don't empty");
    }

    if (isNaN(input.value)) {
        alert("You must enter only number");
        input.value = "";
        return;
    }

    else if (parseInt(input.value) <= 0) {
        alert("Entered number must be greater than 0");
        input.value = "";
        return;
    }

    for (let i = 1; i <= parseInt(input.value); i++) {
        let li = document.createElement("li");
        li.innerText = i;
        list.append(li);
    }

    input.value = "";
})