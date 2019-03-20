"use strict";

//hello
// function getDisplayValue() {
//     const calciDisplayDiv = document.querySelector(".calci-display");
//     const displayValue = calciDisplayDiv.innerText;
//     return displayValue;
// }

let inputValue;
const calciKeypad = document.querySelector(".calci-keypad");
const calciDisplayDiv = document.querySelector(".calci-display");
let inputNumbers = [];
let operators = [];
let displayResult = "";
calciKeypad.addEventListener('click', function (event) {
    inputValue = event.target.innerText;
    // if (inputValue != "C" && inputValue != "BS" && inputValue != "/" && inputValue != "*" && inputValue != "+" && inputValue != "-" && inputValue != "=") {
    //     displayResult += inputValue;
    //     calciDisplayDiv.innerText = displayResult;
    // } else if (inputValue === "C") {
    //     displayResult = "";
    //     calciDisplayDiv.innerText = 0;
    // } else if (inputValue === "/" || inputValue === "*" || inputValue === "+" || inputValue === "-") {
    //     inputNumbers.push(parseInt(displayResult));
    //     operators.push(inputValue);
    //     console.log(inputNumbers);
    //     console.log(operators);
    //     displayResult = "";
    // } else if (inputValue === "=") {
    //     inputNumbers.push(parseInt(calciDisplayDiv.innerText));
    //     let num1 = inputNumbers[0];
    //     let num2 = inputNumbers[1];
    //     let op = operators[0]
    //     let calResult;
    //     switch (op){
    //         case '+':
    //             calResult = num1 + num2;
    //             break;
    //         default:
    //             console.log("Invalid expression");
    //     }
    //     calciDisplayDiv.innerText = calResult;
    //     displayResult = "";
    // }

});




