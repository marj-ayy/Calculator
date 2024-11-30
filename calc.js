function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(op, a, b){
    switch(op){
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function populateDisplay(digit) {
    const display = document.querySelector(".display");
    console.log(digit)
    display.textContent = digit;
}

let firstNumber;
let secondNumber;
let operator;

const digitButtons = document.querySelectorAll(".btn.digit");
const arrayDigitButtons = Array.from(digitButtons);
arrayDigitButtons.forEach(button => button.addEventListener("click", e => populateDisplay(e.target.textContent)));

