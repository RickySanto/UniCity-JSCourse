// Declare the var names 
var names = ["Ruth", "John", "Peter"];

// Declare the var ages
var ages = [70, 21, 65];

// Fillin the logic for our function
function calculateYoungerAndElder(names, ages) {
    // Initialise the two variables that will hold the older and younger
    var older = ages[0];
    var younger = ages[0];

    // Initialise an empty array that will hold the older and younger values
    var output = [];

    for (var i=0; i<ages.length; i++) {
           console.log(names[i]);
           console.log(ages[i]);
           
           if (older <= ages[i]) {
                older = i;
           } 
           
           if (younger >= ages[i]) {
               younger = i
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
var output = calculateYoungerAndElder(names, ages);

console.log(output);
