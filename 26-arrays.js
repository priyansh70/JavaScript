
// Array is non primitive datatype
// Array is ordered Collection Item 
// Array is reference Type data type

let fruits = ["Apple","Mango","Grapes"];
console.log(fruits);
console.log(fruits[0]);

fruits[2] = "Banana";
console.log(fruits);

let mixed = [1,2,3,4.56,7.8,null,"Priyansh"];
console.log(mixed);

console.log("The size of Array Mixed is : ",mixed.length)
console.log(`type of fruit is ${typeof fruits}`); //object

// check this object is array or not 
console.log(Array.isArray(fruits)); 


let obj = {}; //object