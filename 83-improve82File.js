// Now i want to some new methods but if we create 
// thousand of new methods then we have to write in both
// userMethod and createUser also

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// const obj2 = {
//     key3 : "value3",
// }
// // !!! Important !!!
// // key3 is present in obj2
// console.log(obj2.key3); //value3
// // key1 is not present in obj2 
// console.log(obj2.key1);//undefined
// // it is print undefined because not present
// // but i wants to print key1 so our JS check 
// // key 1 in obj1 and then print obj1's key1's value in our obj2

// There are is way to create empty object
const obj2 = Object.create(obj1);
// console.log(obj2); //empty object

obj2.key3 = "value3";
console.log(obj2.key3); // print value3
 
// key1 is not present in the obj2 but it is print a value of key1 of obj1 by __proto__
console.log(obj2.key1); 

// now what is __proto__ or [[protoype]]
// __proto__ is a way to inherit properties from an object in JavaScript.
console.log(obj2);
console.log(obj2.__proto__); // this print obj1 because obj2 proto is obj1