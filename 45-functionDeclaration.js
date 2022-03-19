// // function Declaration 

//1- A function declaration also known as a function statement declares a function with a function keyword. The function declaration must have a function name.

//2- Function declaration does not require a variable assignment as they are standalone constructs and they cannot be nested inside a functional block.

//3- These are executed before any other code.

//4- The function in function declaration can be accessed before and after the function definition.

// we declare function by "function" keyword
/*
Syntax :- 
function functionName()
{
    // function Body
}
*/
// Example 1

function singHappyBirthday()
{
    console.log("Happy Birthday to you ......");
};

console.log(singHappyBirthday());

// Example 2 - Sum of Two Number

// function sumOfTwoNumber(a,b){
//     return a+b;
// };

// let a = +prompt("Enter the value of a :");
// let b = +prompt("Enter the value of b :");
// sum = sumOfTwoNumber(a,b);
// console.log("Sum of "+a+" and "+b+" is : "+sum);

// Example 3 - check number is even or odd

// function isEven(number)
// {
//     if(number % 2 == 0)
//         return true;
//     return false;
// }

// let a = prompt("Enter the number : ");
// console.log(a+" is Even : "+isEven(a));

// Example 4 - return 1st element of string

function firstCharacter(str) {
    return str[0];
}

myName = "Priyansh";
console.log("My name first Character is : ",firstCharacter(myName));

// Example 5 - find in Array

function findInArray(arr,key1,key2)
{
    for(let i of arr)
    {
        if(arr[i]==key1)
        return i;
    }
    return -1;
}

const myArray = [1,2,3,4,5,6];
let target1 = 10; //case 1 :- this element doesn't exist in array
let target2 = 3; //case2 :- this element exist in array
console.log("Searching in Array "+target1+" at the index of : "+findInArray(myArray,target1));

console.log("Searching in Array "+target2+" at the index of : "+findInArray(myArray,target2));