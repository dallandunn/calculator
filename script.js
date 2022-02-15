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
const decimal = document.querySelector('#decimal');
const negative = document.querySelector('#negative')
const backspace = document.querySelector('#backspace')

let firstNumber = 0;
let currentOperation;

clearButton.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = 0;
});

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {

        if (display.textContent === '0' || display.id === "answer") {
            display.removeAttribute('id');
            display.textContent = number.textContent;
        } else {
            display.textContent += number.textContent;
        }
    });

})

decimal.addEventListener('click', () => {
    if (!(display.textContent.includes('.'))){
        display.textContent = display.textContent + '.';
    }
});

negative.addEventListener('click', () => {
    display.textContent = '-' + display.textContent;
})

backspace.addEventListener('click', () => {
    if (display.textContent.length > 1 && display.textContent.split('')[0] !== '-') {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = 0;
    }
    
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
    firstNumber = 0;
    display.textContent = Math.round(output * 100000000) / 100000000;
    display.id = "answer"
});