// Objects exercise 
// Create three objects 
// All Objects have the same properties 
// Age, Name 

var Person = function( age, name ){
    this.age = age;
    this.name = name;
}

//create the 3 People

const John = Object.create(Person, {name: {value: "John"}, age: {value: 23}});
const Ruth = Object.create(Person, {name: {value: "Ruth"}, age: {value: 35}});
const Peter = Object.create(Person, {name: {value: "Peter"}, age: {value: 40}});

// Add those three objects to an array that you have to create 
const peopleArray = [];

peopleArray.push(John);
peopleArray.push(Ruth);
peopleArray.push(Peter);

// Using the filter method get the younger and older object  

let newMaxArray = peopleArray;
let newMinArray = peopleArray;

//loop through peopleArray elements and at each cycle filter only Max values for newMaxArray 
//and only min value for newMinArray

for (let i = 0 ; i < peopleArray.length; i++) {
    newMaxArray = newMaxArray.filter( people => {
        return people.age >= peopleArray[i].age;
    })
    newMinArray = newMinArray.filter( people => {
        return people.age <= peopleArray[i].age;
    })  
};
 
// newMaxArray[0] contains the Older, newMinArray[0] contains the Younger

// print the values here 
console.log("The Older person is " + newMaxArray[0].name + " " + newMaxArray[0].age );
console.log("The Younger person is " + newMinArray[0].name + " " + newMinArray[0].age );