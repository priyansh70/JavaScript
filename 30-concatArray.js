// Concat Array 
// Clone Array by Concat method 

let array1 = [1,2,3,4,5];
let array2 = [].concat(array1);

console.log(array1 === array2);
console.log("Array1 :- "+array1);
console.log("Array2 :- "+array2);

array1.push(10);
console.log("After push in Array 1 ->");
console.log("Array1 :- "+array1);
console.log("Array2 :- "+array2);

// Slice Operator 
// clone Array by Slice Operator 
let array3 = [...array1];
console.log("Array1 :- "+array1);
console.log("Array3 :- "+array3);
console.log(array1 === array3);

array1.push(12);
console.log("After push in Array 1 ->");
console.log("Array1 :- "+array1);
console.log("Array3 :- "+array3);

// use slice and concate together 
// let array4 = array1.slice(0).concat(["Items","More Items"]);
let array4 = [...array1,"Item","More Items"];
console.log(array4);