// You must create 3 functions in the js file:
// number(num)
// operator(operator)
// equal()
// Hint : you can use the eval() method to help with your calculations.

const display = document.querySelector('.display');
let currentOperand = '';
let previousOperand = '';
let operation = '';
let isEqual = false;

const reset = () => {
    if (isEqual || (!isEqual && currentOperand != '')) {
        display.innerText = '';
    }
    currentOperand = '';
    previousOperand = '';
    operation = '';
}

const number = (x) => {
    currentOperand += x.toString();
    if (currentOperand.length > 13) {
        currentOperand = currentOperand.slice(0, 13);
    }
    display.innerText = currentOperand;
}
const operator = (operator) => {
    if (currentOperand != '') {
        previousOperand = currentOperand;
        currentOperand = '';
    }
    operation = operator;
}

const equal = () => {
    let result;
    if (previousOperand !== '' || currentOperand !== '' || operation !== '') {
        isEqual = true;
        Number(previousOperand);
        Number(currentOperand);
        switch (operation) {
            case '+':
                result = Number(previousOperand) + Number(currentOperand);
                display.innerText = result.toString().slice(0, 13);
                currentOperand = result;
                previousOperand = operation = '';
                return;
            case '-':
                result = previousOperand - currentOperand;
                display.innerText = result.toString().slice(0, 13);
                currentOperand = result;
                previousOperand = currentOperand = '';
                return
            case '*':
                result = previousOperand * currentOperand;
                display.innerText = result.toString().slice(0, 13);
                currentOperand = result;
                previousOperand = currentOperand = '';
                return;
            case '/':
                result = previousOperand / currentOperand;
                display.innerText = result.toString().slice(0, 13);
                currentOperand = result;
                previousOperand = currentOperand = '';
        }
    }
}

const clearScreen = () => {
    currentOperand = '';
    display.innerText = '';
}