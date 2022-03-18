// Primitive Vs Reference Data Type 

// Primitive Data Type :- primitive data type store in memory by using stack 

let num1 = 10;
let num2 = num1;

console.log("Value of num1 is : ",num1); //10
console.log("Value of num2 is : ",num2); //10

num1++;

console.log("After Increment");
console.log("Value of num1 is : ",num1); //11
console.log("Value of num2 is : ",num2); //10

// Reference Data Type  : non primitive data type store in memory Heap
let arr1 = [1,2,3,4,5,6];
let arr2 = arr1 ;

console.log("Array 1 :- "+arr1);
console.log("Array 2 :- "+arr2);

arr1.push(10);

console.log("Pushed 10 in Array 1");
console.log("Array 1 :- "+arr1);
console.log("Array 2 :- "+arr2);