
//objects
var person = new Object();

person["firstname"] = "Aadhil";
person["lastname"] = "Imam";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

//object inside the object 

person.address = new Object();
person.address.street= "Aluthgama";
person.address.city ="colombo";
person.address.province = "western";

console.log(person.address);
console.log(person.address.city);

