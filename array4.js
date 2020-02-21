// //FIRST EX, CHECK IF NAME IS IN GUESTLIST
// var guest = ["Angela", "Jack", "Pam", "Lara"];
// var whatName = prompt("what is your name?");
// var check = guest.includes(whatName);
// if (check === true){
//     alert("welcome");
// } else {
//     alert("nothing");
// }

// // korter geschreven:
// var guest = ["Angela", "Jack", "Pam", "Lara"];
// var whatName = prompt("what is your name?");
// if (guest.includes(whatName)){
//     alert("welcome");
// } else {
//     alert("nothing");
// }

// // FIZZBUZZ WITH ARRAY
// //poging 1:
// var output = [];
// // we need numbers to add up, an da variable to keep track:
// var count = 1;

// function fizzBuzz() {
//     output.push(count);
//     count++;
//     if (count%3 === 0) {
//         console.log("fizz");
//     }else {

//     console.log(output);
//     }
// } 
// fizzBuzz(); // dit geeft 'fizz' op 2 en op 5 !!!!

// //poging 2: 
// var output = [];
// var count = 1;

// function fizzBuzz() {
//     output.push(count);
//     count++;
//     if (count%3 === 0) {
//         output.push("fizz");
//     }else {

//     console.log(output);
//     }
// } 
// fizzBuzz(); //zet 'fizz' op plaats drie, maar herhaalt daarna getal drie

// //poging 3: 
// var output = [];
// var count = 1;

// function fizzBuzz() {
//     if (count % 15 === 0){
//         output.push("Fizzbuzz");
//     } else if (count%3 === 0) {
//         output.push("fizz");
//     } else if (count%5 === 0) {
//         output.push("buzz");
//     } else {
//         output.push(count);
//     }
//     count++;
//     console.log(output);
// } 
// fizzBuzz();

// FIZZBUZZ WITH WHILE LOOP AND ARRAY/
var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100){

    if (count % 15 === 0){
        output.push("Fizzbuzz");
        } else if (count%3 === 0) {
        output.push("fizz");
        } else if (count%5 === 0) {
        output.push("buzz");
        } else {
        output.push(count);
    }
    count++;
}
    console.log(output);
} 
fizzBuzz();


