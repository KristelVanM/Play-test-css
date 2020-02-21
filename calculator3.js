// // BMI calculator
// function bmiCalculator(weight, height){
// return Math.floor(weight / Math.pow(height, 2));
// }

// var bmi = bmiCalculator(65, 1.8); 
// console.log(Math.floor(bmi));

// //of math.round()


// // logischer uitgeschreven:
// function bmiCalculator (weight, height){
//     var bmi = weight / Math.pow(height, 2);
//     var roundedBmi = Math.floor(bmi)
//     return (roundedBmi);
// }
// var bmi = bmiCalculator(65, 1.8); 
// console.log(bmi);



// // Love calculator
// //preparation:
// // // var n = Math.random();
// // // console.log(n);
// //RANDOM NUMBERS AND SCALING
// //scale random numbers to desired range
// // be like a dice, add this line:
// var n = Math.random();
// n = n * 6; // will never reach 6
// n = Math.floor(n) + 1; // random numbers between 0 and 5, unless you add 'plus 1'
// console.log(n);
// // = korter geschreven:
// var n = Math.random();
// Math.floor(n * 6) + 1;
// // LOVE CALCULATOR EXERCISE/
// prompt("Wat are your names?"); // moet niet bewaard worden, dus geen var (ervoor) zetten
// var loveCalc = Math.random() * 100 + 1;
// loveCalc = Math.floor(loveCalc);
// alert("your love score is " + loveCalc + "%");


// IF AND ELSE : CONTROL STATEMENTS/ CONTROL FLOW

// BMI ADVANCED EXERCISE

// var test1 = prompt("what is your weight");
// var test2 = prompt("what is your height in metre");

// function bmiCalculator(weight, height){
//     var bmi = weight / Math.pow(height, 2);
//     var roundedBmi = Math.floor(bmi);
//     return roundedBmi;
//     }
// console.log(bmiCalculator(test1,test2));


// BMI met if/els conditional flow:

function bmiCalculator(weight, height){
     return Math.floor(weight / Math.pow(height, 2));
     }
     var bmi = bmiCalculator(100, 1.8); 
     console.log(Math.floor(bmi));
    if (bmi > 25){
        alert("Je bmi is " + bmi + ", dus je bent obees");
    } else {
        alert("Je bmi is " + bmi + ", dus je hebt een normaal gewicht");
    }