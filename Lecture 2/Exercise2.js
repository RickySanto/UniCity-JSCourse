// Objects exercise 
// Create three objects 
// All Objects have the same properties 
// Age, Name 
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}
 

// Step 1: 

// First object is john 

 let john = new Person (23, "John");
 

// Step 2: 

// Second object is Ruth 

let ruth = new Person (35, "Ruth");

// Step 3: 

// Third object is Peter 
let peter = new Person (40, "Peter");
 
 

// Step 4: 

// Add those three objects to an array that you have to create 

const peopleArray = [];

peopleArray.push(john);
peopleArray.push(ruth);
peopleArray.push(peter);

// Step 5: 

// Using the filter method get the younger and older object  


newMaxArray = peopleArray;

for (let i = 0 ; i < peopleArray.length; i++) {
    newMaxArray = newMaxArray.filter( people => {
        return people.age >= peopleArray[i].age;
    }) 
};

newMinArray = peopleArray;

for (let i = 0 ; i < peopleArray.length; i++) {
    newMinArray = newMinArray.filter( people => {
        return people.age <= peopleArray[i].age;
    }) 
};
 
var Younger = newMinArray[0];
var Older = newMaxArray[0];


// Step 6: 

// print the values here 
console.log("The Older person is " + Older.name + " " + Older.age );
console.log("The Younger person is " + Younger.name + " " + Younger.age );