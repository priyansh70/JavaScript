// Function Expression 
// 1 -A function Expression is similar to a function declaration without the function name.

// 2 - Function expressions can be stored in a variable assignment.

//3 - Function expressions load and execute only when the program interpreter reaches the line of code.

//4 - The function in function declaration can be accessed only after the function definition.

// example Sum of Two Number

const sumTwoNumber = function(number1,number2)
{
    return (number1+number2);
}

console.log("Sum of two number is : "+sumTwoNumber(4,12));


// Convert it into the function Expression
// function findInArray(arr,key1,key2)
// {
//     for(let i of arr)
//     {
//         if(i==key1)
//         return i;
//     }
//     return -1;
// } 
const findInArray = function (arr,key1)
{
    for(let i of arr)
    {
        if(arr[i]==key1)
        return i;
    }
    return -1;
}
const myArray = [1,2,3,4,5,6];
const target1 = 4
console.log("Searching in Array "+target1+" at the index of : "+findInArray(myArray,target1));
//  for further details can access 45-functionDeclaration file all similar