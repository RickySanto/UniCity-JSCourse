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
    // Initialise an empty array that will hold the older and younger values 

    var output = { 
        older: null,  
        younger: null 
    }; 

    output.younger = people[0].age;
    output.older = people[0].age;

    for (var i=0; i<people.length; i++) { 
        if (people[i].age < output.younger){
            output.younger = people[i].age;
        }
        if (people[i].age > output.older){
            output.older = people[i].age;
        }
           console.log(people[i]); 
    } 


    //Print in console the older and younger 
    console.log(output.younger); 
    console.log(output.older);  

    // A function can return only a single value if you had to output the two values 
    // set the output object 

    return output; 

} 

//This call will output the result on our console. 

var output = calculateYoungerAndElder(people); 
 

console.log(output); 

