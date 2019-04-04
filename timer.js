"use strict";

function timer() { 
// Getting the value submitted
let day = document.querySelector("#days").value; 
let hour = document.querySelector("#hours").value;
let min = document.querySelector("#minutes").value;
let sec = document.querySelector("#seconds").value; 

// Converting the values to a workable format
day = day * 1000 * 60 * 60 * 24; 
hour = hour * 1000 * 60 * 60; 
min = min * 1000 * 60; 
sec = sec * 1000; 

let inputAmt = day + hour + min + sec; 
let now = new Date().getTime();
let startPoint = inputAmt + now; 

// Updates the countdown every second
let x = setInterval(function() {

    // Today' date and time
    let now = new Date().getTime();

    let distance = startPoint - now; 
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Outputs the results
    document.querySelector("#timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
     
    // if count is over
    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "EXPIRED";
    }
}, 1000)

}