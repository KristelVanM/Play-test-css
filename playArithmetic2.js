// PLAY WITH ARITHMETIC

// // html shows form elements to a user, then JS reads those into the program variables
// //for example the prompt function:
// age = prompt("Wat is your age?");
// console.log(age);

// ASSIGNMENT OPERATOR =
// first, calculate the value on the RIGHT side source value),
// then put it in the var on the LEFT (target variable)

// //dog age
// var dogAge = prompt("How old is your dog?");
// var humanAge = ((dogAge - 2) * 4) + 21;
// alert ("your dog is " + humanAge + " years old in human years.");

// //INCREMENT CONFUSION/
// // Postfix 
// var x = 3;
// y = x++; // y = 3, x = 4

// // Prefix
// var a = 2;
// b = ++a; // a = 3, b = 3

// //STANFORD KAREL THE ROBOT
// // EXERCISE IN FUNCTIONS (1)
// function getMilk()

// // EXERCISE
// //FUNCTIONS (2) WITH INPUT (parameters & arguments)
// // VOORBEELD 1
// function getMilk(bottles) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy" + bottles + "bottles of milk")
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }
//   // get 2 bottles = 
// getMilk(2);
//  // ==> "buy 2 bottles of milk"

// VOORBEELD 2
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("buy" + numberOfBottles + "bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5;
}

// // get bottles for 5 dollars = 
// getMilk(5);
// // ==> "buy 3 bottles of milk"

// // FUNCTIONS (3) WITH OUTPUT = RETURN
// function getMilk(money) {
//   //at the bottom of previous, add this:
//   return money % 1.5;
// }
var change;
change = getMilk(4); //lock the value of change into a variable + calling the function
console.log(change); // in de console verschijnt "1" en alle andere console.log commando's ...

// vorige oefening vereenvoudigd
// functie uit lijst commando's halen en aparte functie maken
