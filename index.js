//                 //ex-4
// //ex 01
// console.log("Sameer");
// //ex 02
var readlineSync = require('readline-sync');
// var myName = readlineSync.question("I require thy name! ");
// console.log("Hello! " +myName);
// //ex 03
// console.log("WELCOME "+myName+"!");

// // ----- end ex04 



// //ex-05,06
// var score= 0;
// var readlineSync = require('readline-sync');
// var guess = parseInt(readlineSync.question("Guess my age "));
// var myAge = 20;
// if(guess===myAge)
// {
//   score++;
//   console.log("Correct!");
//   console.log("Your score = "+score);
// }
// else
// {
//   score--;
//   console.log("Wrong...");
//   console.log("Your score = "+score);
  
// }



// //ex-07

// function add(num1, num2)
// {
//   return num1+num2;
// }
// console.log(add(2,4));

// //ex 08
// Result=0;
// function quiz(Ques,Ans)
// {
//   if(Ques===Ans)
//   {
//     Result++;
//     console.log("You are correct!");
//     console.log("Your score is now: "+Result);
//   }
//   else
//   {
//     Result--;
//     console.log("You are Wrong!");
//     console.log("Your score is now: "+Result);
//   }
// }

// var Ques = readlineSync.question("Guess my mood! ");
// var Ans = "sad";
// (quiz(Ques,Ans));

// var Ques = readlineSync.question("Where do i live? ");
// var Ans  = "delhi";
// quiz(Ques,Ans);

// //Ex - 09
// for(var i = 0;i<5;i++)
//   console.log("Sam "+i);

// //Star pattern
// for(var i=1;i<=5;i++)
// {
//   for(var j=1;j<=i;j++)
//     process.stdout.write("*");
//   console.log();
// }

// //ex-10
 var Grocery = ["Potato","Tomato","Chilly","Brinjal","Eggs"];
// console.log(Grocery[0]);
// process.stdout.write(Grocery[2]+"\n");
// console.log(Grocery[4]);

// //ex-11
// for(var i=0;i<Grocery.length;i++)
//   console.log(Grocery[i]);

// //ex-12
// var Superhero = {
//   Name : "Batman",
//   Color : "Black"
// }
// var otherHero = {
//   Name : "Superman",
//   Color : "Blue"
// }

// console.log("His name is "+Superhero.Name+" and his cos color is "+Superhero.Color);
// console.log("His name is "+otherHero.Name+" and his cos color is "+otherHero.Color);


//Final Questions

var Score = 0;
QuesList = [
  "Who am i? ","how old am i? ","Where do i live? ","do i truly live? ", "Complete: 2+2 is 4 minus 1 is 3, ____ ____? "
]
var ans = ["Sameer","20","Delhi","Yes","Quick Maths"];

function funQuiz(UserAns, Ans)
{
  if(UserAns.toUpperCase()===Ans.toUpperCase())
  {
    Score++;
    console.log("Correct!!!");
  }
  else
  {
    Score--;
    console.log("Oops!Better luck next time!");
  }
}

for(var i=0;i<ans.length;i++)
{
  var UserAns = readlineSync.question(QuesList[i]);
  funQuiz(UserAns,ans[i]);
}
console.log("Your Final Score is "+Score);