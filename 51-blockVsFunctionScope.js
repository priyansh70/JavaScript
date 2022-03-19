// Block Scope VS Function Scope

// let and const are block Scope
// var is function Scope

// BLOCK SCOPE :-
/*
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
*/

// FUNCTION SCOPE :- 
/*
JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:
*/

// block1 
{
    let firstName = "Priyansh";
    console.log(firstName);

    var lastName = "Patel";
}

// block2
{

    /* console.log(firstName) //error */

    console.log(lastName) //this is block1 variable but this is run because it is var type variable
}


if(true)
{
    let firstName = "Priyansh";
    var lastName = "Patel";
    console.log("My Name is : "+firstName,lastName)
}
/* console.log("My Name is : "+lastName)// lastName is a if condition variable but i am now outside of if block but i can access this value this is very wrong so we use let and const. */