//1- undefined
let firstName;
console.log(typeof firstName); //undefined

firstName = "Priyansh";
console.log(`Value is ${firstName} and its type is ${typeof firstName}`);

// const pi;
// console.log(typeof pi); //error - constant can not undefined

// 2- Null
let myVariable  = null;
console.log(myVariable);
console.log(typeof(myVariable)); //Object is a bug real output is null 

myVariable = "This is a string";
console.log(myVariable);
console.log(typeof(myVariable));

// 3 - BigInt 
let myNumber = BigInt(123654654754657546546546454);
console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER); to see maximum value of number can be stored