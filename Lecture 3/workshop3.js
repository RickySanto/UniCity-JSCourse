var fullname = "John";

var obj = {
    fullname: "Jane",
    prop: {
    fullname: "Tom",
    getName: function () {
        return this.fullname;
        }
    }
};


var test = obj.prop.getName.bind(obj.prop);
var test2 = obj.prop.getName.bind(obj);



// What does the console display?
console.log(test());
console.log(test2());


//Question 3

var calc = new function(){
    this.total = 0;
    this.add = function(number){this.total += number; return this;}
    this.subtract = function(number){this.total -= number; return this;}
    this.increment = function(){this.total++; return this;}
    this.decrement = function(){this.total--; return this;}
    this.getTotal = function(){return this.total;}
}


// Chain some methods
result1 = calc.increment().add(10).getTotal();
console.log(result1); // 11
// reset total
calc.total = 0;
// Chain some methods
result2 = calc.add(7).subtract(3).getTotal();
console.log(result2); // 4
// reset total
calc.total = 0;
// Chain some methods
result3 = calc.increment().decrement().getTotal();
console.log(result3); // 0
