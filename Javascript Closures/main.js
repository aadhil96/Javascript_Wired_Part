function greet(whartosay){
    return function(name){
        console.log(whartosay + " " + name);
    }
}

var sayHi = greet("Hi");
sayHi("Aadhil");

//output : Hi Aadhil


function createAdding(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var adding5 = createAdding(5);
  var adding10 = createAdding(10);
  
  alert(adding5(2));  // 7
  alert(adding10(2)); // 12



