var person ={
    firstname : "Aadhil",
    lastname : "Imam",
    getFullName : function(){
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

console.log(person);

var logName = function(lang1, lang2 ){
    console.log("Logged " + this.getFullName());
    console.log('Arugments : ' + lang1 +" " + lang2);
    console.log("------------")
}

var logPersonName = logName.bind(person);

logPersonName();

/*var logName = function(lang1, lang2 ){
    console.log("Logged " + this.getFullName());
}.bind(person);

logName(); */  
logPersonName("en");

logName.call(person , 'en' , 'es');
logName.apply(person,['en','es']);

(function(lang1, lang2 ){
    console.log("Logged " + this.getFullName());
    console.log('Arugments : ' + lang1 +" " + lang2);
    console.log("------------")
}).apply(person,['en','es']);

//function borrowing

var person2 = {
    firstname:"Mohamed",
    lastname:"Ahamed"
}

console.log(person.getFullName.apply(person2));

//function currying

 function multiply(a , b){
     return a*b;
 }   

 // 2 is perminants parameter
 var multipleByTwo = multiply.bind(this,2);

 console.log( multipleByTwo(4));
 
 








