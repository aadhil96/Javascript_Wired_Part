function buildFunctions(){
    var arr = [];

    for (var i =0 ; i <3 ; i++){
        arr.push(function(){
            console.log(i);
        });
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

//output 3 3 3
function buildFunctions2(){
    var arr = [];

    for (var i =0 ; i <3 ; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))
        );
    }
    return arr;
}

var fs2 = buildFunctions2();

fs2[0](); //0
fs2[1](); //1
fs2[2](); //2

