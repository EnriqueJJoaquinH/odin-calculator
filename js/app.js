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