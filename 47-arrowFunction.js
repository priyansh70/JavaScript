// Arrow Function is important in Java Script
// functionDeclaration -> functionExpression -> arrowFunction


// Convert this function into the Arrow Function 

// const sumTwoNumber = function(number1,number2)
// {
//     return (number1+number2);
// }

const sumTwoNumber = (number1,number2)  =>{
    return number1+number2;    
}

console.log("Sum of two number is : "+sumTwoNumber(4,12));

// Convert this function into the Arrow Function 

// function isEven(number)
// {
//     if(number % 2 == 0)
//         return true;
//     return false;
// }


// Arrow Function 

//we can write this function in a line - 
const isEven = number => number%2==0;
// const isEven = (number) =>{
//     if(number%2==0)
//     {
//         return +true; //1
//     }
//     return +false; //0
// }

console.log("10 is even : "+isEven(10));


// Convert this function into the Arrow Function 
// function firstCharacter(str) {
//     return str[0];
// }


const firstCharacter = str => str[0];
// const firstCharacter = str => {
//     return str[0];
// }

myName = "Priyansh";
console.log("My name first Character is : ",firstCharacter(myName));