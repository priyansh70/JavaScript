// Arrow Function
// !!! Important !!!
// Arrow Function doesn't have "this"

const user1 = {
    firstName : "Priyansh",
    age : 18,
    gender : "Male",
    about : () =>{
        console.log(this);
        console.log("Name is ",this.firstName," and Age is ",this.age);
    }
};
const user2 = {
    firstName : "Harshit",
    age : 18,
    // about : function(){
    //     console.log("Name is ",this.firstName," and Age is ",this.age);
    // }
}

// Arrow function ka this 1 level up hota hai Window
user1.about();
// we can't change arrow Function this

