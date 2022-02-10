function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    return operator(num1, num2);
};

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = number.textContent;
        } else {
            display.textContent += number.textContent;
        }
    });

})