"use strict";

function timer() {

    let divTimer = document.getElementById("timer");
    let number = document.getElementById("number").value;

    if (isNaN(number) || number < 1) {
        alert("Input must be a positive number");
    }

    number *= 1000;
    for (let i = number; i > -1; i--) {
        let x = i/1000;
        setTimeout(function () {

            divTimer.innerHTML = "Countdown " + x + "...";
        }, 1000)
        console.log(x);
    }


}