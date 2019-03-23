"use strict";

function timer() {

    let divTimer = document.getElementById("timer");
    let number = document.getElementById("number").value;

    if (isNaN(number) || number < 1) {
        alert("Input must be a positive number");
    }

    for (let i = number; i > -1; i--) {
        divTimer.innerHTML = "Countdown " + i + "...";
        console.log(i);
    }


}