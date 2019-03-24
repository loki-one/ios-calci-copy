"use strict";

let inputBuffer = "0";
let total = 0;
let previousValue;

function computeWithOperator(inputOperator) {
    switch (inputOperator) {
        case "/":
            console.log("Clicked on /");
            break;
        case "*":
            console.log("Clicked on *");
            break;
        case "+":
            console.log("Clicked on +");
            break;
        case "-":
            console.log("Clicked on -");
            break;
    }
}

function handleSymbol(clickedSymbol) {
    switch (clickedSymbol) {
        case "C":
            console.log("ClickedSymbol is C");
            break;
        case "BS":
            console.log("ClickedSymbol is BS");
            break;
        case "=":
            console.log("ClickedSymbol is =");
            break;
        default:
            computeWithOperator(clickedSymbol);
            break;
    }
}

function handleNumber(clickedNumber) {
    if (inputBuffer === "0") {
        inputBuffer = clickedNumber;
    } else {
        inputBuffer += clickedNumber;
    }
}

function handleClick(valueOfClickedButton) {
    if (isNaN(parseInt(valueOfClickedButton))) {
        handleSymbol(valueOfClickedButton);
    } else {
        handleNumber(valueOfClickedButton);
    }
}

function renderCalciDisplay() {
    const calciDisplayDiv = document.querySelector(".calci-display");
    calciDisplayDiv.innerText = inputBuffer;
}

function initializeCalculator() {
    document.querySelector(".calci-keypad").addEventListener("click", function (event) {
        handleClick(event.target.innerText);
        renderCalciDisplay();
    });
}

initializeCalculator();