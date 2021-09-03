//                 //ex-4
// //ex 01
// console.log("Sameer");
// //ex 02
// var readlineSync = require('readline-sync');
// var myName = readlineSync.question("I require thy name! ");
// console.log("Hello! " +myName);
// //ex 03
// console.log("WELCOME "+myName+"!");

// // ----- end ex04 

//ex-05,06
var score= 0;
var readlineSync = require('readline-sync');
var guess = parseInt(readlineSync.question("Guess my age "));
var myAge = 20;
if(guess===myAge)
{
  score++;
  console.log("Correct!");
  console.log("Your score = "+score);
}
else
{
  score--;
  console.log("Wrong...");
  console.log("Your score = "+score);
  
}