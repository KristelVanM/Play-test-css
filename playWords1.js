const amount= 20;
document.write(`hello ${amount / 2}`);
//of:
//document.write("hello" + amount / 2);

var name = "kristel";
//alert(name);
//var yourName = prompt("what is your name?");
console.log(name.length); //geen spaties


//OEFENING IN LENGHT-METHODE
//stap 1:
//prompt("compose your tweet");
// //stap 2:
// //maak er een var van:
// var tweet = prompt("compose your tweet");
// //voeg dit toe:
// var letters = tweet.length;
// //twee opties, met naam of value:
// alert("you used " + tweet.length + " letters, you have " + (140 - letters) + " letters left.");
// windows: contrl + forward slash om comments op mutiple lijnen te maken

// //OEFENING IN SLICE
// console.log(name.slice(0,1));
// // geeft letter 'k' in console
// //"up to but not including '1' "
// //tweet-oefening onder 140 char blijven:
// var tweet2 = prompt("compose your 2nd tweet");
// var tweetUnder140 = tweet2.slice(0,140);  //truc: 140 min 0 is 140 char
// alert(tweetUnder140); //snijdt lange ingevoerde tekst af
// //dezelfde oef in één lijn: alert(prompt("compose your second tweet").slice(0,140));

//OEFENING IN SLICE EN UPPERCASE-LOWERCASE
var nameExerc = prompt("What is your name?");
var newName = nameExerc.slice(0,1).toUpperCase() + nameExerc.slice(1,nameExerc.length).toLowerCase();
alert("Hello " + newName + "!");




