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
        return divide(a, b);
    }
    else if (operator === "times-btn"){
        return multiply(a, b);
    }
    else {
        return;
    }
}

const updateDisplay = (e) => {
    displayValue += e.target.textContent;
    displayContent.textContent = displayValue;
}

const getDisplayValue = (e) => {
    if (value1 === "" && value2 === ""){
        value1 = Number(displayValue);
        operator = e.target.id;
        console.log("First if");
        console.log({value1});
        console.log({value2});
        console.log({operator});
        displayValue = "";
    }
    else {
        value2 = Number(displayValue);
        console.log("else");
        console.log({value1});
        console.log({value2});
        console.log({operator});
        if (e.target.id != "equals-btn"){
            value1 = operate(operator, value1, value2);
            displayValue = value1;
            displayContent.textContent = displayValue;
            displayValue = "";
            operator = e.target.id;
            console.log("else if");
            console.log({value1});
            console.log({value2});
            console.log({operator});
        }
        else {
            value1 = operate(operator, value1, value2);
            displayValue = value1;
            displayContent.textContent = displayValue;
            value1 = "";
            value2 = "";
            console.log("else else");
            console.log({value1});
            console.log({value2});
            console.log({operator});
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
clearButton.addEventListener('click', () => {
    value1 = "";
    value2 = "";
    displayValue = "";
    displayContent.textContent = 0;
});