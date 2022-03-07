"use strict";

//get the thing
let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
console.log(navContent.children);

// create an element
let nameElement = document.createElement("p");

// console.log(nameElement);
// console.log(getGitHubInfo().name);

// get the data and set it to the text of the new element
nameElement.innerText = getGitHubInfo().name;
nameElement.style["color"] = "white";
console.log(nameElement);

//navContent[1] = nameElement;

console.log(navContent.children);

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar

/*
let listItems = document.getElementsByTagName("li");
let newLi = document.createElement("li");
newLi.classList.add('col-3', 'mx-0');
newLi.prependChild(nameElement);
let parent = listItems[1].parentElement;
let theFirstChild = parent.firstChild;

parent.insertBefore(nameElement, theFirstChild);
*/

/*
let ul = document.querySelector(".top-ul");
let newLi = document.createElement("li");
newLi.classList.add("col-3","mx-0");
newLi.appendChild(nameElement);
ul.prepend(newLi);
*/

// navContent.insertBefore(nameElement, navContent.children[1]); Instructor solution with extra

let contentDiv = document.querySelector('div.container-fluid.container-md.row.mx-md-auto.mt-4');
// console.log(contentDiv);
let details = document.createElement('p');
details.innerText = getGitHubInfo().details;

contentDiv.replaceChildren(details);



// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
function getGitHubInfo(){
    return {
        name: "vegetasrevenge",
        details: "I do code real GUD"
    };
}