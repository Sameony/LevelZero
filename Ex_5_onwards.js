var readlineSync = require('readline-sync');
var guess = readlineSync.question("Guess my age ");
var myAge = 20;
if(guess===myAge)
{
  console.log("Correct!");
}
else
{
  console.log("Wrong...");
}