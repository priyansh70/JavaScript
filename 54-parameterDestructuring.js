// Parameter Destructuring

// It is mainly used in - Object and React 

const person = {
    firstName : "Priyansh",
    gender : "Male"
};
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName,gender,age})
{
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);