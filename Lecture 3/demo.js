

var g = "hello";

if (true) {
    (function () {
        var g = 1;
        console.log(g);
    }());
    console.log(g); 
}
console.log(g);

function myFunction(){
    return this;
}

var result = myFunction();

console.log(result);