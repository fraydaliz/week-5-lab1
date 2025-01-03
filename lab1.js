"use strict";

function calculateTemp(c) {
  let f = (c * 9) / 5 + 32;
  alert(c + " degrees in C converted to f is  " + f);
}
let userInput = prompt("what is the temp in c");
calculateTemp(userInput);

//if age <=17 - minor
//if age >=18 and <=54 - adult
//if age >= 55 = senior citizen

function ageGroup(age) {
  if (age < 18) {
    alert("you are a minor");
  } else if (age >= 18 && age < 55) {
    alert("you are an adult");
  } else if (age >= 55) {
    alert("you are a senior citizen");
  }
}
userInput = prompt("what is you age?");
ageGroup(userInput);

function mathProblem(number1, number2, operator) {
  if (operator === "addition") {
    alert(Number(number1) + Number(number2));
  } else if (operator === "subtraction") {
    alert(number1 - number2);
  } else if (operator === "multiplication") {
    alert(number1 * number2);
  } else if (operator === "division") {
    alert(number1 / number2);
  }
}
let number1 = prompt("what is the first number?");
let number2 = prompt("what is the second number?");
let operator = prompt("addition, subtraction, multiplication, division?");

mathProblem(number1, number2, operator);
