var aadhil = {
    firstname :"aadhil",
    lastname :"imam",
    address : {
        street :"main street",
        city :"dhraga town",
    }
};

function greet(person){
    console.log( "Hi " + person.firstname);
}

greet(aadhil);

greet({firstname :' ahamed' , lastname:'mohamed'});

aadhil.address2 = {
    street : 'beruwela',
}