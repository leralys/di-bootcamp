// You must create 3 functions in the js file:
// number(num)
// operator(operator)
// equal()
// Hint : you can use the eval() method to help with your calculations.

const display = document.querySelector('.display');
let currentOperand;
let previousOperand;
let operation = '';

number = (x) => {
    if (currentOperand != undefined) previousOperand = currentOperand;
    display.innerText = currentOperand = x;
    console.log(`previous ${previousOperand}`);
    console.log(`current ${currentOperand}`);
}
operator = (operator) => {
    operation = operator;
    console.log(operator);
}

const equal = () => {
    let result;
    if (previousOperand != undefined || currentOperand != undefined || operation != undefined) {
        Number(previousOperand);
        Number(currentOperand);
        switch (operation) {
            case '+':
                result = previousOperand + currentOperand;
                display.innerText = result;
                previousOperand = currentOperand = undefined;
                return;
            case '-':
                result = previousOperand - currentOperand;
                display.innerText = result;
                previousOperand = currentOperand = undefined;
                return
            case '*':
                result = previousOperand * currentOperand;
                display.innerText = result;
                previousOperand = currentOperand = undefined;
                return;
            case '/':
                result = previousOperand / currentOperand;
                display.innerText = result;
                previousOperand = currentOperand = undefined;
                return;
        }
    }
}

reset = () => {
    currentOperand = '';
    previousOperand = '';
    operation = '';
    display.innerText = '';
}