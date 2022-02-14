"use strict";

let car = {};
console.log(typeof car);

car.make = 'Ford';
console.log(car);

car.model = 'Mustang';
console.log(car);

// Assigning Properties to an object
let cohort = {
    name: 'Fortran',
    startDate: '01/31/2022',
    endDate: '07/31/2022'
}

// Accessing Properties
console.log(cohort.name);
console.log('The car model is: ' + car.model);

// Find Keys
console.log(Object.keys(car));
car.year = '1994';
console.log(Object.keys(car));
console.log(Object.keys(cohort));

// In Keyword
if(!('numOfWheels' in car)) {
    car.numOfWheels = 4;
}
console.log(car);

// Nested Values
let elixirCohort = {
    name: 'Elixir',
    startYear: '2021',
    students: ['Matt', 'John', 'DocRob', 'Casey']
}
console.log(elixirCohort.students);

elixirCohort.students = [
    {
        name: 'Ry',
        age: 27
    },
    {
        name: 'James',
        age: 35
    }
];
console.log(elixirCohort);

// Assigning Functionality(Behaviors) To an object

car.honk = function () {
    console.log("Honque Honque");
}
car.honk();

/*
car.printNumberOfWheels = function () {
    console.log(this.numOfWheels);
}
car.printNumberOfWheels();
 */

/* INSTRUCTOR EXAMPLE
elixirCohort.printAllStudentsNames = functions (){
    //console.log(this.students[0].name);
    this.students.forEach(function(T)){
        console.log(students.name);
    }
}

elixirCohort.printAllStudentsNames();

// Add to cohort object
cohort.students = cohortStudents;
console.log(cohort.students[0].grades);
console.log(cohort.students[0].gradeAverage());

cohort.getCohortAverage = function () {
    let sum = 0;
    this.students.forEach(function (student) {
        sum += student.gradeAverage();
    });
    return sum / this.students.length;
}
console.log(cohort.getCohortAverage());
*/