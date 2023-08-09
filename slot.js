//1. Deposit some money
//2. Add number of lines to bet on
//3. Collect the bet amount.
//4. Spin the slot machine.
//5. Check if the user won
//6. Give the user their winnings
//7. Play the game again


//Collecting Deposit money

const prompt = require("prompt-sync")();

const deposit =()=>{
    while(true) {
        const amount = prompt("How much would you like to deposit?: ");
        const numberAmount = parseFloat(amount);

        if(isNaN(numberAmount) || numberAmount <= 0) {
            console.log("The deposit amount is not valid. Please try again.");
            // deposit();
        }
        else{
            return(numberAmount);
        }
    }
}

const getNumberOfBetLines =()=>{
    while(true) {
        const lines = prompt("How many lines you want to bet? (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines. Please try again");
            // getNumberOfBetLines();
        }
        else{
            return(numberOfLines);
        }
    }        
}

const amount = deposit();
const numberOfLines = getNumberOfBetLines();


console.log("You have deposited $" + amount + " For: " + numberOfLines + " Lines");

