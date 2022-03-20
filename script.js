//STORED VALUES
let displayValue = '';
let valueArray = [];
let result = 0;

//SCREEN ELEMENTS
const topScreen = document.getElementById('top');
const botScreen = document.getElementById('bot');

//NUMPAD BUTTONS
    //add number buttons
for (let i = 0; i <= 9; i++) {
    const num = document.getElementById(String(i));
    num.addEventListener('click', function() {
        toBotScreen(String(i));
    })
}
    //add decimal button
const pointbtn = document.getElementById('pointbtn');
pointbtn.addEventListener('click', function() {
    addIfInexistent('.');
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
    clearScreen();
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
    botScreen.innerText = botScreen.innerText.slice(0,-1);
    displayValue = botScreen.innerText;
}

const clearScreen = function(){ 
    botScreen.innerText = "";
    topScreen.innerText = "";
    displayValue = "";
}

const addOperator = function(a) {
    //if (!displayValue.match(/[/*-+]/)) {
    //    toBotScreen(' ' + a + ' ');
    //}
}


const toBotScreen = function(a) {
    botScreen.innerText += a;
}

const toTopScreen = function(a) {
    topScreen.innerText += ' ' + botScreen.innerText + a;
}