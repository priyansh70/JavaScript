// Using of Prototype 

// const userMethod = {
//     about : function() {
//         console.log("Information about user")
//         console.log("Name :",this.firstName,this.lastName);
//         console.log("Age :",this.age);
//         console.log("Email :",this.email)
//         console.log("Adderss :",this.adderss)
//     }, 
//     is18 : function()
//     {
//         return this.age >= 18;
//     }
// }
function createUser(firstName,lastName,email,age,adderss)
{
        const user = Object.create(createUser.prototype); // {}
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.adderss = adderss;
        return user;
}
// we create our Object to stores userMethod but now we know that functions have prototype 
// so we will add this object in function properties by prototype 
createUser.prototype.about = function()
{
    console.log("Information about user");
    console.log("Name :",this.firstName,this.lastName);
    console.log("Age :",this.age);
    console.log("Email :",this.email);
    console.log("Adderss :",this.adderss);
}
createUser.prototype.is18 = function() {
    return this.age >= 18;
}
const user1 = createUser('Priyansh','Patel','priyansh70890@gmail.com',18,'Mds');

console.log(user1);
console.log(user1.about());
console.log(user1.is18());

const user2 = createUser('Harshit','Dewda','harshit@gmail.com',18,'Mds');

