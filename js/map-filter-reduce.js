"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let multipleLanguages = users.filter(l => l.languages.length > 2);
console.log(multipleLanguages);

let usersWithThreeOrMoreLanguages = users.filter(function(user){
    return user.languages.length >= 3;
});
usersWithThreeOrMoreLanguages.forEach(function(user){
    console.log(user.languages);
})

let userEmail = users.map(m => m.email);
console.log(userEmail);

let totalYearsExp = users.reduce((years, user) => {
    return years + user.yearsOfExperience;
}, 0);
console.log(totalYearsExp);

let averageYearsExp = totalYearsExp / users.length;
console.log(averageYearsExp);

let longestEmail = users.reduce((longest, user) => {
    if(user.email.length > longest.length){
        longest = user.email;
    }
    return longest;
}, '');
console.log(longestEmail)

let instructorUserNameList = users.reduce((userNames, user) => {
    if(users.id < 3) {
        return userNames += user.name + ", ";
    } else {
        return userNames += user.name + ".";
    }
}, 'Your instructors are: ');

console.log(instructorUserNameList);

//Bonus

let languages = users.reduce((listOfLanguages, user) => {
    user.languages.forEach(function (lang){
        if(!listOfLanguages.includes(lang)){
            listOfLanguages.push(lang);
        }
    })
    return listOfLanguages;
}, []);

console.log(languages);