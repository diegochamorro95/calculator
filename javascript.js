const inputButtons = document.querySelectorAll(".num-key");
const opButtons = document.querySelectorAll(".op-key");
const inputDisplay = document.querySelector("#display-input");
const resultDisplay = document.querySelector("#display-result");
const acButton = document.querySelector("#ac-key");
const delButton = document.querySelector("#del-key");
const solveButton = document.querySelector("#solve-key");
let isSolved = false;
/* VARIABLES*/
let firstValue = "";
let secondValue = "";
let operator = null;

inputButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (isSolved) {
            clearAll();
        }
        if (operator == null) {
            firstValue += value;
        } else {
            secondValue += value;
        }
        inputDisplay.textContent += value;
    });
});
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstValue === "") {
            return;
        } else if (firstValue != "" && secondValue != "") {
            const num1 = parseFloat(firstValue);
            const num2 = parseFloat(secondValue);
            operate(operator, num1, num2);
            firstValue = parseFloat(resultDisplay.textContent);
            secondValue = "";
            inputDisplay.textContent = resultDisplay.textContent;
        }
        operator = button.textContent;
        inputDisplay.textContent += `${operator}`;
    });
});
/*FUNCTIONS*/
function sum(num1,num2) {
    return num1+num2;
}
function substract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num2 !== 0? num1/num2 : "Math ERROR";
}

function operate(operator, num1, num2){
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Invalid Operation";
        return;
    }
    switch(operator){
        case "+":
            result = sum(num1,num2);
            break;
        case "-":
            result = substract(num1,num2);
            break;
        case "x":
            result = multiply(num1,num2);
            break;
        case "÷":
            result = divide(num1,num2);            
            break;
        default: 
        result = "Invalid operation";
    }
    resultDisplay.textContent = result;
}

function clearAll() {
    inputDisplay.textContent = "";
    resultDisplay.textContent = "";
    firstValue = "";
    secondValue = "";
    operator = null;
    isSolved = false;
}

solveButton.addEventListener("click", () =>{
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    isSolved = true;
    operate(operator, num1, num2);
});

acButton.addEventListener("click", clearAll);
delButton.addEventListener("click", () => {
    inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
    if (secondValue) {
        secondValue = secondValue.slice(0, -1);
    } else if (operator) {
        operator = null;
    } else if (firstValue) {
        firstValue = firstValue.slice(0, -1);
    }
    if (inputDisplay.textContent === "") {
        clearAll();
    }
    
  
});