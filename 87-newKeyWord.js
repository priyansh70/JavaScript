//New Keyword
function createUser(firstName,age) {
    this.firstName = firstName ;
    this.age = age;
}

createUser.prototype.about = function(){
    return (`Name is ${this.firstName} and age is ${this.age}`);
}

const user1 = new createUser("Priyansh",18);
console.log(user1);

// we didn't give __proto__ but this is print because we use new keyword
console.log(user1.about());
// New keyword do 3 works here
// 1 - create empty object thsis = {}
// 2 - return this
// 3 - Object.create(createUser.prototype) => we don't set it manually 
// by use of new keyword it default set [[prototype]]
