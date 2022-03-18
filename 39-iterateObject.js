// There are mainly two way to Iterate object 
// 1 - for in Loop 
// 2 - Object.keys

const person =
{
    Name : "Priyansh",
    Age : 19,
    Gender : "Male",
    Mobile : 7987444606,
    "Person Hobbies" : ["Cricket","Sleeping","Listening Music"]
};

for(let key in person)
{
    // console.log(key +" : "+person[key]);
    console.log(`${key} : ${person[key]}/`);
}

console.log(Object.keys(person)); //access keys of person by object method
console.log(typeof (Object.keys(person))); //object
console.log(Array.isArray(Object.keys(person))); //Object  Method return keys in the form of array so we just check this is array or not (TRUE)

for(let key of Object.keys(person))
{
    console.log(key +" : " + person[key]);
}
