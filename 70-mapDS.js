// Maps :- 
// Map is a collection of elements where each element is stored as a Key, value pair. 
// Map object can hold both objects and primitive values as either key or value.
// When we iterate over the map object it returns the key, value pair in the same order as inserted.


// map is an Iterable 

// Store data in ordered fashion 

// store key value pair (like Objects)
// Duplicate keys are not allowed likes objects

// Difference between maps and objects
// 1 - objects can only have string or symbol
//     In map you can use anything as key (eg:array,string,symbol)

// object Literal
// key --> string
// key --> symbol



// const person={
//     firstName : "Priyansh",
//     lastName : "Patel",
//     age : 19,
//     1 : "One"
// };
// //iterate object 
// console.log(person['firstName']); 
// // our all key is in string prove ->
// for(let key in person)
// {
//     console.log(typeof key); //string
// }

// map stores key value pair 
// const person = new Map();
// // put value in MAP

// // Syntax :- mapName.set("Key","Value")
// person.set("firstName" , "Priyansh");
// person.set("Age" , 19);
// person.set( 1 , "one");
// person.set([16,4,2003],"myBirthDate");
// console.log(person);

// // How can we access any key of Object?
// console.log(person.keys()) //access all the key
// console.log(person.get('firstName')) //find any key from obj

// // now see type of our keys
// for(let key of person.keys())
// {
//     console.log(key," = ",typeof key);
// }

// for(let [key,value] of person)
// {
//     console.log(Array.isArray(key));
//     console.log(key,value);
// }

// Direct set values array under arrays
const user = new Map([["firstName","Priyansh"],["lastName","Patel"]])
console.log(user);

// Real Life Example 

const person1 = {
    id : 1,
    firstName : "Priyansh"
};

const person2 = {
    id : 2,
    firstName : "Harshit"
};

console.log(person1);

const extraInfo = new Map()
extraInfo.set(person1,{age:10,gender:"Male"});
extraInfo.set(person2,{age:8,gender:"Male"});

// person 1
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1));
console.log(extraInfo.get(person1).age);

// person2 
console.log(extraInfo.get(person2));
console.log(extraInfo.get(person2).age);