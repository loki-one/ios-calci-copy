"use strict";

//hello
// function getDisplayValue() {
//     const calciDisplayDiv = document.querySelector(".calci-display");
//     const displayValue = calciDisplayDiv.innerText;
//     return displayValue;
// }

function updateCalciDisplay(outputValue) {
    const calciDisplayDiv = document.querySelector(".calci-display");
    calciDisplayDiv.innerText = outputValue;
}

let inputValue;
let calciMemory = [];
const calciKeypad = document.querySelector(".calci-keypad");
let valueInCalciDisplay = "";
calciKeypad.addEventListener('click', function (event) {
    inputValue = event.target.innerText;

    if (inputValue === "C") {
        valueInCalciDisplay = 0;
        updateCalciDisplay(valueInCalciDisplay.toString());
        valueInCalciDisplay = "";
        calciMemory = [];
        console.log("C clicked", valueInCalciDisplay, calciMemory)
    } else if (inputValue === "BS") {
        console.log("BS clicked")
    } else {
        calciMemory.push(inputValue);
        console.log("Pressed except C and BS", valueInCalciDisplay, calciMemory);
        if (inputValue === "=") {
            console.log("Calculate", valueInCalciDisplay, calciMemory);
            let calculatedResult;
            for (let i = 0; i < (calciMemory.length - 1); i++) {

            }
            console.log("= Operator clicked calculate result and update display with result then set valueInCalciToinitial");
            calculatedResult = "1000";
            valueInCalciDisplay = calculatedResult;
            updateCalciDisplay(valueInCalciDisplay);
            valueInCalciDisplay = "";
            calciMemory = [];
        } else { 
          if (inputValue === "/" || inputValue === "*" || inputValue === "+" || inputValue === "*/") {
              console.log("Opeartor clicked do not update display but set valueInCalciDisplay To initial");
              valueInCalciDisplay = "";
          } else {
            valueInCalciDisplay += inputValue;
            updateCalciDisplay(valueInCalciDisplay);
          }
        }
    }

});




