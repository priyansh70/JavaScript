// Sets in Java Script

// A set is a collection of items which are unique i.e no element can be repeated. 
// Set in ES6 are ordered: elements of the set can be iterated in the insertion order. 
// Set can store any types of values whether primitive or objects.

// Sets (it is iterable)
// Store data
// Sets also have its own methods
// No index - based Access
// Order is not guaranted
// Unique items only (no duplicate allowed)

// create set 
// Syntax :- dataType setName = new Keyword Set([setElement]);


const number = new Set([1,4,4]);//{1,4} another 4 not print Only Unique no repeatation
console.log(number);

// Add new Element in Array 
number.add(10);
console.log(number);

const arr = ["Item1",2,"Item3"];
number.add(arr);  //we can add array in set
console.log(number); 

// for check any value in set or not
console.log(number.has(1)); //return true if present otherwise fasle //true

// Now  we iterate set 
for(let num of number)
{
    console.log(num);
}
// Question Remove Duplicate from array
const myArr = [2,4,5,4,2,3,6,4,2];
const mySet = new Set(myArr);
// for (let i of myArr)
// {
//     mySet.add(i);
// }
console.log(mySet)
console.log(mySet.length); //we cant't find length of set
// We find length of set - 
let length = 0;
for(let i of mySet)
{
    length++;
}
console.log("Length of mySet is : "+length);


















