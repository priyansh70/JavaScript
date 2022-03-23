// Create Multiple Object using Function
// const user1 = {
//     firstName : "Priyansh",
//     lastName : "Patel",
//     email : "priyansh70890@gmail.com",
//     age : 18,
//     adderss : "Mandsaur, Madhya Pradesh",
//     about(){
//         console.log("Information about user")
//         console.log("Name :",this.firstName,this.lastName);
//         console.log("Age :",this.age);
//         console.log("Email :",this.email)
//         console.log("Adderss :",this.adderss)
//     },
//     is18()
//     {
//         return this.age >= 18;
//     }
// }
// user1.about();
// console.log(user1.is18());

// this is so tadius
// but suppose we have milllions of value so we have to create function

// create function 
// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

function createUser(firstName,lastName,email,age,adderss)
{
    const user = {}
        user.firstName = firstName,
        user.lastName = lastName,
        user.email = email,
        user.age = age,
        user.adderss = adderss,
        user.about = function() {
            console.log("Information about user")
            console.log("Name :",this.firstName,this.lastName);
            console.log("Age :",this.age);
            console.log("Email :",this.email)
            console.log("Adderss :",this.adderss)
        },
        user.is18 = function()
        {
            return this.age >= 18;
        }
        return user;
}

const user1 = createUser('Priyansh','Patel','priyansh70890@gmail.com',18,'Mds');
// console.log(user1.about());
user1.about();

// const user2 = createUser('Harshit','Dewda','harshit@gmail.com',2,'Mandsaur');
// console.log(user2.about());