var arr = [
    1,
    false,
    {
        name : 'Aadhil',
        address : 'Sri Lanka'
    },
    function(name){
        var greeting = "Hello"
        console.log(greeting +" " + name);
    },
    "hello"
];

console.log(arr);
arr[3](arr[2].name);