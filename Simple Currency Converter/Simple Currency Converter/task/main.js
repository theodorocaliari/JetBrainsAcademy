const input = require('sync-input');

console.log("Welcome to Currency Converter!");

//criei um objeto
const currency = {
    "usd": 1.0,
    "jpy": 113.5,
    "eur": 0.89,
    "rub": 74.36,
    "gbp": 0.75
};

let currencyFrom, currencyTo, checkCurrency, checkAmount, checkLessThanOne, currencyAmount, choice;

//capiturei as entradas do objeto
let entries = Object.entries(currency);

//com o map eu "separei" as entradas em 2 variaveis
let data = entries.map( ([key, value]) => {
    //return `${key} : ${value}`;
    return `1 USD equals ${value} ${key.toUpperCase()}`;
});

for(let i = 0; i < data.length; i++){
    console.log(data[i]);
}

//console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
//console.log("What do you want to convert?");
console.log("What do you want to do?");
console.log("1-Convert currencies 2-Exit program");
choice = input();
choice = Number(choice);

while(!!Number(choice) === false || choice > 2 || choice < 1) {
    console.log("Unknown input");
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    choice = input();
}

while(choice !== 2){
    console.log("What do you want to convert?");
    currencyFrom = input("From: ");
    currencyFrom = currencyFrom.toLowerCase();
    checkCurrency = currency.hasOwnProperty(currencyFrom);

    while(checkCurrency === false){
        console.log("Unknown currency");
        console.log("What do you want to convert?");
        currencyFrom = input("From: ");
        currencyFrom = currencyFrom.toLowerCase();
        checkCurrency = currency.hasOwnProperty(currencyFrom);
    }

    currencyTo = input("To: ");
    currencyTo = currencyTo.toLowerCase();
    checkCurrency = currency.hasOwnProperty(currencyTo);

    while(checkCurrency === false){
        console.log("Unknown currency");
        currencyTo = input("To: ");
        currencyTo = currencyTo.toLowerCase();
        checkCurrency = currency.hasOwnProperty(currencyTo);
    }

    function convertCurrency(currencyFrom, currencyTo) {

        currencyAmount = Number(input("Amount: "));
        checkAmount = Number(currencyAmount);
        checkLessThanOne = currencyAmount >= 1;

        while(!!checkAmount === false){
            console.log("The amount has to be a number");
            currencyAmount = Number(input("Amount: "));
            checkAmount = Number(currencyAmount);
        }

        while(checkLessThanOne === false){
            console.log("The amount cannot be less than 1");
            currencyAmount = Number(input("Amount: "));
            checkLessThanOne = currencyAmount >= 1;
        }

        //let conversion = currency[currencyFrom] * currency[currencyTo] * currencyAmount;
        let conversion = currencyAmount / currency[currencyFrom] * currency[currencyTo];
        return `Result: ${currencyAmount} ${currencyFrom.toUpperCase()} equals ${conversion.toFixed(4)} ${currencyTo.toUpperCase()}`

    }
    console.log(convertCurrency(currencyFrom, currencyTo));
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    choice = input();
    choice = Number(choice);
}

console.log("Have a nice day!");
