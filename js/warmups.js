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
/*
var person = {
    names: ["Matt", "Jeff", "Ry"],
    dob: "08/01/1994",
    occupation: "Nurse"
}
console.log(person.names[1]);
// person.names.forEach((name)=> {
// })
/*
let person2 = Object.create(person);

person2["names"] = ["Ty", "Sutton"];
person2["occupation"] = ["Fab Father"];
person2.dob = "01.01.1992";
console.log(person2);
person2["dob"] = "01.02.1994";
console.log(person2);

 */
/*
let personContactInfo = {
    phoneNumber: "734-546-3242",
    streetAddress: "123 Abc ln.",
    state: "MI",
    postalCode: 48122,
    emailAddress: "Why@codeup.com"
}
console.log(personContactInfo.postalCode);


function listContactInfo (phoneNumber, streetAddress, city, state, postalCode, emailAddress ) {
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;

}

// person['personContactInfo'] = personContactInfo;
// defines a person object
function Person(names, occupation, dob, contactInfo){...}
//    this.names = names;
//    this.occupation = occupation;
//    this.dob = dob;
//    this.personContactInfo = contactInfo;
// }
// makes a new person object instance
let person2 = new Person(["Ty", "Sutton"],"Cat", "09.01.10");
    new ContactInfo(

    )
*/
// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}
// Defines a person object
function Person(names, occupation, dob, contactInfo) {
    this.names = names;
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}
// makes a new person object instance (by invoking the constructor)
let person2 = new Person(
    ["Casey", "J", "Edwards"],
    "Cat Herder / Firefighter",
    "11.30.1989",
    new ContactInfo(
        '123.456.7890',
        '123 Anywhere Ln',
        'Beverly Hills',
        'CA',
        '90210',
        'nope@no-no-no.no'));

console.log(person2.contactInfo.emailAddress);