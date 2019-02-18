// Step 1: Declare the var names Ruth, John, Peter
var names = ["Ruth", "John", "Peter"];
// Step 2: Declare the var ages 70, 21, 65
var ages = [70,21,65];

 
// Step 3 Fillin the logic for our function 

function calculateYoungerAndElder(names, ages) { 
    // Step 4: Initialise the two variables that will hold the older and younger variables 
    var older;
    var younger;

    // Step 5: Initialise an empty array called output that will hold the older and younger values 
    var output = [];
    
    // Step 6: Write a for loop that will iterate through ages array
    older = 0;
    younger = 999;  
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < younger){
            younger = ages[i];
        }
        if (ages[i] > older){
            older = ages[i];
        }
    }
    

    // Step 7: Print in console the older and younger index is it correct? 

    console.log(older); 

    console.log(younger); 

 

    // Step 8: A function can return only a single value if you had to output the two values 

 

    // Step 9: Add the older value first on the output array 

 

     

    return output; 

} 

 

// Step 10: This call will output the result on our console. 

var output = calculateYoungerAndElder(names, ages); 

 

// Step 11: Check the values 

console.log(output); 