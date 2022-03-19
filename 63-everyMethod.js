// Every Method 

// The arr.every() method checks whether all the elements of the array satisfy 
// the given condition or not that is provided by a method passed to it as the argument. 

const numbers = [2,4,6,8,10];
const numbers2 = [1,3,5,4,6,2];

let ans = numbers.every((number)=>number%2===0);
console.log(ans);

console.log(numbers.every((number2)=>number2%2!==0));

// real example
// check every product price is less than 3k or not
const products = [
    {
        productId : "p01",
        productName : "product1",
        price : 2650
    },
    {
        productId : "p02",
        productName : "product2",
        price : 1599
    },
    {
        productId : "p03",
        productName : "product3",
        price : 999
    },
    {
        productId : "p04",
        productName : "product4",
        price : 2099
    }
]; 

let result = products.every((obj)=>{
    return obj.price<=3000;
});

console.log(result);
