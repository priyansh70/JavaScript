// object inside array
// Very usefull in real World Application

const users = [
    {userId : "u01", name : "Priyansh",gender : "Male"},
    {userId : "u02", name : "Khushi",gender : "Female"},
    {userId : "u03", name : "Harshit",gender : "Male"}
];
console.log(users);

for(let user of users)
{
    console.log(user.name);
}