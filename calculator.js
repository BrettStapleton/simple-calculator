let displayValue = "";
let operator = "";
let value1 = "";
let value2 = "";

const displayContent = document.getElementById('display-content');
displayContent.textContent = 0;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operate = (operator, a, b) => {
    if (operator === "plus-btn"){
        return add(a, b);
    }
    else if (operator === "minus-btn"){
        return subtract(a, b);
    }
    else if (operator === "divide-btn"){
        if (b === 0){
            clearAll();
            return displayContent.textContent = "Divide by 0";
        }
        else {
            return divide(a, b);
        }
    }
    else if (operator === "times-btn"){
        return multiply(a, b);
    }
    else {
        return a;
    }
}



const updateDisplay = (e) => {
    if (displayContent.textContent.includes('.') && e.target.id == "dot-btn"){
        e.target.disabled = true;
    }
    else {
        displayValue += e.target.textContent;
        displayContent.textContent = displayValue;
        document.getElementById("dot-btn").disabled = false;
    }
}

const clearAll = () => {
    value1 = "";
    value2 = "";
    operator = "";
    displayValue = "";
    displayContent.textContent = 0;
}

const getDisplayValue = (e) => {
    if (value1 === "" && value2 === ""){
        value1 = Number(displayValue);
        operator = e.target.id;
        displayValue = "";
    }
    else {
        value2 = Number(displayValue);
        if (e.target.id != "equals-btn"){
            value1 = operate(operator, value1, value2);
            displayValue = value1;
            displayContent.textContent = displayValue;
            displayValue = "";
            operator = e.target.id;
            if (typeof value1 != 'number'){
                value1 = "";
            }
        }
        else {
            value1 = operate(operator, value1, value2);
            displayValue = value1;
            displayContent.textContent = displayValue;
            value1 = "";
            value2 = "";
        }
    }
}

const digitButtons = document.querySelectorAll('.digit-btn');
digitButtons.forEach((button) => {
    button.addEventListener('click', updateDisplay);
});

const operatorButtons = document.querySelectorAll('.operator-btn');
operatorButtons.forEach((button) => {
    button.addEventListener('click', getDisplayValue);
});

const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', clearAll);