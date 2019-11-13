const calculationArea = document.getElementById("calculation");
const resultArea = document.getElementById("result");

let calculation = "";
let resultNumber = 0;
let newNumber = "";
let operator = "";
let operatorLock = true;

let btnComma = document.getElementById("comma");
btnComma.addEventListener("click", () => {
    if (operatorLock == false) {
    calculation += ".";
    calculationArea.textContent = calculation;
    newNumber += ".";
    operatorLock = true;
    } else {
        return
    }
});

let btnZero = document.getElementById("zero");
btnZero.addEventListener("click", () => {
    calculation += "0";
    calculationArea.textContent = calculation;
    newNumber += "0";
    operatorLock = false;
});
let btnOne = document.getElementById("one");
btnOne.addEventListener("click", () => {
    calculation += "1";
    calculationArea.textContent = calculation;
    newNumber += "1";
    operatorLock = false;
});
let btnTwo = document.getElementById("two");
btnTwo.addEventListener("click", () => {
    calculation += "2";
    calculationArea.textContent = calculation;
    newNumber += "2";
    operatorLock = false;
});
let btnThree = document.getElementById("three");
btnThree.addEventListener("click", () => {
    calculation += "3";
    calculationArea.textContent = calculation;
    newNumber += "3";
    operatorLock = false;
});
let btnFour = document.getElementById("four");
btnFour.addEventListener("click", () => {
    calculation += "4";
    calculationArea.textContent = calculation;
    newNumber += "4";
    operatorLock = false;
});
let btnFive = document.getElementById("five");
btnFive.addEventListener("click", () => {
    calculation += "5";
    calculationArea.textContent = calculation;
    newNumber += "5";
    operatorLock = false;
});
let btnSix = document.getElementById("six");
btnSix.addEventListener("click", () => {
    calculation += "6";
    calculationArea.textContent = calculation;
    newNumber += "6";
    operatorLock = false;
});
let btnSeven = document.getElementById("seven");
btnSeven.addEventListener("click", () => {
    calculation += "7";
    calculationArea.textContent = calculation;
    newNumber += "7";
    operatorLock = false;
});
let btnEight = document.getElementById("eight");
btnEight.addEventListener("click", () => {
    calculation += "8";
    calculationArea.textContent = calculation;
    newNumber += "8";
    operatorLock = false;
});
let btnNine = document.getElementById("nine");
btnNine.addEventListener("click", () => {
    calculation += "9";
    calculationArea.textContent = calculation;
    newNumber += "9";
    operatorLock = false;
});

let btnPlus = document.getElementById("plus");
btnPlus.addEventListener("click", () => {
    textSwap()
    if (operatorLock == true) {
        return
    } else {
        calculation = calculation + "+";
        calculationArea.textContent = calculation;
        if (newNumber != 0 && resultNumber != 0) {
            operate()
            operator = "plus"
            operatorLock = true
        } else if (newNumber == 0){
            operator = "plus"
            operatorLock = true
        } else {
            operator = "plus"
            resultNumber = parseFloat(newNumber)
            operatorLock = true
        }
    }
    newNumber = ""
});

let btnMinus = document.getElementById("minus");
btnMinus.addEventListener("click", () => {
    textSwap()
    if (operatorLock == true) {
        return
    } else {
        calculation = calculation + "-";
        calculationArea.textContent = calculation;
        if (newNumber != 0 && resultNumber != 0) {
            operate()
            operator = "minus"
            operatorLock = true
        } else if (newNumber == 0){
            operator = "minus"
            operatorLock = true
        } else {
            operator = "minus"
            resultNumber = parseFloat(newNumber)
            operatorLock = true
        }
    }
    newNumber = ""
});

let btnMultiply = document.getElementById("multiply");
btnMultiply.addEventListener("click", () => {
    textSwap()
    if (operatorLock == true) {
        return
    } else {
        calculation = calculation + "*";
        calculationArea.textContent = calculation;
        if (newNumber != 0 && resultNumber != 0) {
            operate()
            operator = "multiply"
            operatorLock = true
        } else if (newNumber == 0){
            operator = "multiply"
            operatorLock = true
        } else {
            operator = "multiply"
            resultNumber = parseFloat(newNumber)
            operatorLock = true
        }
    }
    newNumber = ""
});

let btnDevide = document.getElementById("devide");
btnDevide.addEventListener("click", () => {
    textSwap()
    if (operatorLock == true) {
        return
    } else {
        calculation = calculation + "÷";
        calculationArea.textContent = calculation;
        if (newNumber != 0 && resultNumber != 0) {
            operate()
            operator = "devide"
            operatorLock = true
        } else if (newNumber == 0){
            operator = "devide"
            operatorLock = true
        } else {
            operator = "devide"
            resultNumber = parseFloat(newNumber)
            operatorLock = true
        }
    }
    newNumber = ""
});

let btnProcent = document.getElementById("procent");
btnProcent.addEventListener("click", () => {
    textSwap()
    if (operator == "procent" || operatorLock == true) {
        return
    } else {
        calculation = calculation + "%";
        calculationArea.textContent = calculation;
        operator = "procent"
        if (resultNumber != 0 && newNumber != 0) {
            resultNumber = (resultNumber) + ((resultNumber/100)*newNumber);
            newNumber = "";
        } else if (resultNumber != 0 && newNumber == "") {
            resultNumber = resultNumber/100;
            calculationArea.textContent = resultNumber;
        } else {
            newNumber = newNumber/100;
            calculationArea.textContent = newNumber;
        }
    }
});

let btnEquals = document.getElementById("equals");
btnEquals.addEventListener("click", () => {
    if (operator == "equal" || calculation == "") {
        calculationArea.textContent = resultNumber;
    } else if (operator == "devide" && newNumber == 0 && resultNumber !=0) {
        resultArea.textContent = "Devide by 0 ?!?!?!";
    } else if (newNumber == "" && resultNumber !=0) {
        resultArea.textContent = calculation; 
        calculationArea.textContent = resultNumber;
    } else if (operator == "procent") {
        operator = "equal"
        newNumber = 0;
        calculationArea.textContent = +resultNumber.toFixed(12);
        resultArea.textContent = calculation; 
    } else {
        resultArea.textContent = operate();
        operator = "equal"
        calculationArea.textContent = resultNumber;
        resultArea.textContent = calculation; 
    }
});

let btnBack = document.getElementById("backSpace");
btnBack.addEventListener("click", () => {
    if (operator == "equal") {
        return
    } else {
        calculation = calculation.slice(0, calculation.length -1);
        calculationArea.textContent = calculation;
        newNumber = newNumber.slice(0, newNumber.length -1);
        operatorLock = false
    }
});

let btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
    calculation = "";
    resultNumber = 0;
    newNumber = "";
    operator = "";
    resultArea.textContent = "";
    calculationArea.textContent = "";
});

function operate() {
    if (operator == "plus") {
        result = resultNumber + (parseFloat(newNumber))
    } else if (operator == "minus") {
        result = resultNumber - (parseFloat(newNumber))
    } else if (operator == "multiply") {
        result = resultNumber * (parseFloat(newNumber))
    } else if (operator == "devide") {
        if (resultNumber == 0 || newNumber == 0) {
            resultArea.textContent = "Devide by 0 ?!?!?!";
        } else {
        result = resultNumber / (parseFloat(newNumber))
        }
    } else {
        result = (parseFloat(newNumber))
    } 
    resultNumber = +result.toFixed(12);
    newNumber = 0;
    return resultNumber
}

function textSwap() {
    if (operator == "equal"){
        resultArea.textContent = "Ans " + resultNumber; 
        calculation = resultNumber
        calculationArea.textContent = calculation;
    }
}