
// 99 BOTTLES OF BEER EXERCIS

var numberBottles = 100;
function beer(){
    while (numberBottles >= 1){
        // say something
        console.log(numberBottles + "bottles of beer on the wall, " + numberBottles + " bottles of beer, take one down, pass it around,");
        numberBottles--;

    }
    
    console.log("no more bottles of beer. go to the store");
}
beer();



// FIBONACCI EXERCISE
var fib = [];

function fibonacciGenerator (n) {

// access value of last two indexes, and make sum, 
var last = fib[fib.length - 1];
var preLast = fib[fib.length - 2];
var newNumber = last + preLast;


//then push the result to existing array ==> fib.push(newNumber) or something
// do this n times, until something.lenght = n



    for (var i = 0 ; i<n; i++){
    //TODO 
    }
    
    //Return an array of fibonacci numbers.
    console.log (fib);
}

fibonacciGenerator (5); 

//😁

// ARRAY TEST
var test = [1, 2, 3, 4, 5];
function bla (){
console.log(test);
}
bla ();
// zag er eerst uit als "array(5)" en daarna als "(5) 1 2 3 4 5" ???
var last = test[test.length - 1];
console.log(last);
var preLast = test [test.length - 2];
console.log(preLast);