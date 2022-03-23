// short Syntax

// const user1 = {
//     firstName : "Priyansh",
//     age : 18,
//     gender : "Male",
//     about : () =>{
//         console.log(this);
//         console.log("Name is ",this.firstName," and Age is ",this.age);
//     }
// };

// we can write function this type also -
const user1 = {
    firstName: "Priyansh",
    age: 18,
    about() {
        console.log(this.firstName, this.age);
    }
}
user1.about();