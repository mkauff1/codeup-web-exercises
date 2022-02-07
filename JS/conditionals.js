"use strict";
/*
var isAdmin = true;

if (isAdmin) {
    console.log("You are an Admin!");
}

let itemPrice = 4.99;
let moneyInMyWallet = 10.00;

if (moneyInMyWallet >= itemPrice) {
    console.log("You can buy this item");
} else {
    console.log("You cant buy this you poor loser");
}

var age = 21;
var priceOfDrink = 8.00;

if (age >= 21 && moneyInMyWallet >= priceOfDrink){
    console.log("You can buy a drink");
} else {
    console.log("You have no monies");
}

*/

/*
Create a function called getToDestination which will help determine how a person can
get to their destination!
It will accept 4 arguments and the parameter names are:
age - the age of the rider
isInsured - a boolean telling the function if the rider has insurance
hasCar - a boolean describing if the rider has a car
canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
If the rider is over 16, has insurance, and has a car then they can use their own vehicle
If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
If the rider meets none of the above, they should call a friend for a ride!
This getToDestination should not return any value, but rather console log based on the conditions met.
getToDestination, part 2
Create a function called canGetRideshare() which will RETURN a boolean
It will determine if there are drivers nearby and the person has enough money for the ride
Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
Call canGetRideshare() in the else if after !isLegalDriver &&...
Be sure to log to the user if they can or cannot get a rideshare
 */
/*
getToDestination();

function getToDestination() {
//    function isInsured(input){
//        if (input === "yes") return true;
//    }
//    function hasCar(input1) {
//        if (input1 === "yes") return true;
//    }
//    function canGetRideShare(input2) {
//        if (input2 === "yes") return true;
//    }
    function canGetRideshare() {
        let driversNearby = true;
        let moneyInAccount = 6.00;
        let costOfRideshare = 5.00;
        if (driversNearby && moneyInAccount >= costOfRideshare) {
            console.log("You will be picked up shortly");
        } else if (!driversNearby && moneyInAccount >= costOfRideshare) {
            console.log("There are no drivers in your area");
        } else if (driversNearby && moneyInAccount < costOfRideshare) {
            console.log("You do not have enough money in your account");
        } else if (!driversNearby && moneyInAccount < costOfRideshare) {
            console.log("You are out of luck");
        }
        //alternative return !!(hasDriversNearby && hasEnoughMoney);
    }
    let age = 16;
    let isInsured = true;
    let hasCar = false;
    let rideShare = true;

    let legalAge = 16;

    if(age >= legalAge && hasCar && isInsured){
        console.log("You can use your own vehicle");
    } else if(age >= legalAge && hasCar && !isInsured){
        console.log("You are of age and have a car, but it is not insured bub");
    } else if(age >= legalAge && !hasCar && isInsured){
        console.log("You are old enough but you do not have a car!");
    } else if(age < legalAge && hasCar && isInsured) {
        console.log("You are not old enough to drive, but cool car!");
    } else if(age < legalAge && !hasCar && !isInsured && rideShare) {
        console.log("You should take an Uber");
    } else if(age < legalAge && !hasCar && !isInsured && !rideShare) {
        console.log("You need to ask a friend for a ride");
    } else if(rideShare === true) {
        canGetRideshare();
    } else {
        console.log("Nope");
    }
}
*/
/*
function checkWeather(todaysWeather) {
    if (todaysWeather === "raining") {
        console.log("grab an umbrella");
    } else if (todaysWeather === "snowing") {
        console.log("grab a coat");
    } else {
        console.log("Enjoy the sun");
    }

//checkWeather("raining");
// var theWeather = prompt("What kind of weather do you like?");
    switch (todaysWeather) {
        case "snowing":
            console.log("Please grab a coat");
            break;
        case "raining":
            console.log("Please grab an umbrella");
            break;
        case "hailing":
            console.log("Please cover your car");
            break;
        default:
            console.log("Please enjoy the sun");
            break;
    }
    checkWeather("snowing");
}
 */
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*
function analyzeColor(color){
    if(color === "blue"){
        console.log("Blue is the color of the sky the represents the infantry cord");
    } else if (color === "red"){
        console.log("Red is the color of the blood of their enemies that rains down");
    } else if (color === "green"){
        console.log("Green is the grass that grows from their blood.");
    } else {
        console.log("I dont know anything about " + color);
    }
}
analyzeColor("red");
*/
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//analyzeColor(randomColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch(color){
        case "red":
            console.log("Red is the blood of their enemies that rains down");
            break;
        case "orange":
            console.log("Orange is the desert sand that the taliban is buried in");
            break;
        case "yellow":
            console.log("Yellow is the morning sun that smiles down on God's soldiers");
            break;
        case "green":
            console.log("Green is the grass that grows from their blood");
            break;
        case "blue":
            console.log("Blue is the color of the sky the represents the infantry cord");
            break;
        case "indigo":
            console.log("1");
            break;
        case "violet":
            console.log("2");
            break;
        default:
            console.log("Infantry leads the way in all colors, even " + color);
            break;
    }
}
analyzeColor(randomColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let enterColor = prompt("What is your favorite color?");
alert("Your favorite color is " + enterColor);
let userColor = analyzeColor(enterColor);
alert(userColor);
//How do i alert a function?
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

