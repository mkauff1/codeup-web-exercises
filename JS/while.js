"use strict";
/*
let num = 1;

while (num <= 66000) {
    console.log((num));
    num *= 2;
}
*/

/*
let i = 1
while (i < 17) {
    console.log(Math.pow(2, i));
    i++;
}
 */



var allCones = Math.floor(Math.random() * 50) + 50;
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(allCones);
    console.log(" There are " + allCones + " cones left to sell!");
    if (conesSold > allCones){
        console.log("I cannot sell you " + conesSold + " cones, because I only have " + allCones);
        continue;
    } else {
        console.log(conesSold + " cones sold");
        allCones -= conesSold;
    }

} while (allCones > 0);
console.log("Yay, there are no cones left!");

