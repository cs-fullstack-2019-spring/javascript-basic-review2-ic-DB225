//Ask the user to create two variables.
// Create a function that takes two variables and returns the largest of the two numbers.



function compareNumber(number1,number2){
    if (number1 <number2){
        return number2;
    }
    else if(number1> number2){
        return number1;
    }
    else{
        return "ERROR"
    }
}
var number1 = parseInt(prompt("Enter the first number: "));
var number2 = parseInt(prompt("Enter the second number: "));
console.log(compareNumber(number1,number2));