//1. Deposit some money
//2. Add number of lines to bet on
//3. Collect the bet amount.
//4. Spin the slot machine.
//5. Check if the user won
//6. Give the user their winnings
//7. Play the game again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3; 

//symbols in each column
const SYMBOLS_COUNT = {
    "A":2,    //"key":value 
    "B":4,
    "C":6,
    "D":8,
}

const SYMBOLS_VALUES = {
    "A":5,    //"key":value 
    "B":4,
    "C":3,
    "D":2,
}

//1. Collecting Deposit money
const deposit =()=>{
    while(true) {
        const amount = prompt("How much would you like to deposit?: ");
        const numberAmount = parseFloat(amount);

        if(isNaN(numberAmount) || numberAmount <= 0) {
            console.log("The deposit amount is not valid. Please try again.");
        }
        else{
            return(numberAmount);
        }
    }
};

//2. Add number of lines to bet 
const getNumberOfBetLines =()=>{
    while(true) {
        const lines = prompt("How many lines you want to bet? (1-3): ");
        const numberOfLines = parseFloat(lines); //convert numberOfLines to a number 

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines. Please try again");
        }
        else{
            return(numberOfLines);
        }
    }        
};

//3. Collect the bet amount.
const getBet = (balanceAmount, lines)=>{
    while(true) {
        const betAmount = prompt("How much would you like to bet for each reel?: ");
        const numberBetAmount = parseFloat(betAmount)

        if(isNaN(numberBetAmount) || numberBetAmount <= 0) {
            console.log("The bet amount is not valid. Please try again.");
        }
        else if(numberBetAmount > balanceAmount / lines) {
            console.log("You do not have enough money. Please try again.");
        }
        else{
            return(numberBetAmount);
        }
    }
};    

//4. Spin the slot machine

const spin = ()=> {
    //adding symbols to a array
    const symbols = [];
    for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0; i<count; i++){
            symbols.push(symbol);
        }
    }
    
    // Getting symbols from "symbols" array and adding them to each reel   
    const reels = [[],[],[]]; //Each nested array represent column(reel) in slot machine
    for(let i=0; i<COLS; i++){
        const reelSymbols = [...symbols];
        for(let j=0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); //math.floor - round the number to the nearest lower number
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol); //Adding the selected symbol to the array(column)
            reelSymbols.splice(randomIndex,1); //Removing the selected symbol from the reelSymbols array. 1 = remove one element
        }
    }
    return(reels);
};


const reels = spin();
console.log(reels)
// let balanceAmount = deposit();
// const numberOfLines = getNumberOfBetLines();
// const betAmount = getBet(balanceAmount,numberOfLines);


