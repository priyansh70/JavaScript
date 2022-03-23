// Don't do this in Java Script

const user1 = {
    firstName : "Priyansh",
    age : 18,
    about : function(){
        // console.log(this);
        console.log("Name is ",this.firstName," and Age is ",this.age);
    }
}

const user2 = {
    firstName : "Harshit",
    age : 18,
    // about : function(){
    //     console.log("Name is ",this.firstName," and Age is ",this.age);
    // }
}

// const myFunc = user1.about;
// myFunc(); // it is give undefinied because this function doesn't know which this we about

// // for solve this problem we have to bind this function with user

const myFunc = user1.about.bind(user1);
// const myFunc1 = user1.about.bind(user2); 
myFunc();