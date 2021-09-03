
var readlineSync = require('readline-sync');
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
    
    console.log("Oops!Better luck next time!");
  }
}

for(var i=0;i<ans.length;i++)
{
  var UserAns = readlineSync.question(QuesList[i]);
  funQuiz(UserAns,ans[i]);
}
console.log("Your Final Score is "+Score);