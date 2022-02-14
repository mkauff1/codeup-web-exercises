"use strict";

var dogNames = ["Fido", "Spot", "Fifi", "Lola", "Fido"];

// push
dogNames.push("Ralph");
console.log(dogNames);

// unshift
dogNames.unshift("Suzie");
console.log(dogNames);

// pop
var poppedName = dogNames.pop();
console.log("Removed " + poppedName);
console.log(dogNames);

// shift
var shiftedName = dogNames.shift();
console.log("Removed " + shiftedName);
console.log(dogNames);

// build an array with the following words IN ORDER, 1 word at a time

var fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.unshift("cherry");
fruits.unshift("lemon");
fruits.push("mango");
fruits.unshift("pear");

// ['pear', 'lemon', 'cherry', 'apple', 'banana', 'mango'
console.log(fruits);

// indexOf
// console.log(dogNames.indexOf('XXX', 1));

// lastIndexOf
// console.log(dogNames.lastIndexOf("Fido", 3));

// slice
// console.log(dogNames.slice(1, 3));

// reverse
console.log(dogNames.reverse());

dogNames.reverse().forEach(function(dogName,index){
    console.log(dogName);
});

// show backwards iteration in forEach


// sort

// Split and Join

let userInfo = "ry.sutton, 08/11/1994, rysutton, ford, mustang";
//let userInfoArr = userInfo.split(',');
let userInfoArr = userInfo.split('');
console.log(userInfoArr);

let userInfoAgain = userInfoArr.join('');
console.log(userInfoAgain);

let dt = new Date().toISOString();
console.log(dt.split('T')[0]);