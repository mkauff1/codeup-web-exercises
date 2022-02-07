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
        let moneyInAccount = 20.00;
        let costOfRideshare = 5.00;
        if (driversNearby && moneyInAccount >= costOfRideshare);
        console.log("You will be picked up shortly")
    }
    let age = 16;
    let isInsured = false;
    let hasCar = false;
    let canGetRideShare = false;

    let legalAge = 16;

    if(age >= legalAge && hasCar && isInsured){
        console.log("You can use your own vehicle");
    } else if(age >= legalAge && hasCar && !isInsured){
        console.log("You are of age and have a car, but it is not insured bub");
    } else if(age >= legalAge && !hasCar && isInsured){
        console.log("You are old enough but you do not have a car!");
    } else if(age < legalAge && hasCar && isInsured) {
        console.log("You are not old enough to drive, but cool car!");
    } else if(age < legalAge && !hasCar && !isInsured && canGetRideShare) {
        console.log("You should take an Uber");
    } else if(age < legalAge && !hasCar && !isInsured && !canGetRideShare) {
        console.log("You need to ask a friend for a ride");
    } else if(canGetRideShare) {
        canGetRideshare();
    } else {
        console.log("Nope");
    }
}
