// ? Global variables
let operator1 = 0;
let operator2 = 0;
let operation = '';
let lastAnswer = 0;

let opTxt = document.querySelector('#operation');
let resTxt = document.querySelector('#result');
let buttons = document.querySelector('#buttons');
let equalBtn = document.querySelector('#equal-btn');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b == 0) {
        return 'Division by 0 not allowed';
    }
    return a / b;
}

function operate(a, operator = '', b = 0) {
    if (opTxt.textContent == '')
        return '';

    let result = 0;
    switch(operator){
        case '+':   result = add(a, b);         break;
        case '−':   result = subtract(a, b);    break;
        case '×':   result = multiply(a, b);    break;
        case '÷':   result = divide(a, b);      break;
        case '':    result = a;                 break;
    }

    return result;
}

function getOperationComponents(operationStr) {
    let operationArr = operationStr.split(' ');
    operator1 = +operationArr[0];
    operation = operationArr[1];
    operator2 = +operationArr[2];
}

function clearScreen() {
    opTxt.textContent = '';
    resTxt.textContent = '';
}

function populateScreen(event) {
    if (event.target.id === 'buttons' || Array.from(event.target.classList).includes('row'))
        return;

    if (event.target === equalBtn){
        getOperationComponents(opTxt.textContent);
        resTxt.textContent = `${operate(operator1, operation, operator2)}`;
        return;
    }

    if (resTxt.textContent != '')
        clearScreen();
    switch (event.target.textContent) {
        case 'AC':
            clearScreen();
            break;
        case 'DEL':
            opTxt.textContent = opTxt.textContent.trimEnd().slice(0, -1);
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            opTxt.textContent += ` ${event.target.textContent} `;
            break;
        case '•':
            opTxt.textContent += '.';
            break;
        default:
            opTxt.textContent += event.target.textContent;
            break;
    }
}

buttons.addEventListener('click', populateScreen);