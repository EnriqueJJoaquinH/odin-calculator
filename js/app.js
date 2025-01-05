// ? Global variables
let displayContent = '';
let operator1 = 0;
let operator2 = 0;
let operation = '';
let lastAnswer = 0;

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
        return 'Division by 0 not allowed'
    }
    return a / b;
}

function operate(a, operator, b) {
    let result = 0;
    switch(operator){
        case '+':   result = add(a, b);         break;
        case '-':   result = subtract(a, b);    break;
        case '*':   result = multiply(a, b);    break;
        case '/':   result = divide(a, b);      break;
    }
    console.log(result);

    return result;
}

let opTxt = document.querySelector('#operation');
let buttons = document.querySelector('#buttons');
buttons.addEventListener('click', (event) => {
    if (event.target.id === 'buttons' || Array.from(event.target.classList).includes('row'))
        return;
    switch (event.target.textContent) {
        case 'AC':
            opTxt.textContent = '';
            break;
        case 'DEL':
            opTxt.textContent = opTxt.textContent.trimEnd().slice(0, -1)
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
        case '=':
            opTxt.textContent += ` ${event.target.textContent} `;
            break;
        case '•':
            opTxt.textContent += '.';
            break;
        default:
            opTxt.textContent += event.target.textContent;
            break;
    }
})