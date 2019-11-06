const calculationArea = document.getElementById("calculation");
const resultArea = document.getElementById("result");

let calculation = ""
let resultNumber = 0
let newNumber = ""
let operator = ""

let btnOne = document.getElementById("one");
btnOne.addEventListener("click", () => {
    calculation = calculation + "1";
    calculationArea.textContent = calculation;
    newNumber = newNumber + "1"
    console.log(resultNumber + " one")
    console.log(newNumber + " one")
});

let btnPlus = document.getElementById("plus");
btnPlus.addEventListener("click", () => {
    calculation = calculation + "+";
    calculationArea.textContent = calculation;
    operator = "plus"
    if (resultNumber != 0) {
        resultNumber = result
    } else {
        resultNumber = parseFloat(newNumber)
    }
    newNumber = ""
    console.log(resultNumber + " plus")
    console.log(newNumber + " plus")
});

let btnEquals = document.getElementById("equals");
btnEquals.addEventListener("click", () => {
    resultArea.textContent = operate();
    resultNumber = result
    console.log(resultNumber + " eq")
    console.log(newNumber + " eq")
});

let btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
    calculation = ""
    resultNumber = 0
    newNumber = ""
    operator = ""
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
        result = resultNumber / (parseFloat(newNumber))
    } else {
        result = (parseFloat(newNumber))
    } 
    return result
}


let a = 1;
let b = 1;

numbers = [1,2]
autoNumbers = [...Array(10).keys()].map(x => ++x); /// create array of [1,2,3,4,5]

function add (a,b) {
	return a + b
}

function subtract (a,b) {
	return a - b
}

function sum () {
	return numbers.reduce((aA, bB) => aA + bB, 0)
}

function multiply () {
	return numbers.reduce((aA, bB) => aA * bB, 1)
}