const inputButtons = document.querySelectorAll(".num-key");
const opButtons = document.querySelectorAll(".op-key");
const inputDisplay = document.querySelector("#display-input");
const resultDisplay = document.querySelector("#display-result");
const acButton = document.querySelector("#ac-key");
const delButton = document.querySelector("#del-key");
const solveButton = document.querySelector("#solve-key");

/* VARIABLES*/
let firstValue = "";
let secondValue = "";
let operator = null;

inputButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
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
        if (firstValue === "") return;
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
solveButton.addEventListener("click", () =>{
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);
    operate(operator, num1, num2);
});

acButton.addEventListener("click", () => {
    inputDisplay.textContent = "";
    resultDisplay.textContent = "";
    firstValue = "";
    secondValue = "";
    operator = null;
});