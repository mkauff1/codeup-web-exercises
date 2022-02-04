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