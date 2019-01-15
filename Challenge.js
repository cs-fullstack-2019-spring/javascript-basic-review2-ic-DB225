////Challenge: Ask the user to enter a starting balance. Ask the user if they want to make a withdraw or deposit.
// // Ask them for the amount to withdraw or deposit, then show the total answer.
// // Let the user quit when they enter 'q'.

function askBalance() {
    var numA, numB, result1;
    function getCurrentBalance() {
        numA = parseInt(prompt("Enter a starting balance:"));
        return numA;
    }                                                                 
    function getChoice() {
        var nameOperator = prompt("Do you want to make a withdraw or deposit?");
        return nameOperator;
    }
    function getAmount() {
        numB = parseInt(prompt("Enter the amount to withdraw or deposit:"));
        return numB;
    }

    function deposit(numA,numB) {
        result1 = ((parseInt(numA)) + (parseInt(numB)));
        return result1;
    }

    function withdraw(numA, numB) {
        var result2= ((parseInt(numA)) - (parseInt(numB)));
        return result2;
    }
    function doOperation() {
        var numA = getCurrentBalance();
        var operator = getChoice();
        var numB = getAmount();


        //We write "deposit" to have DEPOSIT
        if(operator === "deposit"){
            console.log("You made a deposit of "+numB);
            console.log("Your current balance is "+deposit(numA,numB));
        }
        //We write "withdraw" to have a WITHDRAW
        else if (operator === "withdraw") {
            console.log("You made a withdraw of "+numB);
            console.log("Your current balance is "+withdraw(numA,numB));
        }
        else{
            console.log("");
        }
        deposit();
        withdraw();
    }
    doOperation();
}
askBalance();