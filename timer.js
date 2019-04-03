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

let x = setInterval(function() {
    
    let days = Math.floor(inputAmt / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((inputAmt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((inputAmt % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((inputAmt % (1000 * 60)) / 1000);

    // document.querySelector()
     
}, 1000)

}