// Intorduced in 2015 / ES6
// Class Keyword
// JavaScript Class Are Fake

class CreateUser{
    constructor(firstName,lastName,email,age,adderss)
    {
        console.log("Constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email  = email;
        this.age = age;
        this.adderss = adderss;
    }
    about(){
        console.log("Information about user");
        console.log("Name :",this.firstName,this.lastName);
        console.log("Age :",this.age);
        console.log("Email :",this.email);
        console.log("Adderss :",this.adderss);
    }
    is18(){
        return this.age >= 18;
    }
}

// function CreateUser(firstName,lastName,email,age,adderss)
// {   
//         // 1 this = {}
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.adderss = adderss;
//         // return this; // 2 return this 
// }
// CreateUser.prototype.about = function() //3 
// {
//     console.log("Information about user");
//     console.log("Name :",this.firstName,this.lastName);
//     console.log("Age :",this.age);
//     console.log("Email :",this.email);
//     console.log("Adderss :",this.adderss);
// }
// CreateUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

const user1 = new CreateUser("Priyansh","Patel",18,"priyansh@gmail.com","Mandsaur");
console.log(user1.firstName);
// user1.about();
console.log(Object.getPrototypeOf(user1));