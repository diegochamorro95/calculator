const inputButtons = document.querySelectorAll(".num-key");
const opButtons = document.querySelectorAll(".op-key");
const inputDisplay = document.querySelector("#display-input");
const acButton = document.querySelector("#ac-key");
const delButton = document.querySelector("#del-key")

inputButtons.forEach(button => {
    button.addEventListener("click", () => {
        inputDisplay.textContent += button.textContent;
    });
});
opButtons.forEach(button => {
    button.addEventListener("click", () => {
        inputDisplay.textContent += button.textContent;
    });
});