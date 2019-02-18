// function doStuff() {
//     if (!a) {
//     var a = 10;
//     }
//     console.log(a);
//     }
// doStuff();

// var students = 20;

// if (true) {
//     (function(){
//         students = 1;
//     })
// }

// console.log(students);


// function calculateVAT() {
//     var vat = 20;

//     function doSomething() {
//         var price = 20;
//     }

//     function doSomethingToo() {
//         var fee = 20;

//         if (typeof price !== "undefined") {
//             fee = 12;
//         }
//         console.log(fee);
//         console.log(vat);

//     }

//     doSomething();
//     doSomethingToo();
// }


var fullname = "John";
var obj = {
fullname: "Jane",
prop: {
fullname: "Tom",
getName: function () {
    console.log(this);
    return this.fullname;
}
}
};
// Copy the function
var test = obj.prop.getName;
// What does the console display?
console.log(obj.prop.getName());
console.log(test());
