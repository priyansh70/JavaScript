// Difference between dot and bracket notation 
const key = "Email";
const person =
{
    Name : "Priyansh",
    Age : 19,
    Gender : "Male",
    Mobile : 7987444606,
    "Person Hobbies" : ["Cricket","Sleeping","Listening Music"]
};

console.log(person);

//1 - we can not access two word key pair by dot notation
// console.log(person.Person Hobbies);

console.log(person["Person Hobbies"]);

// we can not any variable as key name by dot notation but we can this by bracket[].

//2 - there are we have key = email but in object instead of email we see key because we use . notation
// person.key = "priyansh70890@gmail.com"; 

person[key] =  "priyansh70890@gmail.com";
console.log(person);
