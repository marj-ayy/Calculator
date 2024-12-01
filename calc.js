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
    display.textContent += digit;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let switchToSecond = false;
let errorClear = false;

let counterOperator = 0;
let counterEqual = 0;

const buttons = document.querySelectorAll(".btn");
const buttonsArray = Array.from(buttons);
buttonsArray.forEach(button => button.addEventListener("mouseenter", (e) => {
    e.target.style["opacity"] = 0.5;
}));
buttonsArray.forEach(button => button.addEventListener("mouseleave", (e) => {
    e.target.style["opacity"] = 1;
}));

buttonsArray.forEach(button => button.addEventListener("click", (e) => {
    const display = document.querySelector(".display");
    const classArray = Array.from(e.target.classList);
    if(errorClear)
        display.textContent = "";
        errorClear = false;
    if (classArray.includes("digit")){
        if (counterOperator === counterEqual)
            firstNumber = firstNumber + e.target.textContent;
        else
            secondNumber = secondNumber + e.target.textContent;
        if(switchToSecond){
            display.textContent = "";
            switchToSecond = false;
        }
        populateDisplay(e.target.textContent);
    }
    if(firstNumber){
        if(classArray.includes("operator") && counterOperator === counterEqual){
            ++counterOperator;
            switchToSecond = true;
            operator = e.target.textContent;
        }
    }
    if(firstNumber && secondNumber && operator){
        if(classArray.includes("equal")){
            if(secondNumber === "0" && operator === "/"){
                display.textContent = "";
                display.textContent = "Math Error";
                errorClear = true;
                firstNumber = "";
                secondNumber = "";
                operator = "";
                counterEqual = 0;
                counterOperator = 0;
            }
            else{
                ++counterEqual;
                display.textContent = "";
                let result = operate(operator, Number(firstNumber), Number(secondNumber));
                if(result.toString().length > 10)
                    result = Number.parseFloat(result).toExponential(5);
                populateDisplay(result);
                firstNumber = operate(operator, Number(firstNumber), Number(secondNumber)).toString(); 
                secondNumber = ""; 
            }   
        }
    }
    if(classArray.includes("clear")){
        firstNumber = "";
        secondNumber = "";
        operator = "";
        counterEqual = 0;
        counterOperator = 0;
        display.textContent = "";
    }   
    console.log(`CounterOperator : ${counterOperator} // CounterEqual : ${counterEqual} // firstNumber : ${firstNumber} // secondNumber : ${secondNumber} // Operator : ${operator}`);
}));



