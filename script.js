let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayN = document.querySelector(".currentNum");
const previousDisplayN = document.querySelector(".previousNum");

window.addEventListener("keydown", handlekeyPress);

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        calculate();
    }
});
  
const decimal = document.querySelector(".dec");
decimal.addEventListener("click", () => {
addDecimal();
});
const operators = document.querySelectorAll(".oper");
const numberB = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalculator);

const erasor = document.querySelector(".erasor");
erasor.addEventListener("click", deleteCurrentN);

numberB.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
if (previousNum !== "" && currentNum !=="" && operator === ""){
    previousNum = "";
    currentDisplayN.textContent = currentNum;
}
    if (currentNum.length <= 11) {
    currentNum += number;
    currentDisplayN.textContent = currentNum;
    }
}

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperators(e.target.textContent);
    });
});

function handleOperators(op) {
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op);
    } else if (currentNum === "") {
        operatorCheck(op);
    } else {
        calculate();
        operator = op;
        currentDisplayN.textContent = "0";
        previousDisplayN.textContent = previousNum + " " + operator;
    }
    
    
}

function operatorCheck(text) {
    operator = text;
    previousDisplayN.textContent = previousNum + " " + operator;
    currentDisplayN.textContent = "0";
    currentNum = "";
}

function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum = previousNum + currentNum;
    } else if (operator === "-") {
        previousNum = previousNum - currentNum;
    } else if (operator === "x") {
        previousNum = previousNum * currentNum;
    } else if (operator === "÷") {
        if (currentNum <= 0){
            previousNum = "Error";
            displayResult();
            return;
        }
        previousNum = previousNum / currentNum;
    }
    previousNum = previousNum.toString();
    displayResult();
    
}

function roundNumber(number) {
    return Math.round(num * 100000) / 100000; 
}

function displayResult() {
   
    if(previousNum.length <= 11) {
        currentDisplayN.textContent = previousNum;
    } else {
        currentDisplayN.textContent = previousNum.slice(0, 11) + "...";
    }
    previousDisplayN.textContent = "";
    currentNum = "";
    operator = "";
    }

function clearCalculator() {
    currentNum = ""; 
    previousNum = "";
    operator = "";
    currentDisplayN.textContent = "0";
    previousDisplayN.textContent = "";
}

function deleteCurrentN() {
    if (currentNum !== "") {
    currentNum = currentNum.slice(0, -1);
    currentDisplayN.textContent = currentNum;
    if (currentNum === ""){
        currentDisplayN.textContent = "0";
    }  
}
if (currentNum === "" && previousNum !== "" && operator === "") {
    previousNum = previousNum.slice(0, -1);
    currentDisplayN.textContent = previousNum;
}
}

function addDecimal() {
    if(!currentNum.includes(".")) {
        currentNum += ".";
        currentDisplayN.textContent = currentNum;
    }
}

function handlekeyPress(e) {
    e.preventDefault()
    if(e.key >= 0 && e.key <=9) {
        handleNumber(e.key)
    } 
    if(e.key === "Enter" || (e.key === "=" && currentNum != "" && previousNum != ""))
    {
        handleOperators("=");
    }
    if (e.key === "+" || e.key === "-" || e.key === "÷") {
        handleOperators(e.key)
    }
    if (e.key === "*") {
        handleOperators("x");
    }
    if (e.key === ".") {
        addDecimal();
    }
    if (e.key === "Backspace") {
        deleteCurrentN();
    }
}



