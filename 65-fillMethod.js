// fill Method

// The arr.fill() method is used to fill the array with a given static value. 
// The value can be used to fill the entire array or it can be used to fill a part of the array. 

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

const numbers = [1,2,3,6,5,4];
numbers.fill(5,1,3); //value , startEndex , endEndex
console.log(numbers);