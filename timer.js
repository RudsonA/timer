"use strict";

function timer() {

    let divTimer = document.getElementById("timer");
    let number = document.getElementById("number").value;

    if (isNaN(number) || number < 1) {
        alert("Input must be a positive integer");

    }

    let n = number;
    divTimer.innerHTML = "Countdown: " + n + " seconds left...";
    function subtraction() {
        if (n == 0) {
            divTimer.innerHTML = "TIMES UP!";
            return;
        }
        n = n - 1;
        console.log(n);
        divTimer.innerHTML = "Countdown: " + n + " seconds left...";

    }

    setInterval(subtraction, 1000);     

    subtraction();
}

    //     number *= 1000;
    //     for (let i = number; i > -1; i--) {
    //         let x = i/1000;
    //         setTimeout(function () {

    //             divTimer.innerHTML = "Countdown " + x + "...";
    //             // divTimer.innerHTML = "Countdown " + i + "...";

    //         }, 1000);
    //         console.log(Math.round(x));
    //     }
    // }

    // function countdown() {
    //     setTimeout(timer(), 1000);
    // }

    // function enterOnPress() {
    //     let x = event.keyCode;
    //     console.log(x);
    //     if (x == 13) {
    //         timer();
    //     }
    // }
    // document.addEventListener("keydown", enterOnPress());