function add(num1,num2) { return num1 + num2;}
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2; }
function loadDisplay(value) { 
    display.textContent += value;
}
function clearDisplay() {
    display.textContent = null;
    display2.textContent = null;
}
function clearValues() { 
    num1 = null;
    num2 = null; 
    operator = null;
    result = null;
}
function loadNum1() { 
    num1 = Number(display.textContent);
}
function loadNum2() { 
    num2 = Number(display.textContent);
}
function calculateResult() { 
    if (operator === "x") {
        result = multiply(num1, num2)
    } else if (operator === "+") { 
        result = add(num1,num2)
    } else if (operator === "-") { 
        result = subtract(num1,num2)
    } else if (operator === "÷") { 
        result = divide(num1,num2)
    }
    display.textContent = result;
    return result
}
function loadNumbers() { 
    if (num1 && !num2) {
        loadNum2();
    } else if (!num1 && !num2) {
        loadNum1();
        clearDisplay()
    }
}
function updateCounts() { 
    if (num1) {  
        display2.textContent = num1
    }
}
function takeInput() {
    
    let input = this.textContent;
    currentContent = display.textContent.split('');
    if (input === "AC") {
        clearDisplay();
        clearValues();
        return;
    } else if (input === "=") {
        loadNumbers()
        clearDisplay()
        calculateResult()
        clearValues()
    } else if (input === ".") {
        if (currentContent.includes(".")) { return };
    } else if (input === "x" || input === "÷" || input === "+" || input === "-") {
        loadNumbers()
        if (num1 && num2) {
            num1 = calculateResult();
            num2 = null
            clearDisplay()
            console.log(num1)
            console.log(num2)
        }
        operator = input
    }
    if (Number(input)|| input === "."||input==="0")
        loadDisplay(input)
    updateCounts()
}

let num1 = null;
let num2 = null;
let operator = null;
let result = null;
const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display");
const displayNum1 = document.querySelector(".num1")
const displayNum2 = document.querySelector(".num2")
const displayOperator = document.querySelector(".operator")
const display2 = document.querySelector(".display2")
buttons.forEach(button => button.addEventListener("click",takeInput))