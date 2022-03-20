// Iterables 
// jispe hum for of loop laga skte hai 
// example :- string , array are iterable

// first of all we iterate string 
let firstName = "Priyansh";
for(let char of firstName)
{
    console.log(char);
}

// now iterate array 
const myArray = ["Item1","Item2","Item3"];
for(let item of myArray)
{
    console.log(item);
}

// now we try to iterate to object
// const users = {
//     "Name" : "Priyansh",
//     "Age" : 19
// }

// for (let data of users)
// {
//     console.log(data); //error
// }
//  object is not iterable 