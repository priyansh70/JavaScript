// getter and setter 
class Person {
    constructor(firstName,lastName,age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return `This is class Information`
    }
    static desc = "This is class Person";
    get fullName() {
        return (`Full Name :- ${this.firstName} ${this.lastName}`);
    }

    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Priyansh","Patel",18);

// console.log(person1.fullName);

person1.fullName = 'Khushi Patel';
// console.log(person1.fullName); 

// print static method 
console.log(Person.classInfo());
console.log(Person.desc); 
