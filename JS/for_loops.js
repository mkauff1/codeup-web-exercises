"use strict";

/*
let num = 8;
while (num < 50){
    num++;
    if (num % 2 === 0) {
        console.log(num);
    }
    continue;
}
console.log("The loop has ended");

 */
/*
let fullNameEntered = false;
let names = "";

do {
    names += prompt("PLease enter or add to your name");
    fullNameEntered = confirm("Is this your full name: " + names);
} while (!fullNameEntered);
alert("This is your name: " + names);
 */

/*
while(!fullNameEntered) {
    names += " " + prompt("Please add onto name");
    fullNameEntered = confirm("Is this your full name?");
}
alert("This is your name: " + names);
*/

// TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that they are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
/*
let numSpaces = 30;
do {
    console.log("This is how many cars are parked: " + numSpaces);
    numSpaces -= 2;
} while (numSpaces)

console.log("This parking lot is now full");
*/
/*
// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct
//  password until the correct password is given.

let password = "passw0rd123";
let isCorrect = false;
let attempt = "";
while(!isCorrect) {
    attempt = prompt("Please enter your password...");

    isCorrect = (attempt === password);
    if (!isCorrect) {
        alert("That was not the correct password...");
    }
}
alert("You entered the correct password. Welcome");
*/

/* //Exercise 1 complete
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let multiply = (num * i) * 1;
        console.log(num + " x " + i + " = " + multiply);
    }
}

showMultiplicationTable(9);
*/

