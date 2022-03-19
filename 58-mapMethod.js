// Map Method
// The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array.
const numbers = [2,3,6,5,4,1,2,8];
// const square = function(number)
// {
//     return number * number;
// }
const squareArray = numbers.map(function(number,index){
    return `index : ${index} = ${number * number}`;
});

console.log(squareArray)

// Real Example of Map Method

const users = [
    {userId : "u01", name : "Priyansh",gender : "Male"},
    {userId : "u02", name : "Khushi",gender : "Female"},
    {userId : "u03", name : "Harshit",gender : "Male"}
];

const userNames = users.map((user) => {
    return user.name;
});
console.log(userNames);