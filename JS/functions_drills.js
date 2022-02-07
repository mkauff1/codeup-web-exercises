"use strict";

isOdd(4);

function isOdd(number) {
    if (number === 0) return false;
    return (number & -number) === 1;
}

isEven(5);

function isEven(number) {
    if (number === 0) return true;
    return (number & -number) !== 1;
}

identity();

function identity(input){
    return input;
}

isFive();

function isFive(input){
    if (input === 5 || input === "five") return true;
}