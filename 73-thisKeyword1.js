// !!!! Important !!!!

// method 
// function inside object

function personInfo()
{
    console.log(`Person Name is ${this.firstName} and the Age is ${this.age}  `)
}
const person1 = {
    // firstName : "Priyansh",
    firstName : "Khushi",
    age : 16,
    // about : function(){
    //     console.log("Person name is priyansh and age is 18");
    //     // console.log(`Person name is ${firstName} and ${age} is 18`); //we can 
    //     // not use it {error}

    //     console.log(`Person name is ${this.firstName} and ${this.age} is 18`); //we can not use it {error}

        
        // so we use this keyword 
    // }
    about : personInfo
}

const person2 = {
    firstName : "Priyansh",
    age : 18,
    about : personInfo
}
// console.log(person.firstName);

console.log(person1.about()); //print in name priyansh but i change name ?

// so we use this keyword in about function

// But we have more than 2 object so we separate this function and access when run it

console.log(person2.about());
// personInfo();  //undefined