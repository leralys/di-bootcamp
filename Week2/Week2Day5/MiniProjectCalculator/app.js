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

equal = () => {
    let result;
    if (previousOperand != undefined || currentOperand != undefined || operation != undefined) {
        switch (operation) {
            case '+':
                result = previousOperand + currentOperand;
                display.innerText = result;
                break;
            case '-':
                result = previousOperand - currentOperand;
                break;
                display.innerText = result;
            case '*':
                result = previousOperand * currentOperand;
                break;
                display.innerText = result;
            case '+':
                result = previousOperand / currentOperand;
                break;
        }
    }
}
        // console.log(previousOperand, previousOperand, operation);
        // switch (oper) {
        //     case '+':
        //         result = prev + curr;
        //         break;
        //     case '-':
        //         result = prev - curr;
        //         break;
        //     case '*':
        //         result = prev * curr;
        //         break;
        //     case '+':
        //         result = prev / curr;
        //         break;
        // } console.log(result);
        // return result;
