// Sort Method 

// The arr.sort() method is used to sort the array in place in a given order according to the compare() function. 
// If the method is omitted then the array is sorted in ascending order.
/*
arr.sort(compareFunction)
Parameters: This method accept a single parameter as mentioned above and described below:

compareFunction: This parameters is used to sort the elements according to different attributes and in the different order.
compareFunction(a,b) < 0
Then a comes before b in the answer.

compareFunction(a,b) > 0
Then b comes before a in the answer.

compareFunction(a,b) = 0
Then the order of a and b remains unchanged.
*/
// array - 10 2 32 45 12 30
// sort Array - 2 10 12 30 32 45

console.log("String Array before Sorting");
const strArray = ["Priyansh","Aakash","khushi","Harshit"];
console.log(strArray);

console.log("String Array After Sorting");
strArray.sort();
console.log(strArray);

// but numbers do not work this type
//our number element behave like string so we see unexepted output 

// const numbers = [10,2,32,45,12,30];
// numbers.sort();
// console.log(numbers);

const numbers = [10,2,32,45,12,30];
console.log(numbers);
numbers.sort((a,b)=>
{
    return a-b;
});
console.log(numbers);

// Real Life Example 
// in flipkart we filter low to high and high to low

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
console.log("All Products by Defualt");
console.log(products);

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})

console.log("Product sort by Low to High");
console.log(lowToHigh);

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
});

console.log("Product sort by High to Low");
console.log(highToLow);
