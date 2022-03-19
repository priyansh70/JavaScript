// The arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function 
// for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

// for every detail :-https://www.javascripttutorial.net/javascript-array-reduce/

const numbers = [6,8,5,4,3];

let sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
console.log(sum); 

// accumulator , currentValue , return
//   6               8            14
//   14              5            19
//   19              4            23
//   23              3            26

// Real Life Example 
const userCart = [
    {productId : 1,productName : "Mobile",price : 12000},
    {productId : 2,productName : "laptop",price : 22000},
    {productId : 1,productName : "fan",price : 5000},
];

const totalAmount = userCart.reduce((totalPrice,currentProduct) =>{
    return totalPrice + currentProduct.price;
},0)
console.log(totalAmount);

// totalPrice   currentValue   return
//    0            {}          12000
//   12000        22000        34000
//   34000        5000         39000
