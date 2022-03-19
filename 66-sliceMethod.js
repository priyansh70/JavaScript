// Slice Method 
// start , delete , insert 

// The arr.splice() method is an inbuilt method in JavaScript which is used to modify the contents of an array by removing the existing elements and/or by adding new elements.

const arr = [1,5,9,7,3,6,4,8,2];
console.log(arr);

// delete 
// Delete element from index 2 and delet 4 elements 
const deleted = arr.splice(2,4);
console.log(arr);
console.log("Deleted : "+deleted)

// insert 
// insert from 1th index delete 0 element and insert 2,3 and 4 element from 1th index
arr.splice(1,0,2,3,4);
console.log(arr);

// insert and delete together

arr.splice(2,4,6,9); //1 2 6 9  8 2
console.log(arr);