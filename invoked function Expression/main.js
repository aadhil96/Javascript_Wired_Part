//using a function Expression
var greetFunc = function(name){
    console.log("hello " + name);
}

greetFunc("aadhil");

//using an Immediately Invoked function Expression

var greeting = function(name){
     return "Hello " + name;
}("aadhil");

console.log(greeting);

(function (name){
    var greeting = "Hello ";
    console.log(greeting + " " + name)
}("Ahamed"));