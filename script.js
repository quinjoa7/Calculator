//STORED VALUES
let valueArray = [];    //stores operation values (firstNumber, operationSymbol, secondNumber)
let result = 0;         //stores the result to display

//SCREEN ELEMENTS
const topScreen = document.getElementById('top');
const botScreen = document.getElementById('bot');
topScreen.textContent = ''; //textContent.length = 17 without it i dont know why
botScreen.textContent = '';

//NUMPAD BUTTONS
    //add number buttons
for (let i = 0; i <= 9; i++) {
    const num = document.getElementById(String(i));
    num.addEventListener('click', function() {
        toTopScreen(String(i));
    })
}
    //add decimal button
const pointbtn = document.getElementById('pointbtn');
pointbtn.addEventListener('click', function() {
})
    //add delete button
const delbtn = document.getElementById('delbtn');
delbtn.addEventListener('click', function() {
    deleteLast();
})

//OPERATORS
    //add clear button
const clearbtn = document.getElementById('clearbtn');
clearbtn.addEventListener('click', function() {
    clearAll();
})
    //add operator buttons
const operators = document.getElementsByClassName('optrs');
for (let i = 0; i <= 3; i++) {
    operators[i].addEventListener('click', function() {
        addOperator(operators[i].innerText);
    })
}
    ////add equals button
const equalsbtn = document.getElementById('equalsbtn');
equalsbtn.addEventListener('click', function() {
    equalize();
})

//FUNCTIONS
const sum = function(a,b) {
    return a + b;
}
const rest = function(a,b) {
    return a - b;
}
const divide = function(a,b) {
    return a / b;
}
const multiply = function(a,b) {
    return a * b;
}

const operate = function() {
    switch (valueArray[1]) {
        case '+': 
            result = sum(Number(valueArray[0]),Number(valueArray[2]));
            break;
        case '-':
            result = rest(Number(valueArray[0]),Number(valueArray[2]));
            break;
        case '/':
            result = divide(Number(valueArray[0]),Number(valueArray[2]));
            break;
        case '*':
            result = multiply(Number(valueArray[0]),Number(valueArray[2]));
            break;
        default:
            result = 'ERROR';
            break;
    }
}

const deleteLast = function() {
    topScreen.innerText = topScreen.innerText.slice(0,-1);
}

const clearTop = function() {
    topScreen.innerText = "";
}
const clearBot = function() {
    botScreen.innerText = "";
}
const clearAll = function(){ 
    clearTop();
    clearBot();
}

const addOperator = function(a) {
    setValueArray();
    if (topScreen.innerText === '') {   //dont add operator in empty screen
        return;
    } else if (topScreen.innerText.match(/[/*-+\-]/) && valueArray[2] === undefined) {  //dont add more than 1 operator
        return;
    }

    if (!topScreen.innerText.match(/[/*-+\-]/)) {   //adds operator if it doesnt exist
        toTopScreen(' ' + a + ' ');
    } else {    //solves the operation if you have one in the screen and you press an operation button
        equalize();
        clearTop();
        toTopScreen(botScreen.innerText + ' ' + a + ' ');
    }
}

const equalize = function() {   //solves the operation in top screen
    if (!topScreen.innerText.includes('=')) {
        setValueArray();
        toTopScreen(' =');
        operate();
        toBotScreen(result);
    }
}

const setValueArray = function() { 
    valueArray = topScreen.innerText.split(' ');
}

const toBotScreen = function(a) {   //add text to top screen
    botScreen.innerText = a;
}

const toTopScreen = function(a) {   //add text to bot screen
    topScreen.textContent += a;     //innerText doesnt consider the last ' '
}