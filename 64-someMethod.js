// some Method 
// The arr.some() method checks whether at least one of 
// the elements of the array satisfies the condition checked by the argument method.

const numbers = [1,3,5,6,7,9,11];

let ans = numbers.some((number)=>
{
    return number%2===0;
});
console.log(ans);

// Real Life Example 

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
        price : 5999
    }
];

// Check any product above 5k
const result = products.some((user)=>{
    return user.price >=5000;
});
console.log(result);
