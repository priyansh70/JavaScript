// Array Destructuring 
const myArray = ["Value1","Value2","Value3","Value4","Value5","Value6","Value7","Value8"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1 + " " + myvar2);

let [myvar1,myvar2,myvar3,,myvar4,...newArray] = myArray;
console.log("Value of myvar1 : ",myvar1);
console.log("Value of myvar2 : ",myvar2);
console.log("Value of myvar3 : ",myvar3);
console.log("Value of myvar4 : ",myvar4);
console.log("New Array :- "+newArray);