//  Store Method In Different Objects

const userMethod = {
    about : function() {
        console.log("Information about user")
        console.log("Name :",this.firstName,this.lastName);
        console.log("Age :",this.age);
        console.log("Email :",this.email)
        console.log("Adderss :",this.adderss)
    }, 
    is18 : function()
    {
        return this.age >= 18;
    }
}
function createUser(firstName,lastName,email,age,adderss)
{
    const user = {}
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.adderss = adderss;
        user.about = userMethod.about;
        user.is18 =  userMethod.is18;
        return user;
}

// In this code if we create 10 user then this functions will create 10 times
// if we create 1 million users then this function will create 1 million time

// so will separate this method
const user1 = createUser('Priyansh','Patel','priyansh70890@gmail.com',18,'Mds');
// console.log(user1.about());
user1.about();

const user2 = createUser('Priyansh','Patel','priyansh70890@gmail.com',18,'Mds');

// This code also have some problems
// so now create next files and solve them