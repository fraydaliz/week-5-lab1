"use script";

function determineTheSmallestNumber(a, b, c) {
  if (a < b && a < c) {
    alert(a + "is the smallest number");
  } else if (b < a && b < c) {
    alert(b + "is the smallest number");
  } else if (c < a && c < b) {
    alert(c + "is the smallest number");
  }
}
determineTheSmallestNumber(2, 5, 9);

function positiveNegativeOrZero(number) {
  if (number < 0) {
    alert("negative");
  } else if (number === 0) {
    alert("zero");
  } else if (number > 0) {
    alert("positive");
  }
}
let userInput = prompt("enter a number")
positiveNegativeOrZero (userInput)

function votingEligibility(age){
if (age < 18){
    alert( "you are not eligible to vote yet")
}else if (age >= 18){
    alert ("you can vote!")
}
}

 userInput = prompt ("what is your age")