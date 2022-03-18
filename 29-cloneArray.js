// Clone Array 

let array1 = ["item1","item2"];
let array2 = array1;
console.log(array1===array2);

// this is good for short element 
array2 = ["item1","item2"];
console.log(array1===array2);

array1.push("Item3");
console.log("Array1 :- "+array1)
console.log("Array2 :- "+array2)

// but we have 1000 element then we will not use this approach
let array3 = array1.slice(0);
console.log(array1===array2);

array1.push("Item4");
console.log("Array1 :- "+array1)
console.log("Array2 :- "+array2)
console.log("Array3 :- "+array3)
