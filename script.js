let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayN = document.querySelector(".currentNum");
const previousDisplayN = document.querySelector(".previousNum");

const equal = document.querySelector(".equal");
equal.addEventListener("click", calculate);
 
const decimal = document.querySelector(".dec");
const operators = document.querySelectorAll(".oper");
const numberB = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");

const erasor = document.querySelector(".delete");

numberB.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
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
    operator = op;
    previousNum = currentNum;
    previousDisplayN.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayN.textContent = "";
}

function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum = previousNum + currentNum;
    }
    previousDisplayN.textContent = "";
    currentDisplayN.textContent = previousNum;
}






