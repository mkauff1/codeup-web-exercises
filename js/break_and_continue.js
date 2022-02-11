"use strict";

/*
let userInput = parseInt(prompt("Please enter an odd number between 1 and 50"));
console.log("The number you have entered: " + userInput);

while (userInput % 2 === 0 || userInput > 50 || userInput < 0) {
    parseInt(prompt("Wrong! Please enter a valid number."));
}
*/

var oddNumber = promptForOddNumberInRange(1, 50);
oddNumber = parseInt(oddNumber);
// console.log(oddNumber);

printOddNumbersInRangeWithSkip(1,50, oddNumber);

function printOddNumbersInRangeWithSkip(low, high, skipNumber){
    // INCLUSIVE
    for (let i = low; i <= high; i++) {
        if(i === skipNumber || i % 2 === 0) {
            // if i is the skipNumber then output something special
            if(i === skipNumber) {
                console.log("Yikes! Skipping number: " + i);
            }
            continue;
        }
        // if you get here, then should be an odd number within range and not skipNumber
        console.log("He is an odd number: " + i);
    }
}

function promptForOddNumberInRange(low, high) {
    // loop until user gives an odd number in the range INCLUSIVE
    var result;
    while(true) {
        result = prompt("Enter an odd number from " + low + " to " + high);
        // console.log(result);
        if (result !== null && result % 2 === 1 && result >= low && result <= high) {
            break;
        }
    }
    return result;


}
