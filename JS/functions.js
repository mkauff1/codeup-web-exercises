"use strict";

/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */
/*
//input users name
getName();

function getName() {
    // How do i input multiple names? Then save them?
    let firstName = prompt("Enter your first name");
    let secondName = prompt("Enter your last name");
    console.log(confirm(firstName + " " + secondName));
}

showName(username);

function showName() {
    //let username = alert("Your username is " + "lil" + secondName.toUpperCase() + "1");
}
*/
/*
//Teacher Solution
function getName() {
    let addMoreNames = true;
    let username = "";
    while (addMoreNames){
        username += prompt("What is your name?");
        addMoreNames = confirm("Would you like to add another name?");
        if (addMoreNames){
            username += " ";
        }
    }
    return username;
}

//console.log(getName());

function showName(username) {
    alert(username);
}

showName(getName());

*/

// Make a function named isLowerCase(letter) which returns true if the parameter is lowercased;
// otherwise it returns false

/*
isLowerCase(letter);

function isLowerCase(letter) {
    if(letter) {
        letter = letter.toLowerCase()
        return true;
    }
    else {
        return false;
    }
}
*/

/*
// Write a function named double(n) that returns a number times two

double(n);

function double(n){
    let n = parseInt(prompt("What is the number?"));
    confirm(n);
    return n * n;
}
*/

// Make a function named areIdentical(input1, input2) that returns true if both inputs are same value
// and data type; otherwise it returns false.
/*
areIdentical(1, 2);

function areIdentical(input1, input2) {
    let combinedInputs = true;
    if(combinedInputs){
        input1 === input2;
        //indexOf() typeOf() ===
        console.log(true);
    }
    else{
        console.log(false);
    }

}
*/


"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name){
    return `Hello, ${name}`;
}
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let myName = prompt("What is your name?");
console.log(sayHello(myName));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

//let myName - Moved to define before it was called


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

//NEEDS WORK STILL
/*
function isTwo(num) {
    return num === 2;
}
console.log(random);
console.log(isTwo(random));
*/
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

console.log(calculateTip(.20, 20));
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.15, 33.42));
//prompt user to put in amount they would like to tip on the total

function calculateTip(percentage, bill){
     return bill * percentage;
}
console.log(alert("The amount to Tip amount is: $" + calculateTip(.20, 20)));
console.log(alert("The amount to Tip amount is: $" + calculateTip(.25, 25.50)));
console.log(alert("The amount to Tip amount is: $" + calculateTip(.15, 33.42)));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

let bill = Number(prompt('What is the total price of your bill?'));
console.log(bill);
let percentage = Number(prompt("What percentage would you like to tip? (0.00 t0 1.00)"));
console.log(percentage);

function calculateTip(bill, percentage){
    return bill * percentage;
}
//let totalBill = calculateTip();
alert("The tip amount should be $" + calculateTip(bill, percentage.toFixed(2)));
//alert("total bill is $" + bill + totalBill);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

let newPrice = Number(prompt("What is the total bill price?"));
let newPercentage = Number(prompt("What is the discount amount?"));

function calculateDiscount(newPrice, newPercentage){
    return newPrice * newPercentage;
}
console.log(alert("discount amount is: $" + calculateDiscount(newPrice, newPercentage)));

function discountAmount(newPrice, applyDiscount){
    return newPrice - applyDiscount;
}
console.log(alert("Final bill amount is: $" + discountAmount(newPrice, calculateDiscount(newPrice, newPercentage))));