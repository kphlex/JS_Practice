// display buttons pressed. 
var display = document.querySelector("#display");
var valueOne = null;
var valueTwo = null;
var whatWeDoing = null;
var finishedCal = false;

function press(input) {
    if ((display.innerText == "0" && input != ".") || finishedCal) { 
        display.innerText = input;
        finishedCal = false;
}   else {
    display.innerText += input;
    }
}

// clear display

function clr()  {
    if (display.innerText != "0") {
        display.innerText = "0";
    }
}

// Set Operator
function setOP(operation) {
    if (whatWeDoing == null) {
        valueOne = display.innerText;
        whatWeDoing = operation;
        clr();
    } else {
        calculate();
        whatWeDoing = operation;
        valueOne = display.innerText;
    }

    
    console.log(operation);
    console.log(valueOne);
}

// Calculate

function calculate() {
    if (valueOne == null) return;
    switch(whatWeDoing) {
        case "/":
            display.innerText = parseInt(valueOne) / parseInt(display.innerText); 
            break;
        case "*":
            display.innerText = parseInt(valueOne) * parseInt(display.innerText);
            break;
        case "+":
            display.innerText = parseInt(valueOne) + parseInt(display.innerText);
            break;
        case "-":
            display.innerText = parseInt(valueOne) - parseInt(display.innerText);
            break;
        default: return;
}
    finishedCal = true;
    valueOne = null;
    whatWeDoing = null; 
}