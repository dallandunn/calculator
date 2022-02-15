function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    if (num1 / num2 === Infinity) return "Error";
    return num1 / num2;
};

function operate(operator, num1, num2) {
    return operator(num1, num2);
};

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#clear')
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals')

let firstNumber = 0;
let currentOperation;

clearButton.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = 0;
});

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = number.textContent;
        } else {
            display.textContent += number.textContent;
        }
    });

})

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (firstNumber === 0) {
            firstNumber = display.textContent;
            currentOperation = operator.id;
            display.textContent = 0;
        } else {
            firstNumber = operate(window[currentOperation], firstNumber, display.textContent)
            display.textContent = 0;
            currentOperation = operator.id;
        }
    })
})

equalsButton.addEventListener('click', () => {
    let output = operate(window[currentOperation], firstNumber, display.textContent);
    console.log(output);
    display.textContent = Math.round(output * 100000000) / 100000000;
});