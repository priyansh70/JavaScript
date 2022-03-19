// Find Method 

// The arr.find() method in Javascript is used to get the value of the first element in the array that satisfies the provided condition. 
// It checks all the elements of the array and whichever first element satisfies the condition is going to print. 
// This function will not work function having the empty array elements, also does not change the original array

const myArray = ["Priyansh","Khushi","Harshit","Rahul"];

let ans = myArray.find((str)=>{
    return str.length === 6;
});
console.log(myArray);
console.log(ans);

// Real Life Example
const users = [
    {userId : 1, name : "Priyansh",gender : "Male"},
    {userId : 2, name : "Khushi",gender : "Female"},
    {userId : 3, name : "Harshit",gender : "Male"}
];

const myUser = users.find(function(user){
    return user.userId === 1;
});
console.log(myUser);
