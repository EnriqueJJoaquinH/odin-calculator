// ? Global variables
let operator1 = 0;
let operator2 = 0;
let operation = '';
let lastAnswer = 0;

let opTxt = document.querySelector('#operation');
let resTxt = document.querySelector('#result');
let buttons = document.querySelector('#buttons');
let equalBtn = document.querySelector('#equal-btn');
let pointBtn = document.querySelector('#decimal-btn');

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
    if (b == 0)
        return 'Division by 0 not allowed';
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

function makeCalculation() {
    let operationArr = opTxt.textContent.split(' ');
    operationArr.forEach((item, i) => item == 'Ans'? operationArr[i] = lastAnswer : item);

    operator1 = + operationArr.splice(0, 1);
    for (let i = 0; i < operationArr.length; i += 2){
        operation = operationArr[i];
        operator2 = + operationArr[i + 1];
        operator1 = operate(operator1, operation, operator2);
    }

    lastAnswer = operator1;
    resTxt.textContent = `${lastAnswer}`;
    pointBtn.classList.remove('inactive-btn');
}

function clearScreen() {
    opTxt.textContent = '';
    resTxt.textContent = '';
}

function deleteLastTyped() {
    let opTxtArr = opTxt.textContent.split(' ');
    if (opTxtArr[opTxtArr.length - 1] == 'Ans')
        opTxt.textContent = opTxt.textContent.replace('Ans', '');
    else {
        if (opTxt.textContent[opTxt.textContent.length - 1] == '.')
            pointBtn.classList.remove('inactive-btn');
        opTxt.textContent = opTxt.textContent.trimEnd().slice(0, -1);
    }
}

function populateScreen(event) {
    if (event.target.id === 'buttons' || Array.from(event.target.classList).includes('row'))
        return;

    if (event.target === equalBtn){
        makeCalculation();
        return;
    }

    if (resTxt.textContent != '')
        clearScreen();
    switch (event.target.textContent) {
        case 'AC':
            clearScreen();
            break;
        case 'DEL':
            deleteLastTyped();
            break;
        case '•':
            opTxt.textContent += '.';
            pointBtn.classList.add('inactive-btn');
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            opTxt.textContent += ` ${event.target.textContent} `;
            pointBtn.classList.remove('inactive-btn');
            break;
        default:
            opTxt.textContent += event.target.textContent;
            break;
    }
}

buttons.addEventListener('click', populateScreen);