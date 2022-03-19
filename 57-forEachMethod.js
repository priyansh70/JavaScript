// Important array methods 

// 1 - for each method
// The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

const fun = (value,index) =>
{
    console.log(`Index : ${index} : Value Multiply By Two ${value*2}`)
    // console.log("Index of this value",index);
}
const numbers = [4,8,9,5,6];

// we can use  forEach method instead of using this for loop
// for(let i = 0;i<numbers.length;i++)
// {
//     fun(numbers[i],i);
// }
numbers.forEach(fun)

// we can write in argument direct function
numbers.forEach(function(number,index){
    console.log(`Numbers[${index}] = ${number}`)
})


// Real Life Use of forEach

const users = [
    {userId : "u01", name : "Priyansh",gender : "Male"},
    {userId : "u02", name : "Khushi",gender : "Female"},
    {userId : "u03", name : "Harshit",gender : "Male"}
];
// access name of every user by for each
// Create arrow function
users.forEach((user)=>console.log(user.name))
// users.forEach(function(user)
// {
//     console.log(user.name)
// })