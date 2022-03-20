const user1 = {
    firstName: "Priyansh",
    age : 18,
    // let about = function(hobby){
    //     console.log(`User Name is ${this.firstName} and the Age is ${this.age} and User Hobby is -> ${hobby}`);
};
const user2 = {
    firstName: "Harshit",
    age : 6,
};
// user1.about(); //this function is in user1 and print value of user1

// But by call function i can print the values of user2 by user1 function see it ->
// user1.about.call(user2);

about.call(user2,"mere pas nahi hai");

//this function is in user1 but if i use call function then i have to pass user1 in argument
// user1.about.call(); //undefined 

about.call(user1,"Problem Solving");


