// Filter method 

// The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. 

const numArray = [1,6,5,3,4];

// i want to filter all odd and even numbers

// const isEven = function(number)
// {
//     if(number % 2 === 0)
//         return true;
//     return false;
// }
const evenNumbers = numArray.filter(function(number)
{
    return (number%2===0)
});
console.log(evenNumbers)