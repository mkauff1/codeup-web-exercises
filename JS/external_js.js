"use strict";

/*
    console.log("Hello from external JS.");

    alert("Welcome to my website!");

    let favColor = prompt("What is your favorite color?" );
    console.log( confirm(favColor + " is my favorite color too!"));
*/


// 1st You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
/*
let pricePerDay = 3;

let littleMermaid = Number(prompt("How many days would you like to rent The Little Mermaid?"));
    let xl = littleMermaid * pricePerDay;
let brotherBear = Number(prompt("How many days would you like to rent Brother Bear?"));
    let xb = brotherBear * pricePerDay;
let hercules = Number(prompt("How many days would you like to rent Hercules?"));
    let xh = hercules * pricePerDay;

    confirm("Total price for movies are: $" + (xl + xb + xh));
*/


// 2nd Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
/*
let googleRate = 400;
let amazonRate = 380;
let metaRate = 350;

let hoursAmazon = Number(prompt("How many hours did you work for Amazon?"));
    let amazonPay = amazonRate * hoursAmazon;
let hoursGoogle = Number(prompt("How many hours did you work for Google?"));
    let googlePay = googleRate * hoursGoogle;
let hoursMeta = Number(prompt("How many hours did you work for Facebook?"));
    let metaPay = metaRate * hoursMeta;

confirm("You made $" + (amazonPay + googlePay + metaPay));
*/
// 3rd A student can be enrolled in a class only if the class is not full and the class
// schedule does not conflict with her current schedule.
/*
let classNotFull = true;
let classConflict = true;
let studentEnrolled = classNotFull && classConflict;

let classAt8am = false;
let classSize = 100;
let currentClassSize = 98;
let canRegister = (currentClassSize +1 <= classSize) && !classAt8am;
*/

// 4th A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
let hasPremium = true;
let cartSize = 6;
let offerValid = true;

let canHaveDiscount = offerValid && (cartSize > 2 || hasPremium);

prompt(canHaveDiscount + "Congratulations, here is your discount!");


// premiumMember = true;
// offerValid = true;
// moreThanTwo => 2 && offerValid == true;
