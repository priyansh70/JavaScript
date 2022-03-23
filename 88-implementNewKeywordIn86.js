// New Keyword
// 1 - this = {}
// 2 - return this 
// 3 - Object.create(functionName.prototype)
// If we use then we start our dunction Name with Capital Letter
// ___proto___ or [[prototype]] same
// but 
// [[prototype]] = prototype is completly diiferent

function CreateUser(firstName,lastName,email,age,adderss)
{   
        // 1 this = {}
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.adderss = adderss;
        // return this; // 2 return this 
}
CreateUser.prototype.about = function() //3 
{
    console.log("Information about user");
    console.log("Name :",this.firstName,this.lastName);
    console.log("Age :",this.age);
    console.log("Email :",this.email);
    console.log("Adderss :",this.adderss);
}
CreateUser.prototype.is18 = function() {
    return this.age >= 18;
}
const user1 = new CreateUser('Priyansh','Patel','priyansh70890@gmail.com',18,'Mds');

console.log(user1);
console.log(user1.about());
console.log(user1.is18());

// const user2 = new CreateUser('Harshit','Dewda','harshit@gmail.com',18,'Mds');
// console.log(user2.about());
