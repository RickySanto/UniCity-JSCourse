// Declare the var names 
var people = [
    {
        name:"Ruth",
        age: 35
    },
    {
        name:"Peter",
        age: 100
    }, 
    {
        name:"John",
        age: 75
    }
];


// Fillin the logic for our function
function calculateYoungerAndElder(people) {
    // Initialise the two variables that will hold the older and younger
    var older = people[0];
    var younger = people[0];

    // Initialise an empty array that will hold the older and younger values
    var output = [];

    for (var i=0; i<people.length; i++) {
           console.log(people[i]);
           
           if (older.age <= people[i].age) {
                console.log(older);
                older = people[i]
           } 
           
           if (younger.age >= people[i].age) {
               younger = people[i]
           }
    }

    //Print in console the older and younger
    console.log(older);
    console.log(younger);

    // A function can return only a single value if you had to output the two values

    // Add the older value first on the output array
    output.push(older);
    output.push(younger);
    
    return output;
}

//This call will output the result on our console.
var output = calculateYoungerAndElder(people);

console.log(output);
