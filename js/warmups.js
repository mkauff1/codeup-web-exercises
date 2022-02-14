"use strict";

// Write a function called findAverage that takes in an array of integers representing grades and returns the average.
// Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)
/*
findAverage([95, 74, 86, 100])

function findAverage([a, b, c, d]) {
    let theAverage = array => array.reduce((a, b) => a + b, 0) / array.length;
    console.log(theAverage([a,b,c,d]));
}
 */

/*
let grades = [95, 74, 86, 100];
let total = 0;
for(let i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;
console.log(avg);

 */

/* // Instructor solution
function findAverage(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum += grade;
    })
    return sum / grades.length;
}
console.log(findAverage([95, 74, 86, 100]));

 */