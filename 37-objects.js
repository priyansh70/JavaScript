// Objects in Java Script
// 1 - Objects is reference type
// 2 - Arrays are good bur not sufficient 
// 3 - For real world Data
// 4 - Objects stores key value pairs
// 5 - Object don't have index

// Create Objects
// const person = {name : "Priyansh",age : 19};

const person= {
    name : "Priyansh",
    age : 19,
    Hobbies : ["Listining Music","Sleeping"]
};
console.log(person);
// console.log(person.Hobbies);

// How to add key pair to object 
// person.gender = "Male";
// console.log(person);

console.log(person.name);
// console.log(person["name"]); //we can write this type also

person["Gender"] = "Male";
console.log(person);