//Create a program that takes user input. If they enter 1, call a function that prints 1. If they press 2, call a function that prints 2.
// If they press 3, call a function that prints 3. If they enter ‘q’, quit. Else, print “ERROR”.


function printNumber(){
    if(number === 1){
        return 1;
    }
    else if(number === 2){
        return 2;
    }
    else if(number === 3){
        return 3;
    }
    else{
        return "ERROR";
    }
}
var number = parseInt(prompt("Enter the number:"));

console.log(printNumber(number));
