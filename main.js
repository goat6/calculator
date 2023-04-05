function add(num1,num2) { return num1 + num2;}
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2; }
function operate(num1, num2, operator) {
    if (operator === "*") {
        multiply(num1, num2);
    } else if (operator === "+") { 
        add(num1, num2);
    } else if (operator === "-") { 
        subtract(num1, num2);
    }  else if (operator === "/") { 
        divide(num1, num2);
    }
}
function loadDisplay(value) { 
    display.textContent += value;
}
function clearDisplay() {
    display.textContent = null;
    num1 = 0;
    num2 = 0; 
    operator = null
}
function takeInput() {
    let input = this.textContent
    if (input === "AC") { 
        clearDisplay()
        return
    }
    loadDisplay(input)
}
let num1 = 0;
let num2 = 0;
let operator = null;
const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display");
// const button1 = document.querySelector(".1");
// const button2 = document.querySelector(".2");
// const button3 = document.querySelector(".3");
// const button4 = document.querySelector(".4");
// const button5 = document.querySelector(".5");
// const button6 = document.querySelector(".6");
// const button7 = document.querySelector(".7");
// const button8 = document.querySelector(".8");
// const button9 = document.querySelector(".9");
// const button0 = document.querySelector(".0");
// const buttonDecimal = document.querySelector(".decimal");
// const buttonMinus = document.querySelector(".minus");
// const buttonAdd = document.querySelector(".plus");
// const buttonTimes = document.querySelector(".times");
// const buttonDivide = document.querySelector(".divide");
// const buttonClear = document.querySelector(".AC");
// const buttonChangeSign = document.querySelector(".change-sign");
// const buttonPercentage = document.querySelector(".percentage");
// const buttonEquals = document.querySelector(".equals");

buttons.forEach(button => button.addEventListener("click",takeInput))