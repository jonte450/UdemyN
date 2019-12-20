
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
var firstNumber = prompt("Enter an first number");

// 3. Prompts the user for the second number.
var secondNumber = prompt("Enter an second number:");
// 4. stores that number and responds with the SUM by using an alert.  
var sum = Number(firstNumber) + Number(secondNumber);
alert(sum);

// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNumber = prompt("Enter an first number");
var secondNumber = prompt("Enter an second number:");
var operator = prompt("Enter an operator:");

if (operator === "+") {
var sum = Number(firstNumber) + Number(secondNumber);
alert(sum);
}
else if (operator === "-") {
var sum = Number(firstNumber) - Number(secondNumber);
alert(sum);
}

else if (operator === "*") {
var sum = Number(firstNumber)  * Number(secondNumber);
alert(sum);

}
else if (operator === "/") {
var sum = Number(firstNumber) / Number(secondNumber);
alert(sum);
}else{
	alert("Invalid operator!");
}
