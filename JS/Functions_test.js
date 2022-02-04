"use strict";

/*
1. Get Details
2. Run the calc
3. Get all details

Readable / Maintainable
Separation of concerns (S.o.C.)
    calc - //code
    &&
    name of movie - //code
    ** These do not belong together. They need to be in 2 separate functions.
 */

tryGetRideShare(15, false, getFundsAvailable());
//tryGetRideShare(costOfRide: 15, driverAvailable: false, totalFundsAvailable: 100);
//tryGetRideShare(costOfRide: 15, driverAvailable: true, prompt("How much money do you have?"); //Need HTML

function getFundsAvailable() {
    let moneyInAccount = parseFloat(prompt("How much is in your account?"));
    let creditsInAccount = parseFloat(prompt("How much is in the account?"));

    return moneyInAccount + creditsInAccount;
/*    let numOfRiders;
//    let isSplitPrice = confirm("Are you splitting this ride with someone else?");
    if(confirm("Are you splitting this ride with someoene else?")) {
        numOfRiders = prompt("How many riders do you have?");
    }
    console.log(numOfRiders);
*/
}
function tryGetRideShare(costOfRide, driverAvailable, totalFundsAvailable) {
//    let moneyInAccount = 100;
//    let creditsAvailable = 7.50;

// don't know how much the ride is going to be - DONE
// dont know if the driver is ready/nearby - Is not conclusive to having money - DONE
//money sources??
//how much money is available?

 // if (driverAvailable && (moneyInAccount >=  costOfRide || creditsAvailable > costOfRide)) {
    if (driverAvailable && totalFundsAvailable >= costOfRide) {
        console.log(" Your ride is on the way");
    } else {
        console.log("No drivers are available at this time...");
    }
}