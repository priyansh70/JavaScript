// Nested If Else 
//  understand by Game 

// suppose winning Number - 20
// 7 - right 
// 5 too low 
// 25 - too high 

let winningNumber = 7;
let userGuess = +prompt("Guess a Number");
console.log("Guess Number in One Attempt\nNumber between 0 to 10")
if(userGuess === winningNumber)
{
    console.log("Your Guess is Right");
}
else 
{
    if(userGuess > winningNumber)
    {
        console.log("too High");
    }
    else
    {
        console.log("too Low");
    }
}