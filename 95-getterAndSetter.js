// getter and setter 
class Person {
    constructor(firstName,lastName,age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return (`Full Name :- ${this.firstName} ${this.lastName}`);
    }
    // setName(firstName,lastName)
    // {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    set fullName(fullName){
        // fullName.split(" "); // [firstName,lastName]
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Priyansh","Patel",18);
// we can run method as property by using get
// we create our methods by get keyword

// console.log(person1.firstName)
console.log(person1.fullName);
// console.log(person1.fullName()); //error

// if i want to change to first and last name so we use set keyword
// person1.setName("Khushi","Patel");

// another way 
// person1.firstName = "Khushi";
// person1.lastName = "Patel";

// console.log(person1.fullName);

// if we wants to set fullName in one line then -
person1.fullName = 'Khushi Patel';
console.log(person1.fullName); 